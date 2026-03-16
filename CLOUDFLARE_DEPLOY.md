# Deploy to Cloudflare Pages

## Option 1: Cloudflare Pages Dashboard (Recommended)

1. **Build the project locally**
   ```bash
   npm run build
   ```
   This creates a `dist/` folder with your static site.

2. **Deploy via Cloudflare Dashboard**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages**
   - Choose **Direct Upload**
   - Upload the contents of the `dist/` folder (not the folder itself)

3. **Or connect your Git repository**
   - Choose **Connect to Git** (GitHub/GitLab)
   - Select your repository
   - **Build configuration:**
     - Framework preset: `None` or `Vite`
     - Build command: `npm run build`
     - Build output directory: `dist`
     - **Install command:** `npm install` (use this if `npm ci` fails with lock file sync errors)
   - Click **Save and Deploy**

## Option 2: Wrangler CLI

1. **Install Wrangler** (if not already installed)
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare**
   ```bash
   npx wrangler login
   ```

3. **Build and deploy**
   ```bash
   npm run build
   npx wrangler pages deploy dist --project-name=kalyani-portfolio
   ```

   On first run, you'll be prompted to create the project. Choose your account and confirm.

## Your site will be live at:
`https://kalyani-portfolio.pages.dev` (or a custom domain you configure)

---

## Troubleshooting

### "package.json and package-lock.json are in sync" / picomatch version error

If the build fails during **Installing tools and dependencies** with a lock file sync error:

1. Go to **Settings** → **Builds & deployments** → **Build configuration**
2. Set **Install command** to: `npm install` (instead of the default `npm ci`)
3. Save and redeploy

`npm install` is more forgiving than `npm ci` when lock files differ between local and Cloudflare's Node/npm versions.
