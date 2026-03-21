# Quick Start Guide - Infraglide React App

## 🚀 Getting Started (2 minutes)

### 1. Install Dependencies
```bash
cd infraglide-app
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

The app will open at: **http://localhost:5173/**

### 3. Start Coding!
Edit files in `src/` and see changes instantly with Hot Module Replacement (HMR)

## 📁 File Structure Quick Reference

```
src/
├── pages/              # Full page components
│   ├── Home.jsx       # Landing page
│   ├── FreeTrial.jsx  # Trial signup
│   ├── DemoRequest.jsx # Demo booking
│   └── Docs.jsx       # Documentation
├── components/        # Reusable components
│   ├── Navigation.jsx # Top navbar
│   └── Footer.jsx     # Bottom footer
├── App.jsx            # Main router setup
└── index.css          # Tailwind imports
```

## 🎨 Styling with Tailwind CSS

All styling uses Tailwind utility classes. Examples:
```jsx
<div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg">
  Gradient button with padding and rounded corners
</div>
```

Common classes used:
- `p-6` = padding
- `mx-auto` = horizontal centering
- `flex`, `grid` = layouts
- `text-lg`, `font-bold` = typography
- `bg-blue-500` = background color
- `hover:shadow-lg` = hover effects

See: https://tailwindcss.com/docs

## 🎬 Adding Animations with Framer Motion

```jsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Fades in and slides up!
</motion.div>
```

Common patterns:
- `initial` = starting state
- `animate` = end state
- `transition` = timing
- `whileHover` = hover effects
- `whileInView` = scroll triggers

See: https://www.framer.com/motion/

## 🔀 Navigation & Routing

All pages defined in `App.jsx`:
```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/free-trial" element={<FreeTrial />} />
  <Route path="/demo" element={<DemoRequest />} />
  <Route path="/docs" element={<Docs />} />
</Routes>
```

Link to pages:
```jsx
import { Link } from 'react-router-dom';

<Link to="/free-trial">Sign Up</Link>
```

## 📝 Adding a New Page

1. Create `src/pages/YourPage.jsx`:
```jsx
export default function YourPage() {
  return <div>Your content here</div>;
}
```

2. Add to routing in `src/App.jsx`:
```jsx
<Route path="/your-page" element={<YourPage />} />
```

3. Link from navigation:
```jsx
<Link to="/your-page">Your Page</Link>
```

## 🔌 Connecting Forms to an API

Current forms use console.log. To connect to a backend:

```jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const response = await fetch('https://your-api.com/form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    if (response.ok) {
      // Success! Reset form
      setFormData({ name: '', email: '' });
    }
  } catch (error) {
    console.error('Error:', error);
  }
};
```

## 🏗️ Building for Production

```bash
npm run build
```

Creates optimized `dist/` folder ready to deploy:
- Minified code
- Tree-shaken unused code
- Optimized assets
- Source maps for debugging

Deploy `dist/` folder to:
- Vercel (recommended for Vite)
- Netlify
- GitHub Pages
- AWS S3
- Docker/custom server

## 🎯 Common Tasks

### Update Colors
Edit `tailwind.config.js` in `theme.extend.colors`:
```js
colors: {
  primary: '#2196F3',
  secondary: '#764ba2',
}
```

### Change Fonts
Edit `tailwind.config.js` in `theme.extend.fontFamily`:
```js
fontFamily: {
  sans: ['Your Font', 'system-ui'],
}
```

### Add Images
Place in `src/assets/` and import:
```jsx
import logo from './assets/logo.svg';
<img src={logo} alt="Logo" />
```

### Run Linter
```bash
npm run lint
```

Automatically fixes common issues:
```bash
npm run lint -- --fix
```

## 🐛 Troubleshooting

### Port 5173 already in use?
```bash
npm run dev -- --port 3000
```

### Styles not updating?
- Check Tailwind content paths in `tailwind.config.js`
- Rebuild Tailwind: Clear browser cache and reload

### Routes not working?
- Make sure routes are in `App.jsx`
- Use `<Link>` not `<a>` for internal navigation
- Check path names match exactly

### Form not submitting?
- Add `console.log(formData)` in handleSubmit to debug
- Check browser console for errors
- Verify fetch URL is correct

## 📚 Documentation

- **React**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com
- **Framer Motion**: https://www.framer.com/motion/
- **React Router**: https://reactrouter.com
- **Vite**: https://vitejs.dev

## 🎓 Learning Resources

1. **React Basics** (30 min)
   - Components and JSX
   - Hooks (useState, useEffect)
   - Event handling

2. **Tailwind CSS** (20 min)
   - Utility classes
   - Responsive prefixes (sm:, md:, lg:)
   - Theme customization

3. **Framer Motion** (30 min)
   - Animations with `motion` components
   - Variants for reusable animations
   - Gesture animations

## 🚢 Deploy to Vercel (Free)

1. Push code to GitHub
2. Go to vercel.com and sign in
3. Click "New Project" and select your repo
4. Click "Deploy"

Done! Your app is live with auto-deployments on git push.

## 💡 Pro Tips

- Use `npm run dev` with multiple terminals for quick testing
- Install "ES7+ React/Redux/React-Native snippets" VS Code extension
- Use React DevTools browser extension for debugging
- Keep components small and focused (single responsibility)
- Use meaningful component names
- Add comments for complex logic

---

**Need help?** Check the files in the repo:
- `IMPLEMENTATION.md` - Detailed technical guide
- `MIGRATION_COMPLETE.md` - What was built
- Component files have inline comments

Happy coding! 🚀
