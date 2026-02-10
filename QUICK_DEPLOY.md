# Quick Deploy Guide - 5 Minutes

## Fastest Way to Deploy (Vercel + Netlify)

### Step 1: Deploy Backend (2 minutes)

```bash
# Install Vercel CLI
npm install -g vercel

# Go to backend folder
cd backend

# Login and deploy
vercel login
vercel --prod
```

**Set environment variables in Vercel dashboard:**
- MONGODB_URI = (your MongoDB connection string)
- PORT = 5000

**Copy your backend URL** (e.g., `https://your-backend.vercel.app`)

---

### Step 2: Update Frontend (1 minute)

Edit `frontend/.env.production`:
```
REACT_APP_API_URL=https://your-backend.vercel.app
```

---

### Step 3: Deploy Frontend (2 minutes)

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Go to frontend folder
cd frontend

# Build and deploy
npm run build
netlify login
netlify deploy --prod
```

---

### Step 4: Setup MongoDB Atlas (if you haven't)

1. Go to https://www.mongodb.com/cloud/atlas
2. Create FREE account
3. Create FREE cluster (M0)
4. Add database user
5. Whitelist all IPs (0.0.0.0/0)
6. Get connection string
7. Add to Vercel environment variables

---

## Done! 🎉

Your website is now live:
- Frontend: `https://your-site.netlify.app`
- Backend: `https://your-backend.vercel.app`

Test the registration and contact forms to make sure everything works!

---

## Alternative: One-Click Deploy

### Deploy to Render (All-in-One)

1. Go to https://render.com
2. Sign up with GitHub
3. Click "New +" → "Web Service" for backend
4. Click "New +" → "Static Site" for frontend
5. Add MongoDB connection string
6. Done!

---

## Need Help?

Check `DEPLOYMENT.md` for detailed instructions and troubleshooting.
