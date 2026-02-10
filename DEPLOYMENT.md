# Deployment Guide for Optics Photonics Summit 2026

## Overview
This guide will help you deploy your conference website to production.

---

## Option 1: Deploy to Vercel + Netlify (Recommended - FREE)

### Backend Deployment (Vercel)

1. **Create Vercel Account**
   - Go to https://vercel.com
   - Sign up with GitHub

2. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

3. **Deploy Backend**
   ```bash
   cd backend
   vercel login
   vercel
   ```

4. **Set Environment Variables in Vercel Dashboard**
   - Go to your project settings
   - Add these environment variables:
     - `MONGODB_URI` = your MongoDB connection string
     - `PORT` = 5000
     - `EMAIL_USER` = your email (optional)
     - `EMAIL_PASS` = your email password (optional)

5. **Get Your Backend URL**
   - After deployment, Vercel will give you a URL like: `https://your-backend.vercel.app`
   - Copy this URL

### Frontend Deployment (Netlify)

1. **Update API URL**
   - Open `frontend/.env.production`
   - Replace with your Vercel backend URL:
     ```
     REACT_APP_API_URL=https://your-backend.vercel.app
     ```

2. **Update Frontend Code**
   - Open `frontend/src/pages/Registration.tsx`
   - Replace `http://localhost:5000` with `process.env.REACT_APP_API_URL || 'http://localhost:5000'`
   
   - Open `frontend/src/pages/Contact.tsx`
   - Replace `http://localhost:5000` with `process.env.REACT_APP_API_URL || 'http://localhost:5000'`

3. **Create Netlify Account**
   - Go to https://netlify.com
   - Sign up with GitHub

4. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

5. **Deploy Frontend**
   ```bash
   cd frontend
   npm run build
   netlify login
   netlify deploy --prod
   ```

6. **Your Site is Live!**
   - Netlify will give you a URL like: `https://your-site.netlify.app`

---

## Option 2: Deploy to Render (All-in-One - FREE)

### Backend Deployment

1. **Create Render Account**
   - Go to https://render.com
   - Sign up with GitHub

2. **Create New Web Service**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select the `backend` folder

3. **Configure Service**
   - Name: `optics-summit-backend`
   - Environment: `Node`
   - Build Command: `npm install`
   - Start Command: `node src/index.js`
   - Plan: Free

4. **Add Environment Variables**
   - `MONGODB_URI` = your MongoDB connection string
   - `PORT` = 5000

5. **Deploy**
   - Click "Create Web Service"
   - Get your backend URL: `https://optics-summit-backend.onrender.com`

### Frontend Deployment

1. **Update API URL**
   - Update `frontend/.env.production` with your Render backend URL

2. **Create Static Site on Render**
   - Click "New +" → "Static Site"
   - Connect your GitHub repository
   - Select the `frontend` folder

3. **Configure Static Site**
   - Name: `optics-summit-frontend`
   - Build Command: `npm install && npm run build`
   - Publish Directory: `build`

4. **Deploy**
   - Click "Create Static Site"
   - Your site will be live at: `https://optics-summit-frontend.onrender.com`

---

## Option 3: Deploy to Railway (Easiest - FREE)

1. **Create Railway Account**
   - Go to https://railway.app
   - Sign up with GitHub

2. **Deploy Backend**
   - Click "New Project" → "Deploy from GitHub repo"
   - Select your repository
   - Railway will auto-detect Node.js
   - Add environment variables in Settings
   - Get your backend URL

3. **Deploy Frontend**
   - Create another project for frontend
   - Add environment variable: `REACT_APP_API_URL`
   - Railway will auto-build and deploy

---

## MongoDB Setup (Required for All Options)

### Option A: MongoDB Atlas (FREE)

1. **Create Account**
   - Go to https://www.mongodb.com/cloud/atlas
   - Sign up for free

2. **Create Cluster**
   - Choose FREE tier (M0)
   - Select region closest to your users
   - Click "Create Cluster"

3. **Setup Database Access**
   - Go to "Database Access"
   - Add new database user
   - Save username and password

4. **Setup Network Access**
   - Go to "Network Access"
   - Click "Add IP Address"
   - Select "Allow Access from Anywhere" (0.0.0.0/0)

5. **Get Connection String**
   - Go to "Database" → "Connect"
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database password
   - Example: `mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/optics-summit?retryWrites=true&w=majority`

---

## Post-Deployment Checklist

- [ ] Backend is running and accessible
- [ ] Frontend is deployed and loads correctly
- [ ] MongoDB is connected
- [ ] Registration form works
- [ ] Contact form works
- [ ] All images load properly
- [ ] Navigation works smoothly
- [ ] Mobile responsive design works
- [ ] Test on different browsers

---

## Custom Domain (Optional)

### For Netlify:
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Update DNS records with your domain provider

### For Vercel:
1. Go to Project Settings → Domains
2. Add custom domain
3. Update DNS records

---

## Troubleshooting

### CORS Errors
If you see CORS errors, make sure your backend has the correct CORS configuration:
```javascript
app.use(cors({
  origin: ['https://your-frontend-url.netlify.app', 'http://localhost:3000']
}));
```

### API Connection Failed
- Check if backend URL is correct in `.env.production`
- Verify backend is running
- Check browser console for errors

### MongoDB Connection Failed
- Verify connection string is correct
- Check if IP whitelist includes 0.0.0.0/0
- Ensure database user has correct permissions

---

## Support

If you need help with deployment:
1. Check the platform's documentation
2. Review error logs in the deployment dashboard
3. Test locally first to ensure everything works

---

## Estimated Costs

**FREE Tier Limits:**
- Netlify: 100GB bandwidth/month
- Vercel: 100GB bandwidth/month
- Render: 750 hours/month
- Railway: $5 credit/month
- MongoDB Atlas: 512MB storage

For a conference website, FREE tiers should be sufficient!
