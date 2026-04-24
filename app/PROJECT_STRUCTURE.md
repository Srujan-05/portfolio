# 📁 Space Portfolio - Project Structure & File Guide

## Complete File Structure

```
portfolio-app/
│
├── 📄 package.json                    # Dependencies & npm scripts
├── 📄 package-lock.json              # Dependency versions
├── 📄 README.md                      # Original README
│
├── 📚 QUICK_START.md                 # 5-minute setup guide ⭐ START HERE
├── 📚 SPACE_PORTFOLIO_GUIDE.md        # Detailed customization
├── 📚 DEPLOYMENT_CHECKLIST.md         # Step-by-step deployment
├── 📚 BUILD_SUMMARY.md               # What was built
│
├── 📁 public/
│   ├── index.html                    # Main HTML file
│   ├── manifest.json                 # PWA manifest
│   └── robots.txt                    # SEO robots file
│
└── 📁 src/                           # SOURCE CODE
    ├── 🎨 App.css                     # Global styles + animated stars
    ├── 🎯 App.js                      # Main app with HashRouter
    ├── 🎨 index.css                   # Base styling
    ├── 🎯 index.js                    # React entry point
    │
    ├── 📁 components/                 # Reusable components
    │   ├── 🎯 Navbar.jsx              # Navigation bar component
    │   ├── 🎨 Navbar.css              # Navbar styling
    │   ├── 🎯 ProjectCard.jsx         # Project card component
    │   └── 🎨 project-card.css        # Card styling
    │
    └── 📁 pages/                      # Page components
        ├── 🎯 Home.jsx                # Home page
        ├── 🎨 Home.css                # Home styling
        ├── 🎯 Projects.jsx            # Projects page
        └── 🎨 Projects.css            # Projects styling
```

## 📄 File Descriptions

### Root Level Files

#### **package.json**
- Lists all npm dependencies
- Defines npm scripts (start, build, deploy)
- **IMPORTANT**: Contains `homepage` URL for GitHub Pages
- **Edit this**: Update homepage before deployment

#### **QUICK_START.md** ⭐ **START HERE**
- 5-minute setup guide
- Quick customization steps
- Local testing instructions
- GitHub Pages deployment
- **Read this first!**

#### **SPACE_PORTFOLIO_GUIDE.md**
- Detailed customization guide
- How to change everything
- CSS customization
- Theme colors
- Component structure

#### **DEPLOYMENT_CHECKLIST.md**
- Step-by-step deployment
- Pre-deployment checklist
- Customization checklist
- Testing checklist
- Post-deployment verification

### public/ - Static Files

#### **public/index.html**
- Main HTML file
- React app mounts here: `<div id="root"></div>`
- Can add meta tags, links, etc.

### src/ - Source Code

#### **src/index.js**
- Entry point for React
- Renders App component to DOM
- **Don't need to edit**

#### **src/index.css**
- Base global styles
- Font setup
- Body styling
- Selection colors
- **Edit this**: Change base font or colors

#### **src/App.js** 🌟 **KEY FILE**
- Main component
- Sets up HashRouter
- Renders star backgrounds
- Manages routes
- **Features**:
  - 3-layer star animations
  - HashRouter for GitHub Pages
  - Main content area
  - Footer
- **Customize**: App layout, footer text

#### **src/App.css** 🌟 **KEY FILE**
- Global styles
- Animated star backgrounds (multiple layers)
- Color variables (CSS custom properties)
- Main layout
- **Features**:
  - Star animations (twinkle + shift)
  - Gradient background
  - Custom scrollbar
- **Customize**: Colors, animation speeds

### src/components/ - Reusable Components

#### **src/components/Navbar.jsx**
- Sticky navigation bar
- NavLink integration
- Active link detection
- **Features**:
  - Glowing effects
  - Smooth hover transitions
  - Responsive layout
- **Customize**: Links, title, colors

#### **src/components/Navbar.css**
- Navbar styling
- Sticky positioning
- Gradient effects
- Active state glow
- **Customize**: Colors, spacing, animations

#### **src/components/ProjectCard.jsx**
- Reusable card component
- Props: title, description, tech, githubLink
- Hover animations
- Tech badges
- GitHub button
- **Usage**: Map over projects array
- **Customize**: Card content, styling

#### **src/components/project-card.css**
- Card styling
- Glassmorphism effect
- Hover animations
- Tech badge styling
- **Customize**: Colors, effects, spacing

### src/pages/ - Page Components

#### **src/pages/Home.jsx**
- Hero section
- About me section
- Research interests
- Personal details
- Skills section
- **Content to update**:
  - Name and tagline
  - About paragraph
  - Contact information
  - Skills list
- **Don't edit**: Page layout structure

#### **src/pages/Home.css**
- Home page styling
- Hero animations
- Profile circle rotation
- Orbit animations
- Section layouts
- **Customize**: Colors, spacing, animation timing

#### **src/pages/Projects.jsx**
- Projects hero banner
- Projects grid
- Project cards
- Call-to-action section
- **Content to update**:
  - Projects array
  - Project details
  - GitHub links
- **Don't edit**: Component structure

#### **src/pages/Projects.css**
- Projects page styling
- Grid layout
- Hero banner styling
- Card animations
- **Customize**: Colors, spacing, layout

## 🎨 Styling System

### CSS Custom Properties (Variables)
Located in `App.css`:
```css
:root {
  --primary-dark: #0a0e27;
  --secondary-dark: #1a1f3a;
  --accent-purple: #a855f7;
  --accent-cyan: #06b6d4;
  --glow-purple: #c084fc;
  --glow-cyan: #22d3ee;
  --text-primary: #f0f9ff;
  --text-secondary: #cbd5e1;
}
```
**Edit this** to change entire theme!

### CSS Architecture
```
App.css (global)
├── Navbar.css (navigation)
├── project-card.css (card component)
├── Home.css (home page)
└── Projects.css (projects page)
```

## 🔄 Data Flow

### Home Page
```
App.js (HashRouter)
  ↓
Home.jsx (page component)
  ├── Hero (static JSX)
  ├── About (static JSX)
  ├── Research Interests (static JSX)
  ├── Personal Details (static JSX)
  └── Skills (static JSX)
```

### Projects Page
```
App.js (HashRouter)
  ↓
Projects.jsx (page component)
  ├── useState([projects])
  └── ProjectCard.jsx × N (repeated for each project)
```

### Navigation
```
Navbar.jsx
  ├── NavLink to="/"
  └── NavLink to="/projects"
```

## 📝 What to Edit vs. What to Leave

### ✅ EDIT THESE FILES

| File | What to Change |
|------|---|
| `Home.jsx` | Your name, bio, contact, skills |
| `Projects.jsx` | Add your projects |
| `Navbar.jsx` | Navigation title |
| `package.json` | Homepage URL before deployment |
| `App.css` | Colors in `:root` variables |

### ❌ DON'T EDIT THESE (Usually)

| File | Why |
|------|---|
| `App.js` | Main routing logic |
| `index.js` | React entry point |
| `ProjectCard.jsx` | Component structure |
| CSS files | Unless customizing design |

## 🚀 Deployment Files

### For GitHub Pages
```
.git/                  # Git repository
gh-pages branch        # Auto-created by npm run deploy
build/                 # Production build (auto-created)
package.json           # Homepage URL (UPDATE THIS)
```

## 📊 File Dependencies

```
index.js
  ↓
App.js (imports Navbar, Home, Projects)
  ├── Navbar.jsx
  │   └── Navbar.css
  ├── Home.jsx
  │   └── Home.css
  └── Projects.jsx
      ├── Projects.css
      └── ProjectCard.jsx
          └── project-card.css
```

## 🎯 Quick Edit Guide

### To Update Your Name
**File**: `src/pages/Home.jsx`
**Search for**: "Your Name"
**Replace with**: Your actual name

### To Update Contact Info
**File**: `src/pages/Home.jsx`
**Search for**: Phone, Email in detail cards
**Replace with**: Your information

### To Add a Project
**File**: `src/pages/Projects.jsx`
**Edit the `projects` array**:
```jsx
{
  id: 5,
  title: 'Your Project',
  description: 'What it does',
  tech: ['Tech1', 'Tech2'],
  githubLink: 'https://github.com/you/project'
}
```

### To Change Theme Color
**File**: `src/App.css`
**Edit `:root`**:
```css
--accent-purple: #YOUR_COLOR;
```

### To Update Navbar Title
**File**: `src/components/Navbar.jsx`
**Find**: `className="navbar-title"`
**Edit text**: "My Portfolio" → "Your Name"

## 📚 Key Concepts

### HashRouter
- `#/` instead of `/` for GitHub Pages
- Makes URL structure: `yourdomain.com/#/projects`
- Configured in `App.js`
- **Don't need to change**

### CSS Custom Properties
- Variables for theming (like SASS)
- Easy to update entire theme
- Located in `App.css` `:root`

### Responsive Design
- Mobile: 320px - 480px
- Tablet: 768px - 1024px
- Desktop: 1920px+
- Uses `@media` queries

### Component Reusability
- `ProjectCard.jsx` used multiple times
- Same component, different props
- Efficient code

## 🔗 Import Statements

Key imports in files:
```jsx
// App.js
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';

// Projects.jsx
import ProjectCard from '../components/ProjectCard';

// ProjectCard.jsx
import './project-card.css';
```

## 💾 Save & Deploy Workflow

```
1. Edit files (.jsx, .css)
   ↓
2. npm start (test locally)
   ↓
3. Save changes (Ctrl+S)
   ↓
4. git add . && git commit
   ↓
5. npm run deploy
   ↓
6. GitHub Pages updates (1-2 min)
   ↓
7. View at yourdomain.github.io/portfolio
```

## 🎨 Style Hierarchy

```css
index.css (base styles)
  ↓
App.css (global + variables)
  ↓
Component-specific CSS
  ├── Navbar.css
  ├── project-card.css
  ├── Home.css
  └── Projects.css
```

## 📱 Responsive File Organization

Each CSS file has `@media` queries:
```css
/* Desktop styles */

@media (max-width: 768px) {
  /* Tablet styles */
}

@media (max-width: 480px) {
  /* Mobile styles */
}
```

---

## ✨ Now You Know!

You understand:
- ✅ File structure
- ✅ What each file does
- ✅ What to edit
- ✅ How data flows
- ✅ How styling works
- ✅ How routing works

**Next**: Read `QUICK_START.md` and customize your portfolio!

🚀 Happy coding!
