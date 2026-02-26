# Puzzle Peace ADHD Coaching — Website

A static website for Puzzle Peace ADHD Coaching, ready to host on GitHub Pages.

## Files

```
puzzle-peace/
├── index.html          ← Home page
├── about.html          ← About Me
├── services.html       ← Services & Pricing
├── contact.html        ← Contact (email + GDPR info)
├── privacy-policy.html ← Privacy Policy (UK GDPR compliant)
├── css/
│   └── style.css       ← All styles
├── js/
│   └── main.js         ← Mobile nav toggle + active link highlighting
├── images/
│   └── logo.png        ← ⚠️ You need to copy your logo here (see below)
└── README.md
```

---

## Before you go live: things to fill in

Search the HTML files for `[` — every bracketed placeholder needs updating:

| Placeholder | Where | What to put |
|---|---|---|
| `[Coach Name]` | All pages | Your name |
| `[location]` | index, about, services | Your town/area |
| `[ICO Number TBC]` | All pages + privacy policy | Your ICO registration number |
| `[Body Name TBC]` | All pages | E.g. ICF, ADHD Coaches Organisation |
| `[Number TBC]` | All pages | Your membership number |
| `hello@puzzlepeace.co.uk` | contact, privacy policy | Your real email address |
| `[Month Year]` | privacy-policy.html | Date the policy was last updated |
| `[X] months / years` | privacy-policy.html | Your actual data retention periods |
| `[payment method / provider]` | privacy-policy.html | E.g. bank transfer, Stripe |
| `[email provider]` | privacy-policy.html | E.g. Gmail, Outlook |
| `£[TBC]` | services.html | Your pricing |
| `[Personal story]` | about.html | Your own story/bio content |

---

## Adding your logo

1. Copy your logo file to `images/logo.png`
   - Your logo is currently at: `C:\Users\sarah\OneDrive\Documents\Untitled design (10).png`
   - Copy it to this folder and rename it `logo.png`
2. If possible, use a version with a **transparent background** (PNG format) —
   this looks cleaner in the nav bar. You can export this from Canva.

The nav bar falls back gracefully to text if the logo file is missing.

---

## Deploying to GitHub Pages

### First time setup

1. Create a new repository on GitHub (e.g. `puzzle-peace-website`)
2. Make sure the repository is **Public** (required for free GitHub Pages)
3. In your terminal, from this folder:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/puzzle-peace-website.git
git push -u origin main
```

4. In your GitHub repository, go to **Settings → Pages**
5. Under **Source**, select **Deploy from a branch**
6. Choose `main` branch, `/ (root)` folder, and click **Save**
7. Your site will be live at `https://YOUR-USERNAME.github.io/puzzle-peace-website/` within a few minutes

### Updating the site later

After making changes to any files:

```bash
git add .
git commit -m "Update [describe what you changed]"
git push
```

GitHub Pages will automatically rebuild and publish the updated site.

---

## Custom domain (e.g. puzzlepeace.co.uk)

If you purchase a domain, you can connect it to GitHub Pages:

1. In your domain registrar, add a CNAME record pointing to `YOUR-USERNAME.github.io`
2. In GitHub Pages settings, enter your custom domain
3. GitHub will issue a free SSL certificate automatically

---

## Design notes

- **Font:** Nunito (loaded from Google Fonts) — dyslexia-friendly, rounded letterforms
- **Background:** `#fff7d0` (warm cream — never pure white)
- **Text:** `#284859` (dark teal — never pure black)
- **Accents:** `#91c0bc` (teal) and `#bbd1b0` (sage green)
- **Line length:** capped at 65 characters for comfortable reading
- **Line height:** 1.85 — generous spacing throughout
- **No justified text** — all text is left-aligned for dyslexia accessibility
- **Mobile responsive** — hamburger menu on small screens

---

## Contact

To add your content or make changes, edit the relevant `.html` file in any
text editor (e.g. Notepad, VS Code). The site is plain HTML/CSS — no build
tools or frameworks required.
