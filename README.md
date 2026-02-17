# countdown-app
hybrid web/mobile version of Countdown

## Merriam-Webster API setup (server-side on Vercel)

This project uses a server endpoint at `countdown/api/merriam.js` so the
Merriam-Webster API key is never exposed to client-side code.

Set this environment variable in Vercel project settings:

- `MERRIAM_WEBSTER_API_KEY`

Client requests now go to:

- `/api/merriam?word=<word>`
