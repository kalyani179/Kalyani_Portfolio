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
