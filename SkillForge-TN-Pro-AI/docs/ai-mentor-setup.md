# Live AI Mentor Setup (simple checklist)

- [ ] Push the full project to GitHub, including `netlify.toml` and `netlify/functions/mentor.mjs`.
- [ ] Import that repository into Netlify (not Netlify Drop).
- [ ] Add `OPENAI_API_KEY` under Site configuration → Environment variables.
- [ ] Redeploy.
- [ ] Test a question such as: “Explain TCP/IP in simple words with an example.”
- [ ] Check the mentor status badge and confirm the answer is generated.

Keep the API key secret. Do not paste it into the website code or GitHub. API usage may cost money.
