# 🚀 Space-Themed Personal Portfolio

A premium, futuristic portfolio website built with React featuring a stunning space/galaxy theme with glassmorphism, neon glows, and smooth animations.

## ✨ Features

- **Space/Galaxy Theme**: Dark, futuristic design with deep gradients and neon glows
- **Animated Star Background**: CSS-based animated stars with twinkling and movement effects
- **Glassmorphism Cards**: Modern frosted glass effect with blur and transparency
- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: Fade-ins, hover effects, floating elements, and orbit animations
- **GitHub Pages Ready**: HashRouter setup for seamless GitHub Pages deployment
- **Modern React**: Functional components with hooks
- **Plain CSS**: No Tailwind or frameworks, pure CSS for full control

## 🎨 Design Highlights

- **Color Palette**:
  - Deep dark: `#0a0e27` - Primary background
  - Purple accent: `#a855f7` - Glowing effects
  - Cyan accent: `#06b6d4` - Bright highlights
  - Cyan text: `#22d3ee` - Primary text

- **Special Effects**:
  - Animated rotating stars with multiple layers
  - Profile image with spinning border
  - Orbiting planets around hero section
  - Glowing text with gradient effects
  - Hover card animations with tilt effects
  - Glassmorphic background panels

## 📁 Project Structure

```
src/
├── App.js                 # Main app with HashRouter
├── App.css               # Global styles & animated stars
├── index.css             # Base styles
├── components/
│   ├── Navbar.jsx        # Navigation bar (sticky)
│   ├── Navbar.css
│   ├── ProjectCard.jsx   # Reusable project card
│   └── project-card.css
├── pages/
│   ├── Home.jsx          # Hero, about, skills
│   ├── Home.css
│   ├── Projects.jsx      # Projects showcase
│   └── Projects.css
└── index.js
```

## 🚀 Getting Started

### Prerequisites
- Node.js 14+
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd portfolio-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎯 Customization Guide

### 1. Personal Information

**Edit `Home.jsx`:**
```jsx
// Hero Section
<h1 className="hero-title">
  <span className="gradient-text">Your Name</span>
</h1>

// Contact Details (Personal Details Section)
<div className="detail-card">
  <div className="detail-icon">👤</div>
  <h4 className="detail-label">Full Name</h4>
  <p className="detail-value">Your Full Name</p>
</div>
```

### 2. Research Interests

Replace the interests array in `Home.jsx`:
```jsx
{[
  'Artificial Intelligence',
  'Machine Learning',
  'Deep Learning',
  'Computer Vision',
  'Natural Language Processing',
  // Add your interests here
].map((interest, index) => (
  <div key={index} className="interest-chip">
    <span className="chip-icon">✨</span>
    {interest}
  </div>
))}
```

### 3. Skills

Update the skills grid in `Home.jsx`:
```jsx
{[
  { category: 'Languages', items: ['Python', 'JavaScript', 'Java', 'C++'] },
  { category: 'Frontend', items: ['React', 'HTML/CSS', 'Tailwind', 'Bootstrap'] },
  // Add more skill categories
]}
```

### 4. Projects

Edit the projects array in `Projects.jsx`:
```jsx
const [projects] = useState([
  {
    id: 1,
    title: 'Your Project Title',
    description: 'Detailed description of what the project does',
    tech: ['React', 'Node.js', 'MongoDB'],
    githubLink: 'https://github.com/yourusername/project-name'
  },
  // Add more projects
]);
```

### 5. Profile Picture

Replace the avatar placeholder in `Home.jsx` with your image:
```jsx
// Option 1: Use an image
<img src="/path-to-your-image.jpg" alt="Profile" />

// Option 2: Keep the SVG and adjust styling
```

### 6. GitHub Links

Update all GitHub links:
- In `Projects.jsx`: Project-specific GitHub repos
- In `Projects.jsx`: Main GitHub profile link
- Update package.json homepage

### 7. Theme Colors

Customize colors in `App.css`:
```css
:root {
  --primary-dark: #0a0e27;
  --secondary-dark: #1a1f3a;
  --accent-purple: #a855f7;
  --accent-blue: #3b82f6;
  --accent-cyan: #06b6d4;
  --glow-purple: #c084fc;
  --glow-blue: #60a5fa;
  --glow-cyan: #22d3ee;
  --text-primary: #f0f9ff;
  --text-secondary: #cbd5e1;
}
```

## 📱 Responsive Breakpoints

- **Desktop**: Full layout with all animations
- **Tablet (768px)**: Adjusted padding and font sizes
- **Mobile (480px)**: Single column layouts, simplified animations

## 🌐 Deployment to GitHub Pages

### 1. Update package.json

```json
{
  "homepage": "https://yourusername.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

### 2. Install gh-pages

```bash
npm install --save-dev gh-pages
```

### 3. Deploy

```bash
npm run deploy
```

### 4. Configure GitHub Repository

1. Go to your repository settings
2. Under "Pages", set the source to "gh-pages" branch
3. Your portfolio will be live at `https://yourusername.github.io/portfolio`

## 🎨 CSS Custom Properties

The design uses CSS custom properties (variables) for easy theming. Modify them in `App.css`:

```css
/* Main colors */
--primary-dark: #0a0e27;
--secondary-dark: #1a1f3a;

/* Accent colors */
--accent-purple: #a855f7;
--accent-cyan: #06b6d4;

/* Glow effects */
--glow-purple: #c084fc;
--glow-cyan: #22d3ee;

/* Text colors */
--text-primary: #f0f9ff;
--text-secondary: #cbd5e1;
```

## 🌟 Key Animations

1. **Star Twinkling** - Multiple layers of stars with varying opacities
2. **Profile Rotation** - Continuous spin animation on profile circle
3. **Orbit Animation** - Planets orbiting around hero section
4. **Hover Effects** - Cards lift and glow on hover
5. **Fade-in Effects** - Page and element fade-in transitions

## 🔧 Technologies Used

- **React 19** - UI library
- **React Router v7** - Client-side routing with HashRouter
- **Plain CSS3** - Styling, animations, gradients
- **JavaScript ES6+** - Modern JavaScript

## 📝 File Descriptions

### App.js
- Sets up HashRouter for GitHub Pages compatibility
- Renders star background layers
- Manages main navigation and routing

### Navbar.jsx
- Sticky navigation bar
- NavLink active states with glowing effects
- Responsive mobile menu

### ProjectCard.jsx
- Reusable card component for projects
- Glassmorphism design
- Tech badges and GitHub links
- Hover animations

### Home.jsx
- Hero section with animated profile circle
- About section with personal details
- Research interests with chips
- Technical skills grid

### Projects.jsx
- Projects showcase with hero banner
- Dynamic project grid
- GitHub integration
- Call-to-action section

## 🚨 Troubleshooting

### Hash routes not working after deployment
- Ensure `homepage` is set correctly in package.json
- Clear browser cache and rebuild

### Stars not visible
- Check that star animation is not being overridden
- Verify z-index is set to 1 for star layers

### Colors not matching
- Clear browser cache
- Check CSS custom properties in `:root`

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork, modify, and enhance this portfolio template for your own use!

## 📞 Need Help?

For issues or questions:
1. Check the troubleshooting section
2. Review the customization guide
3. Consult the inline CSS comments

---

**Made with ✨ and React** | Fully responsive | GitHub Pages ready
