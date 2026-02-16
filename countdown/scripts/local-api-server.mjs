import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  const raw = fs.readFileSync(filePath, "utf8");
  for (const line of raw.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eqIdx = trimmed.indexOf("=");
    if (eqIdx < 0) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    let value = trimmed.slice(eqIdx + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!(key in process.env)) {
      process.env[key] = value;
    }
  }
}

loadEnvFile(path.join(projectRoot, ".env.local"));
loadEnvFile(path.join(projectRoot, ".env"));

const apiKey = process.env.MERRIAM_WEBSTER_API_KEY;
const baseUrl = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/";
const port = 3001;

const server = http.createServer(async (req, res) => {
  const requestUrl = new URL(req.url, `http://localhost:${port}`);

  if (req.method !== "GET") {
    res.writeHead(405, { "Content-Type": "application/json", Allow: "GET" });
    res.end(JSON.stringify({ error: "Method not allowed" }));
    return;
  }

  if (requestUrl.pathname !== "/api/merriam") {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Not found" }));
    return;
  }

  const word = requestUrl.searchParams.get("word");
  if (!word || !word.trim()) {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Missing required query parameter: word" }));
    return;
  }

  if (!apiKey) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        error: "Server configuration error: missing Merriam-Webster API key",
      })
    );
    return;
  }

  const lookupUrl = `${baseUrl}${encodeURIComponent(word.trim())}?key=${encodeURIComponent(apiKey)}`;

  try {
    const mwResponse = await fetch(lookupUrl);
    if (!mwResponse.ok) {
      res.writeHead(mwResponse.status, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Dictionary provider request failed" }));
      return;
    }

    const payload = await mwResponse.json();
    if (Array.isArray(payload) && payload.length > 0 && typeof payload[0] === "string") {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Word not found", suggestions: payload }));
      return;
    }

    if (!Array.isArray(payload) || payload.length === 0) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Word not found" }));
      return;
    }

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(payload));
  } catch (error) {
    console.error("Local Merriam proxy failed:", error);
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Unexpected server error" }));
  }
});

server.listen(port, () => {
  console.log(`Local API listening on http://localhost:${port}`);
});
