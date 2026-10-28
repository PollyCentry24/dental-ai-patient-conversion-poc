# One-night launch checklist

## Essential (prioritize these)

1. Open `assets/preview.png` and `index.html` to review what the app looks like.
2. Create a new **public** GitHub repository named `dental-ai-patient-conversion-poc` (do not initialize with other files).
3. Upload the ZIP's project contents **not the outer folder**: `index.html`, `style.css`, `src/`, `docs/`, `assets/`, `tests/`, `.github/`, etc. GitHub's web uploader accepts files/folders when supported; alternatively use Git CLI commands below.
4. Replace `PollyCentry24` in the main README with your actual GitHub handle.
5. Under **Settings → Pages → Build and deployment**, choose **Deploy from a branch**, `main`, and `/(root)`, then save.
6. After deployment, open `https://PollyCentry24.github.io/dental-ai-patient-conversion-poc/`. Confirm the conversation and booking tabs work. Copy the demo URL into the README's Live demo section.
7. Run `npm test` locally if you have Node.js 22+, or review the GitHub Actions run under **Actions**.
8. Pin the repository to your GitHub profile: Profile → Customize your pins.

### Alternative upload via git

```bash
git init
git add .
git commit -m "Launch synthetic dental AI conversion POC"
git branch -M main
git remote add origin https://github.com/PollyCentry24/dental-ai-patient-conversion-poc.git
git push -u origin main
```

Note: make the empty GitHub repo first, and configure Git credentials in your chosen Git client.

## Optional extra 20–30 minutes

Create a second public repository named **exactly** your GitHub username; put the text of `profile/README-template.md` into that repository's top-level `README.md`. GitHub will display it on your public profile. Replace placeholders and verify links.

## Do not do tonight

- Train a clinical model on real patient messages.
- Connect to production clinic scheduling software without authorization.
- Claim current revenue, customer pilots, or real-life model accuracy.
- Commit API keys or clinic data.
- Build a second unfinished repo just for a green contribution chart.