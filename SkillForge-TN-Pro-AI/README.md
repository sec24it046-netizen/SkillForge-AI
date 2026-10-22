# SkillForge TN Pro — AI Mentor Prototype

A beginner-friendly, static prototype for cybersecurity and Industrial IoT learning, with an optional secure AI study mentor.

## What works in the website
- Cyber safety quiz, IIoT sensor simulator, and threat-detection scenario
- Learning paths, local progress and badges, portfolio export
- Mentor panel with prepared fallback answers
- Optional live AI mentor for study questions across subjects

## Important: live AI setup
The live mentor does **not** work from a simple drag-and-drop static upload alone. It needs the included Netlify Function and a secret OpenAI API key stored on Netlify. Do not put your API key in `index.html`, GitHub, or any public file.

### Deploy with Netlify + GitHub
1. Upload all files/folders in this project to a GitHub repository. Keep `index.html`, `netlify.toml`, and the `netlify/` folder at the repository root.
2. In Netlify, choose **Add new site → Import an existing project** and connect the GitHub repository.
3. In the Netlify site settings, add an environment variable named `OPENAI_API_KEY` with your own API key. Add `OPENAI_MODEL` as `gpt-4.1-mini` if desired.
4. Trigger a new deploy. Open the site and ask the mentor a study question.
5. If the function is not configured or the AI service is unavailable, the mentor will show the built-in demo answer and explain that live AI is not connected.

An OpenAI API key and API usage may incur charges. Set a budget/usage limit in your API provider account and never share the key.

## Local/static preview
Opening `index.html` directly or using a simple static upload will show the website, but the live AI function will not run unless deployed with Netlify Functions. The rest of the prototype still works.

## Prototype limitations
This is a learning prototype, not a full production platform. It does not include student accounts, a hosted database, real industrial hardware access, or verified certificates. The live AI mentor sends the question to the configured AI provider; avoid entering private or sensitive information.
