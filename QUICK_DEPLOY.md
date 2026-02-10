# Quick Deployment Steps

## Step 1: Push Code to GitHub ✓ (Already Done)
Your code is already on GitHub at: https://github.com/SaiMunjeti/optics-photonics-2026.git

## Step 2: Commit Latest Changes

Run these commands in your terminal:

```bash
git add backend/src/index.js
git commit -m "Update CORS configuration for Vercel"
git push
```

## Step 3: Deploy Backend to Vercel

1. Go to https://vercel.com/dashboard
2. Click "Add New" → "Project"
3. Import your GitHub repository: `SaiMunjeti/optics-photonics-2026`
4. **IMPORTANT**: Set Root Directory to `backend`
5. Add Environment Variables:
   - `PORT` = `5000`
   - `NODE_ENV` = `production`
   - `MONGODB_URI` = `mongodb://localhost:27017/optics-summit` (temporary - we'll fix this later)
6. Click "Deploy"
7. Wait for deployment to complete
8. **Copy your backend URL** (e.g., `https://optics-photonics-2026.vercel.app`)

## Step 4: Deploy Frontend to Vercel

1. In Vercel dashboard, click "Add New" → "Project" again
2. Import the SAME GitHub repository: `SaiMunjeti/optics-photonics-2026`
3. **IMPORTANT**: Set Root Directory to `frontend`
4. Add Environment Variable:
   - `REACT_APP_API_URL` = `YOUR_BACKEND_URL_FROM_STEP_3`
5. Click "Deploy"
6. Wait for deployment to complete
7. **Your website is now live!**

## Step 5: Test Your Website

1. Open your frontend URL (e.g., `https://optics-photonics-2026-frontend.vercel.app`)
2. Check if the website loads
3. Try the navigation
4. Test the forms (they won't save data yet because MongoDB is not set up)

## Step 6: Set Up MongoDB (Later)

For now, your website is live but forms won't work. We'll set up MongoDB Atlas later to make forms functional.

---

## Current Status

- ✓ Code on GitHub
- ⏳ Backend deployment (Step 3)
- ⏳ Frontend deployment (Step 4)
- ⏳ MongoDB setup (Step 6)

---

## Need Help?

If you get stuck at any step, tell me:
1. Which step number you're on
2. What you see on your screen
3. Any error messages

I'll help you fix it!
