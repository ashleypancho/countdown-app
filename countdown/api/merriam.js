const BASE_URL = 'https://www.dictionaryapi.com/api/v3/references/collegiate/json/';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const rawWord = req.query.word;
  const word = Array.isArray(rawWord) ? rawWord[0] : rawWord;

  if (!word || !word.trim()) {
    return res.status(400).json({ error: 'Missing required query parameter: word' });
  }

  const apiKey = process.env.MERRIAM_WEBSTER_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Server configuration error: missing Merriam-Webster API key' });
  }

  const lookupUrl = `${BASE_URL}${encodeURIComponent(word.trim())}?key=${encodeURIComponent(apiKey)}`;

  try {
    const mwResponse = await fetch(lookupUrl);
    if (!mwResponse.ok) {
      return res.status(mwResponse.status).json({ error: 'Dictionary provider request failed' });
    }

    const payload = await mwResponse.json();

    // Merriam-Webster returns string suggestions when a word is not found.
    if (Array.isArray(payload) && payload.length > 0 && typeof payload[0] === 'string') {
      return res.status(404).json({ error: 'Word not found', suggestions: payload });
    }

    if (!Array.isArray(payload) || payload.length === 0) {
      return res.status(404).json({ error: 'Word not found' });
    }

    return res.status(200).json(payload);
  } catch (error) {
    console.error('Merriam-Webster lookup failed:', error);
    return res.status(500).json({ error: 'Unexpected server error' });
  }
}
