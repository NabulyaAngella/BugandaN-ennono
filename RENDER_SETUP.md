# Render Deployment Setup Guide

This guide walks you through deploying the Buganda project on Render.

## Prerequisites
- Render account (render.com)
- GitHub account connected to Render
- MongoDB Atlas account or MongoDB connection string

---

## Backend Deployment (Node.js)

### Service Configuration

| Field | Value |
|-------|-------|
| **Root Directory** | `BugandaNennono/backend` |
| **Build Command** | `npm install` |
| **Start Command** | `npm start` |
| **Instance Type** | Starter ($7/month) minimum for production |

### Environment Variables to Add

Copy these into Render's Environment Variables section:

```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/buganda
PORT=10000
JWT_SECRET=generate-a-strong-random-string-here
NODE_ENV=production
FRONTEND_URL=https://your-frontend-domain.netlify.app
```

**Where to get each value:**

| Variable | Where to Get It |
|----------|-----------------|
| `MONGO_URI` | MongoDB Atlas → Clusters → Connect → Connection String |
| `PORT` | Default: 10000 (Render assigns this) |
| `JWT_SECRET` | Generate with: `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"` |
| `NODE_ENV` | Set to `production` |
| `FRONTEND_URL` | Your Netlify domain (e.g., `https://buganda.netlify.app`) |

---

## Frontend Deployment (Static Site)

### Service Configuration

| Field | Value |
|-------|-------|
| **Root Directory** | `BugandaNennono/frontend` |
| **Build Command** | `npm install && npm run build` |
| **Publish Directory** | `dist` |
| **Instance Type** | Free (static sites) |

### Environment Variables to Add

```
VITE_API_URL=https://buganda-backend.onrender.com
```

**Note:** Replace `buganda-backend` with your actual backend service name on Render.

---

## Step-by-Step Deployment

### 1. Create Backend Service
1. Go to render.com → Dashboard → New +
2. Select "Web Service"
3. Connect your GitHub repository
4. Fill in the configuration above
5. Add environment variables
6. Click "Deploy"

### 2. Create Frontend Service
1. Go to render.com → Dashboard → New +
2. Select "Static Site"
3. Connect your GitHub repository
4. Fill in the configuration above
5. Add environment variables
6. Click "Deploy"

### 3. Update Frontend with Backend URL
After backend deployment completes:
1. Copy your backend service URL (e.g., `https://buganda-backend.onrender.com`)
2. Update the `VITE_API_URL` environment variable in the frontend service
3. Trigger a redeploy: Dashboard → Frontend Service → Manual Deploy

---

## Environment File Reference

### Backend `.env` (for local development)
See `backend/.env.example` for the template

### Frontend `.env` (optional for local development)
```
VITE_API_URL=http://localhost:5500
```

---

## Free vs Paid Instances

### Free (No Cost)
- 512 MB RAM, 0.1 CPU
- **Limitation:** Spins down after 15 minutes of inactivity
- **Best for:** Testing/staging environments

### Starter ($7/month) - Recommended
- 512 MB RAM, 0.5 CPU
- Always running
- SSH access
- Perfect for small production apps

### Standard ($25/month) - For Growth
- 2 GB RAM, 1 CPU
- Best for moderate traffic

---

## Testing Your Deployment

1. **Backend Health Check:**
   ```
   https://your-backend-service.onrender.com/api/example
   ```

2. **Frontend:**
   Visit your Render static site URL (will be provided after deployment)

3. **API Integration:**
   - Open browser DevTools (F12)
   - Go to Network tab
   - Check if requests to `VITE_API_URL` succeed

---

## Troubleshooting

### Backend Won't Start
- Check `npm start` runs correctly locally
- Verify `MONGO_URI` is correct
- Check logs in Render dashboard

### Frontend Build Fails
- Run `npm run build` locally to test
- Check Node.js version (should be 18+)
- Verify all dependencies are installed

### CORS Errors
- Add frontend URL to backend `CORS` configuration
- Update `FRONTEND_URL` environment variable

### Free Instance Spinning Down
- Upgrade to a paid instance type
- Or use a uptime monitor service (UptimeRobot, etc.)

---

## Automatic Deployments

Both services auto-deploy when you push to the `main` branch in GitHub, but:
- Backend only redeploys on changes in `backend/` folder
- Frontend only redeploys on changes in `frontend/` folder

This prevents unnecessary rebuilds!
