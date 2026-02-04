# Netlify Deployment Setup Guide

This guide walks you through deploying the Buganda project on Netlify.

## Prerequisites
- Netlify account (netlify.com)
- GitHub account connected to Netlify
- Your GitHub repository: `NabulyaAngella/BugandaN-ennono`

---

## Frontend Deployment Configuration

### Service Configuration

| Field | Value |
|-------|-------|
| **Team** | angelsaxy181's team |
| **Project Name** | buganda |
| **Branch to Deploy** | main |
| **Base Directory** | `frontend` |
| **Build Command** | `npm install && npm run build` |
| **Publish Directory** | `frontend/dist` |
| **Functions Directory** | `netlify/functions` |
| **Site URL** | https://buganda.netlify.app |

### Environment Variables to Add

Copy these into Netlify's Environment Variables section:

```
VITE_API_URL=https://buganda-backend.onrender.com
NODE_ENV=production
```

**Where to get each value:**

| Variable | Where to Get It |
|----------|-----------------|
| `VITE_API_URL` | Your Render backend service URL (e.g., `https://buganda-backend.onrender.com`) |
| `NODE_ENV` | Set to `production` |

---

## Step-by-Step Netlify Deployment

### 1. Connect GitHub Repository
1. Go to netlify.com → Login to your account
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub account
4. Select repository: `NabulyaAngella/BugandaN-ennono`
5. Authorize Netlify to access your GitHub

### 2. Configure Build Settings
1. **Branch to deploy:** Select `main`
2. **Base directory:** Enter `frontend`
3. **Build command:** Enter `npm install && npm run build`
4. **Publish directory:** Enter `frontend/dist`
5. **Functions directory:** `netlify/functions` (optional)

### 3. Add Environment Variables
1. Click "Advanced" → "New variable"
2. Add the following:
   - **Name:** `VITE_API_URL`
     **Value:** `https://buganda-backend.onrender.com` (update with your actual backend URL)
   - **Name:** `NODE_ENV`
     **Value:** `production`

### 4. Deploy
1. Review all settings
2. Click "Deploy buganda"
3. Wait for build to complete (usually 1-2 minutes)
4. Your site will be live at `https://buganda.netlify.app`

---

## Post-Deployment Steps

### 1. Update Render Backend with Frontend URL
If you haven't already, add your Netlify frontend URL to the backend environment variables on Render:
- Go to Render Dashboard → buganda-backend service
- Environment → Add variable
- **Name:** `FRONTEND_URL`
- **Value:** `https://buganda.netlify.app`

### 2. Enable Auto-Deploy
Netlify automatically deploys when you push to the `main` branch. To verify:
1. Go to Site Settings → Build & Deploy → Deploy Contexts
2. Ensure "main" branch is set to deploy

### 3. Set Custom Domain (Optional)
1. Go to Site Settings → Domain Management
2. Add custom domain or use the free Netlify subdomain

---

## Configuration Explanation

### Base Directory: `frontend`
- Tells Netlify where your frontend code is located
- Netlify will install dependencies and run build command from this folder
- Prevents unnecessary rebuilds when backend changes

### Build Command: `npm run build`
- Runs Vite's production build
- Creates optimized bundle in the `dist` folder
- This runs from the `frontend` directory

### Publish Directory: `frontend/dist`
- Points to the built static files that Netlify will serve
- Vite outputs the production-ready code here
- Netlify serves these files globally on a CDN

### Environment Variables
- `VITE_API_URL` - Frontend uses this to know where your backend API is located
- `NODE_ENV` - Tells the build to optimize for production

---

## Automatic Deployments

When you push to the `main` branch:
1. Netlify automatically detects the change
2. Runs `npm run build` command from the `frontend` folder
3. Deploys the new code to `https://buganda.netlify.app`
4. Takes 1-2 minutes to complete

### Force a Redeploy
If you need to manually redeploy:
1. Go to Netlify Dashboard → Site Settings
2. Click "Trigger deploy" → "Deploy site"

---

## Environment Variables Reference

### Local Development (`.env` file)
```
VITE_API_URL=http://localhost:5500
```

### Netlify Production
```
VITE_API_URL=https://buganda-backend.onrender.com
NODE_ENV=production
```

---

## Testing Your Deployment

1. **Visit your site:**
   ```
   https://buganda.netlify.app
   ```

2. **Check API Integration:**
   - Open browser DevTools (F12)
   - Go to Network tab
   - Make sure API requests go to `https://buganda-backend.onrender.com`

3. **Check Build Logs:**
   - Go to Netlify Dashboard → Deploys
   - Click on latest deploy to see build logs
   - Look for any errors or warnings

---

## Troubleshooting

### Build Fails
- Check the build logs in Netlify Dashboard → Deploys
- Run `npm run build` locally in the `frontend` folder to test
- Verify all dependencies are listed in `package.json`

### Site Won't Load
- Check that the correct Publish Directory is set (`frontend/dist`)
- Verify environment variables are correct
- Clear browser cache (Ctrl+Shift+Delete)

### API Calls Failing (CORS)
- Make sure `VITE_API_URL` environment variable is set correctly
- Add `https://buganda.netlify.app` to CORS settings in your backend
- Check that backend is running and accessible

### Environment Variables Not Working
- Ensure variables are set in Netlify (not just locally)
- Trigger a manual redeploy after adding environment variables
- The prefix `VITE_` is required for frontend to access the variable

---

## Quick Reference

| Setting | Value |
|---------|-------|
| Site Name | buganda |
| Build Command | `npm run build` |
| Publish Directory | `frontend/dist` |
| Base Directory | `frontend` |
| Branch | main |
| Team | angelsaxy181's team |
| Live URL | https://buganda.netlify.app |

---

## Difference from Render

- **Netlify:** Hosts your frontend static files (HTML, CSS, JS) - FAST & FREE
- **Render:** Hosts your backend API server (Node.js) - Small fee for always-on

Together they form your complete application!
