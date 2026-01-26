# Infraglide - React Web Application

A modern, responsive website for Infraglide built with React, Vite, Tailwind CSS, and Framer Motion.

## Project Structure

```
infraglide-app/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx      # Sticky navigation with smooth animations
│   │   └── Footer.jsx          # Footer with links and social media
│   ├── pages/
│   │   ├── Home.jsx            # Landing page with hero, features, pricing
│   │   ├── FreeTrial.jsx       # 14-day free trial signup page
│   │   ├── DemoRequest.jsx     # Demo scheduling page
│   │   └── Docs.jsx            # Documentation with 3-column layout
│   ├── App.jsx                 # Main app with React Router setup
│   ├── main.jsx                # Entry point
│   ├── index.css               # Tailwind CSS directives
│   └── App.css                 # Additional styles
├── public/                     # Static assets
├── index.html                  # HTML entry point
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── vite.config.js              # Vite configuration
├── eslint.config.js            # ESLint configuration
├── package.json                # Project dependencies
└── README.md                   # This file
```

## Features

### 🎨 Design & Styling
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Responsive Design**: Mobile-first approach with breakpoints for all screen sizes
- **Color Scheme**: 
  - Primary: Blue (#2196F3)
  - Secondary: Purple (#764ba2)
  - Accent: Green (#4CAF50), Orange (#FF9800)

### 🎬 Animations & Interactions
- **Framer Motion**: Smooth animations for:
  - Navigation fade-in on page load
  - Staggered animations for card elements
  - Scroll-triggered animations with `whileInView`
  - Hover effects on buttons and cards
- **Smooth Scrolling**: Built-in HTML smooth scroll behavior

### 📍 Routing
- **React Router v6**: Client-side routing with:
  - `/` - Home page
  - `/free-trial` - Free trial signup
  - `/demo` - Demo request scheduling
  - `/docs` - Documentation

### 📱 Pages

#### Home Page (`/`)
- Hero section with gradient background
- 6 feature cards with hover animations
- 4-step "How It Works" section with numbered circles
- 2-tier pricing cards with features list
- Call-to-action section

#### Free Trial Page (`/free-trial`)
- Registration form (name, email, company, phone)
- Benefits list with checkmarks
- 3-column testimonials
- FAQ section (4 common questions)

#### Demo Request Page (`/demo`)
- Detailed demo booking form with date/time picker
- "What You'll Learn" numbered items (6 topics)
- Customer testimonials
- Demo-specific FAQ

#### Documentation Page (`/docs`)
- 3-column layout:
  - Left: Navigation sidebar (5 main sections)
  - Center: Main content with subsections and code examples
  - Right: "On This Page" sidebar for quick navigation
- Interactive section switching
- Code snippets for each topic

### 🧩 Components

#### Navigation Component
- Sticky positioning (top: 0)
- Responsive layout with flexbox
- Left menu: Features, How It Works, Pricing, Docs
- Right menu: Free Trial and Get Demo buttons
- Fade-in animation on mount

#### Footer Component
- 4-column layout (Company, Product, Company Links, Legal)
- Copyright and social links
- Dark theme with hover effects

## Setup & Installation

### Prerequisites
- Node.js 18.15.0+ (v18.15.0 or compatible)
- npm 9.5.0+

### Installation Steps

1. **Navigate to project directory**
```bash
cd infraglide-app
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

## Available Scripts

- **`npm run dev`** - Start Vite dev server with hot module replacement
- **`npm run build`** - Build for production (output to `dist/`)
- **`npm run preview`** - Preview production build locally
- **`npm run lint`** - Run ESLint to check code quality

## Technology Stack

### Core Framework
- **React 19.2.0** - UI library
- **React DOM 19.2.0** - DOM rendering
- **Vite 5.0.0** - Build tool and dev server
- **@vitejs/plugin-react 4.0.0** - React plugin for Vite

### Styling & UI
- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **PostCSS 8.5.6** - CSS transformation
- **Autoprefixer 10.4.23** - CSS vendor prefixes

### Animation
- **Framer Motion 12.29.0** - React animation library

### Routing
- **React Router DOM 6.20.0** - Client-side routing

### Development & Linting
- **ESLint 9.39.1** - Code quality tool
- **ESLint Plugin React Hooks 7.0.1** - React hooks linting
- **ESLint Plugin React Refresh 0.4.24** - Fast Refresh support

## Configuration Files

### Tailwind CSS Config (`tailwind.config.js`)
- Content paths for template scanning
- Custom colors extending theme
- Custom font family settings
- Custom box shadows

### PostCSS Config (`postcss.config.js`)
- Tailwind CSS plugin
- Autoprefixer for vendor prefixes

### Vite Config (`vite.config.js`)
- React plugin configuration
- Default development server settings

## Browser Support

Works on all modern browsers supporting:
- ES2020 JavaScript features
- CSS Grid and Flexbox
- CSS Custom Properties

## Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| Primary Blue | #2196F3 | Buttons, links |
| Secondary Purple | #764ba2 | Hero sections, accents |
| Accent Green | #4CAF50 | Check marks, success states |
| Accent Orange | #FF9800 | Highlights |
| Gray 700 | #333 | Body text |
| Gray 600 | #666 | Secondary text |
| Gray 50 | #f9f9f9 | Light backgrounds |
| Gray 900 | #111 | Dark backgrounds |

## Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## Performance Optimizations

- **Code Splitting**: React Router enables route-based code splitting
- **Lazy Loading**: Images and components can be lazy loaded
- **Tree Shaking**: Unused CSS with Tailwind purging
- **Fast Refresh**: Hot Module Replacement for instant feedback

## Form Handling

All forms (trial signup, demo request) currently:
- Use React `useState` for form state
- Validate required fields
- Log to console on submit
- Can be connected to a backend API

### Example API Integration Pattern
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('/api/demo-request', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    // Handle response
  } catch (error) {
    // Handle error
  }
};
```

## Future Enhancements

- [ ] Backend API integration for form submissions
- [ ] User authentication system
- [ ] Admin dashboard
- [ ] Blog section
- [ ] User account management
- [ ] Email notifications
- [ ] Search functionality for docs
- [ ] Dark mode toggle
- [ ] Internationalization (i18n)

## Troubleshooting

### Port Already in Use
If port 5173 is already in use:
```bash
npm run dev -- --port 3000
```

### Dependencies Installation Issues
If npm install fails, try:
```bash
npm install --legacy-peer-deps
```

### Build Errors
Clear cache and rebuild:
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

## Contributing

When adding new features:
1. Create components in `src/components/`
2. Create pages in `src/pages/`
3. Update routing in `App.jsx`
4. Follow Tailwind CSS utility class patterns
5. Use Framer Motion for animations
6. Ensure responsive design across breakpoints

## License

Copyright © 2024 Infraglide. All rights reserved.

## Getting Help

- Check documentation at `/docs`
- Review component examples in source files
- Refer to Tailwind CSS docs: https://tailwindcss.com
- Refer to Framer Motion docs: https://www.framer.com/motion/
- Refer to React Router docs: https://reactrouter.com
