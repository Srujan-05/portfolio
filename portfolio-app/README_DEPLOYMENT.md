# My Portfolio Website

A beautiful, responsive portfolio website built with React and React Router, showcasing projects, skills, and personal information.

## Features

✨ **Multi-page routing** using React Router with HashRouter
📱 **Fully responsive design** - works on desktop, tablet, and mobile devices
🎨 **Modern styling** with gradient backgrounds and smooth animations
📊 **Project showcase** with GitHub links and project details
🌐 **GitHub Pages deployment** ready
⚡ **Fast and optimized** React application

## Technologies Used

- **React 19.2.5** - UI library
- **React Router DOM 7.14.2** - Client-side routing with HashRouter
- **CSS3** - Modern styling with gradients and animations
- **GitHub Pages** - Free hosting

## Project Structure

```
portfolio-app/
├── src/
│   ├── components/
│   │   ├── Navbar.js       # Navigation component with NavLink
│   │   └── Navbar.css      # Navigation styling
│   ├── pages/
│   │   ├── Home.js         # Home page with About, Skills, Details
│   │   ├── Home.css        # Home page styling
│   │   ├── Projects.js     # Projects page with GitHub links
│   │   └── Projects.css    # Projects page styling
│   ├── App.js              # Main app component with routing
│   ├── App.css             # App styling
│   ├── index.js            # Entry point
│   └── index.css           # Global styling
├── public/
│   ├── index.html
│   └── favicon.ico
└── package.json            # Dependencies and scripts
```

## Customization Guide

### 1. Update Personal Information

Edit `src/pages/Home.js` to add your personal details:

```javascript
// Update the following fields:
- Name
- Phone Number  
- Personal Email (your.email@gmail.com)
- College Email (your.email@college.edu)
- About Me text
- Research Interests
- Skills categories and items
```

### 2. Update Profile Picture

In `src/pages/Home.js`, replace the placeholder image URL:

```javascript
// Change this line:
src="https://via.placeholder.com/200?text=Profile+Picture"

// To your image URL (example):
src="https://yourimage.com/profile.jpg"
// Or use a local image by placing it in public/ folder:
src="/profile.jpg"
```

### 3. Add Your Projects

Edit `src/pages/Projects.js` and update the `projects` array:

```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'Project description',
    technologies: ['React', 'Node.js', 'MongoDB'],
    features: ['Feature 1', 'Feature 2'],
    github: 'https://github.com/your-username/project-name',
    demo: 'https://project-demo-url.com'
  },
  // Add more projects...
];
```

### 4. Customize Colors

The color scheme uses gradients defined in CSS files:

- **Primary Gradient**: `#667eea` to `#764ba2` (Purple/Blue)
- **Secondary Gradient**: `#f093fb` to `#f5576c` (Pink/Red)

To change colors, update these hex codes in:
- `src/components/Navbar.css`
- `src/pages/Home.css`
- `src/pages/Projects.css`

## Development

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

```bash
# Navigate to the project directory
cd "Assignment-4 Portfolio/portfolio-app"

# Install dependencies (already done)
npm install
```

### Running Locally

```bash
# Start development server
npm start

# Open http://localhost:3000/portfolio in your browser
```

The app will automatically reload when you make changes.

### Building for Production

```bash
# Create optimized production build
npm run build

# Build output will be in the 'build' folder
```

## GitHub Pages Deployment

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click "New Repository"
3. Name: `portfolio`
4. Make it **public**
5. Click "Create Repository"

### Step 2: Push Project to GitHub

```bash
cd "Assignment-4 Portfolio/portfolio-app"

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "first commit"

# Rename branch to main
git branch -M main

# Add remote repository (replace your-username)
git remote add origin https://github.com/your-username/portfolio.git

# Push to GitHub
git push -u origin main
```

### Step 3: Update package.json

The package.json is already configured with:
- `"homepage": "https://your-username.github.io/portfolio"`
- `"predeploy": "npm run build"`
- `"deploy": "gh-pages -d build"`

**IMPORTANT**: Change `your-username` to your actual GitHub username!

```json
"homepage": "https://your-actual-username.github.io/portfolio",
```

### Step 4: Deploy to GitHub Pages

```bash
# Deploy the app
npm run deploy

# This will:
# 1. Build the app (npm run build)
# 2. Deploy to gh-pages branch
# 3. The app will be live at https://your-username.github.io/portfolio
```

### Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings"
3. Go to "Pages" section
4. Select branch: `gh-pages`
5. Click "Save"

### Step 6: Verify Deployment

- Check the "Deployments" section in your GitHub repository
- Your portfolio should be live at: `https://your-username.github.io/portfolio`
- Test all links work correctly

## Important Notes

### Key Points for Submission

✅ Repository must be **public**
✅ All links must be **working**
✅ Use **HashRouter** (already configured)
✅ Deploy using **gh-pages** (already set up)
✅ Include at least **2 projects** (update in Projects.js)
✅ Include **personal details** (update in Home.js)
✅ Include **skills section** (update in Home.js)

### Troubleshooting

**Issue**: App shows blank page
- **Solution**: Check browser console for errors. Ensure all component imports are correct.

**Issue**: Links not working on GitHub Pages
- **Solution**: Make sure you're using HashRouter (already done). Routes should start with `#/`

**Issue**: Changes not deploying
- **Solution**: Run `npm run deploy` again after making changes. Clear browser cache.

**Issue**: 404 errors on GitHub Pages
- **Solution**: Verify the `homepage` URL in package.json matches your repository name and username.

**Issue**: CSS not loading
- **Solution**: Check that all CSS files are in the correct locations and properly imported.

## Deployment Checklist

- [ ] Update personal information in Home.js
- [ ] Add profile picture
- [ ] Add at least 2 projects in Projects.js
- [ ] Update GitHub username in package.json homepage URL
- [ ] Test app locally (npm start)
- [ ] Create GitHub repository named "portfolio"
- [ ] Push code to GitHub (git push)
- [ ] Run npm run deploy
- [ ] Enable GitHub Pages (Settings → Pages)
- [ ] Test live website
- [ ] Verify all links work
- [ ] Submit GitHub repo link and live website link

## Live Demo

Once deployed, your portfolio will be available at:
```
https://your-username.github.io/portfolio
```

## Useful Resources

- [React Documentation](https://react.dev)
- [React Router Documentation](https://reactrouter.com)
- [GitHub Pages Documentation](https://pages.github.com)
- [CSS Gradients](https://css-tricks.com/css-gradients/)

## License

This project is open source and available under the MIT License.

---

**Good luck with your portfolio! 🚀**
