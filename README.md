# shubhamkumarsharma03.github.io

This repository is set up to serve a personal portfolio on GitHub Pages at:

https://shubhamkumarsharma03.github.io

Files added in this commit:

- `index.html` — the homepage for your portfolio (root of the site)
- `css/style.css` — simple responsive styles used by `index.html`

How this site is published

1. Because the repository name is `shubhamkumarsharma03.github.io`, GitHub Pages will publish the site from the `main` branch root by default.
2. Push your changes to the `main` branch on GitHub and the site will become available at the URL above within a minute or two.

Preview locally

- Open `index.html` in your browser (double-click or use a local static server such as `Live Server` in VS Code).

Customizing the site

- Edit `index.html` to change text, add/remove sections, or link to your real projects.
- Edit `css/style.css` to change fonts, colors, or layout.
- Add images to an `assets/` folder and reference them from `index.html`.

Optional improvements

- Add a `CNAME` file at the repository root if you want to use a custom domain.
- Add a resume PDF and link it from the hero/about section.
- Replace placeholder project cards with real project links and screenshots.

Add your certificate image

- If you have the real certificate image (e.g. `certificate.png`), place it in the `assets/` folder. The site will display `assets/certificate.png` automatically and fall back to an included SVG placeholder.

Committing & pushing from PowerShell

Use these commands in PowerShell from the repository root to add, commit and push your changes to GitHub:

```powershell
git add .
git commit -m "Update portfolio: add certificate and user info"
git push origin main
```

After pushing, your site will be published automatically at the GitHub Pages URL above.

Add a project screenshot (Expense Tracker)

- Save a screenshot image as `assets/expense-tracker.png`. The Projects section will use it automatically and fall back to a placeholder if missing.

```powershell
Set-Location "C:\Users\shubh\Documents\GitHub\shubhamkumarsharma03.github.io"
Copy-Item "C:\path\to\your\expense-tracker.png" ".\assets\expense-tracker.png" -Force
git add .\assets\expense-tracker.png
git commit -m "Add expense tracker screenshot"
git push origin main
```

Add your resume PDF

- Save your resume (e.g., `Resume_Updated.pdf`) into the `assets/` folder. The site links to `assets/Resume_Updated.pdf` from the header and the hero section.

```powershell
Set-Location "C:\Users\shubh\Documents\GitHub\shubhamkumarsharma03.github.io"
Copy-Item "C:\Users\shubh\Desktop\Shubham\Resumes\Resume_Updated.pdf" ".\assets\Resume_Updated.pdf" -Force
git add .\assets\Resume_Updated.pdf
git commit -m "Add resume PDF"
git push origin main
```

If you'd like, I can:

- Wire up a contact form integration (Formspree or Netlify Forms).
- Add a script to automatically generate a projects grid from a JSON file.
- Improve accessibility and SEO meta tags.

---
Open `index.html` in a browser to preview the new portfolio locally.