# Mushaf Platform - Design System Guide

> **Purpose:** This document defines the complete UI/UX design system for Mushaf Platform (Digital Quran with Urdu Translation). Use this as a reference for maintaining consistency across all components and features.

---

## 🎨 Color Palette

### Design Philosophy
Inspired by **Islamic architecture** and **traditional mosque aesthetics**:
- **Teal:** Represents Islamic architecture, peace, and spirituality
- **Deep Navy:** Elegance and tradition
- **Gold:** Islamic art and calligraphy accents
- **Forest Green:** Nature, peace, and Islamic symbolism

### Light Theme
```css
Primary: #0d7377 (Teal - Main brand color)
Primary Dark: #0a5c5f (Darker teal for hover states)
Secondary: #14213d (Deep Navy - Headers, important text)
Accent: #fca311 (Gold - Highlights, badges, special elements)
Success: #2d6a4f (Forest Green)
Danger: #d62828 (Red)
Warning: #f77f00 (Orange)
Background: #f8f9fa (Soft White)
Card Background: #ffffff (Pure White)
Text: #212529 (Almost Black - Primary text)
Text Secondary: #6c757d (Gray - Secondary text)
Border: #e9ecef (Light Gray)
```

### Dark Theme
```css
Primary: #14a085 (Lighter Teal)
Primary Dark: #0d7377 (Teal)
Secondary: #e5e5e5 (Light Gray)
Accent: #ffd60a (Bright Gold)
Success: #52b788 (Light Green)
Danger: #ef476f (Pink-Red)
Warning: #fca311 (Orange)
Background: #0f1419 (Deep Dark)
Card Background: #1a1f26 (Dark Card)
Text: #e9ecef (Light Gray)
Text Secondary: #adb5bd (Medium Gray)
Border: #2d3748 (Dark Border)
```

### CSS Variables Usage
```css
/* Always use CSS variables for consistency */
color: var(--primary-color);
background-color: var(--card-bg);
border-color: var(--border-color);
```

## 📐 Spacing System

```
xs: 0.25rem (4px)
sm: 0.5rem (8px)
md: 1rem (16px)
lg: 1.5rem (24px)
xl: 2rem (32px)
2xl: 3rem (48px)
```

## 🔤 Typography

### Font Family
```
Primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI'
Arabic: 'Amiri', 'Traditional Arabic', serif (for Quran text)
```

### Font Sizes
```
h1: 2.25rem (36px)
h2: 1.875rem (30px)
h3: 1.5rem (24px)
h4: 1.25rem (20px)
body: 1rem (16px)
small: 0.875rem (14px)
```

### Font Weights
```
Regular: 400
Medium: 500
Semibold: 600
Bold: 700
```

## 🎯 Component Library

### Buttons

**Primary Button** (Main actions)
```jsx
<button className="btn btn-primary">Read Quran</button>
// Use for: Primary CTAs, submit forms, main actions
```

**Secondary Button** (Alternative actions)
```jsx
<button className="btn btn-secondary">Cancel</button>
// Use for: Cancel, back, secondary actions
```

**Danger Button** (Destructive actions)
```jsx
<button className="btn btn-danger">Delete Bookmark</button>
// Use for: Delete, remove, destructive actions
```

**Outline Button** (Tertiary actions)
```jsx
<button className="btn btn-outline-primary">Learn More</button>
// Use for: Less important actions, links styled as buttons
```

**Icon Button** (Theme toggle, icons)
```jsx
<button className="btn-icon" title="Toggle theme">
  {isDark ? '☀️' : '🌙'}
</button>
// Use for: Icon-only actions, theme toggle, compact actions
```

**Button Sizes**
```jsx
<button className="btn btn-primary btn-sm">Small</button>
<button className="btn btn-primary">Default</button>
<button className="btn btn-primary btn-lg">Large</button>
```

### Cards

**Basic Card**
```jsx
<div className="card">
  <h3>Surah Al-Fatihah</h3>
  <p>The Opening - 7 verses</p>
</div>
// Features: Rounded corners (12px), subtle shadow, hover effect
```

**Card with Header**
```jsx
<div className="card">
  <div className="card-header">
    <h3>Recent Bookmarks</h3>
    <button className="btn btn-sm">View All</button>
  </div>
  <p>Card content...</p>
</div>
```

### Forms

**Input Field**
```jsx
<div className="form-group">
  <label htmlFor="search">Search Quran</label>
  <input 
    type="text" 
    id="search" 
    placeholder="Search verses, surahs..." 
  />
</div>
// Features: Dark mode support, focus states, validation
```

**Form Row** (Multiple inputs side-by-side)
```jsx
<div className="form-row">
  <div className="form-group">
    <label>First Name</label>
    <input type="text" />
  </div>
  <div className="form-group">
    <label>Last Name</label>
    <input type="text" />
  </div>
</div>
```

### Navigation

**Navbar Structure**
```jsx
<nav className="navbar">
  <div className="navbar-brand">
    <Link to="/">🕌 Mushaf Platform</Link>
  </div>
  <div className="navbar-menu">
    <div className="nav-links">
      <Link to="/" className="active">Quran</Link>
      <Link to="/search">Search</Link>
      <button className="btn-icon">🌙</button>
    </div>
    <div className="user-menu">
      <span className="user-name">User Name</span>
      <button className="btn btn-logout">Logout</button>
    </div>
  </div>
</nav>
// Features: Sticky position, teal border bottom, responsive
```

## 🎭 Theme System

### Accessing Theme Context
```jsx
import { useTheme } from '../context/ThemeContext';

const MyComponent = () => {
  const { isDark, toggleTheme } = useTheme();
  
  return (
    <button onClick={toggleTheme} className="btn-icon">
      {isDark ? '☀️' : '🌙'}
    </button>
  );
};
```

### Theme Constants (src/styles/theme.js)
```jsx
import { COLORS, SPACING, FONT_SIZES } from '../styles/theme';

// Usage in components
const styles = {
  color: COLORS.light.primary,
  padding: SPACING.lg,
  fontSize: FONT_SIZES.xl,
};
```

### Dark Mode Implementation
- Theme stored in localStorage
- Applied via `data-theme` attribute on `<html>`
- All colors use CSS variables for automatic switching
- Toggle button in navbar

## 📱 Responsive Breakpoints

```css
Mobile: < 768px
Tablet: 768px - 1024px
Desktop: > 1024px
```

## ✨ Best Practices

### 1. Always Use CSS Variables
```css
/* ✅ Good */
background-color: var(--card-bg);
color: var(--text-color);

/* ❌ Bad */
background-color: white;
color: #333;
```

### 2. Consistent Spacing
```css
/* Use spacing system */
padding: var(--spacing-md);
margin-bottom: var(--spacing-lg);
```

### 3. Reusable Components
- Create components in `/src/components/`
- Use consistent naming: `ComponentName.js`
- Export as default

### 4. File Structure
```
src/
├── components/       # Reusable UI components
├── context/          # Global state (Auth, Theme)
├── pages/            # Page components
├── services/         # API services
├── styles/           # Global styles
└── utils/            # Helper functions
```

## 🔄 Tech Stack & Future Migration

### Current Stack (Updated)
```
Framework: React 18
Routing: React Router v6
State: React Context (Auth, Theme)
Styling: Custom CSS with CSS Variables
API: Axios with interceptors
UI Library: None (Custom components)
Architecture: Centralized utils, reusable components
Error Handling: ErrorBoundary
```

### Centralized Architecture ✅
```
utils/
├── constants.js    → All app constants (API, storage keys, routes)
├── helpers.js      → Storage, tokens, formatting, validation
├── hooks.js        → Custom React hooks (useDebounce, useLocalStorage)
└── index.js        → Barrel exports

components/ui/
├── Button.js       → Reusable button with variants
├── SearchBar.js    → Search with clear functionality
├── Card.js         → Card wrapper
├── EmptyState.js   → No results UI
├── SkeletonLoader.js → Loading states
└── index.js        → Barrel exports
```

### Migration Options (Future)

**Option 1: shadcn/ui** ⭐ Recommended
- Copy-paste components (full control)
- Modern, professional look
- Used by: Vercel, Stripe, Linear
- Best for: Production SaaS apps

**Option 2: Chakra UI**
- Pre-built components
- Easy to use but "Chakra-ish" look
- Best for: MVPs, quick prototypes

**Option 3: Keep Custom CSS**
- Full control, lightweight
- Perfect for Quran app
- Best for: Current project state

**Recommendation:** Stick with custom CSS. Migrate to shadcn/ui only if you need complex components (data tables, modals, dialogs).

## 📋 Development Guidelines

### For Developers & AI Assistants

**When creating new components:**
1. ✅ Use CSS variables (never hardcode colors)
2. ✅ Support dark mode automatically
3. ✅ Make responsive (mobile-first)
4. ✅ Add hover/focus states
5. ✅ Include loading states
6. ✅ Handle error states
7. ✅ Add ARIA labels for accessibility
8. ✅ Follow naming convention: `ComponentName.js`

**File naming:**
- Components: `PascalCase.js` (e.g., `SurahCard.js`)
- Pages: `PascalCase.js` (e.g., `Home.js`)
- Utils: `camelCase.js` (e.g., `formatDate.js`)
- Styles: `kebab-case.css` (e.g., `quran-reader.css`)

**Import order:**
```jsx
// 1. React imports
import React, { useState, useEffect } from 'react';

// 2. Third-party imports
import { Link } from 'react-router-dom';

// 3. Local imports (contexts, components)
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';

// 4. Styles
import './styles.css';
```

**Component structure:**
```jsx
import React, { useState } from 'react';

const ComponentName = ({ prop1, prop2 }) => {
  // 1. State
  const [state, setState] = useState(null);
  
  // 2. Effects
  useEffect(() => {
    // Side effects
  }, []);
  
  // 3. Handlers
  const handleClick = () => {
    // Logic
  };
  
  // 4. Render
  return (
    <div className="component-name">
      {/* JSX */}
    </div>
  );
};

export default ComponentName;
```

## 🎨 Islamic Design Principles

### Visual Design
1. **Calming Colors:** Teal, navy, gold (mosque aesthetics)
2. **Generous Spacing:** Breathing room for text-heavy content
3. **Rounded Corners:** 12px for cards (modern Islamic architecture)
4. **Subtle Shadows:** Depth without distraction
5. **Teal Accents:** Border on navbar, hover states

### Typography for Arabic Text
```css
.arabic-text {
  font-family: 'Amiri', 'Traditional Arabic', 'Scheherazade', serif;
  font-size: 1.75rem;        /* Larger for readability */
  line-height: 2.2;          /* Extra spacing between lines */
  text-align: right;         /* RTL alignment */
  direction: rtl;            /* Right-to-left */
  color: var(--secondary-color);
  font-weight: 400;
}

.urdu-translation {
  font-family: 'Noto Nastaliq Urdu', 'Jameel Noori Nastaleeq', serif;
  font-size: 1.25rem;
  line-height: 2;
  text-align: right;
  direction: rtl;
  color: var(--text-color);
}
```

### Accessibility for Target Users

**For Elders:**
- Minimum font size: 18px (body text)
- Arabic text: 28px minimum
- High contrast ratios (WCAG AA)
- Large clickable areas (44px minimum)
- Simple navigation (max 3 levels)

**For Children:**
- Colorful accents (gold badges)
- Clear visual hierarchy
- Progress indicators
- Encouraging feedback messages

**For Scholars:**
- Advanced search filters
- Bookmark organization
- Quick navigation (keyboard shortcuts)
- Reference links

---

## 📞 Contact & Maintenance

**Project:** Mushaf Platform - Digital Quran with Urdu Translation  
**Developer:** Saad Amir  
**GitHub:** [@saadamir1](https://github.com/saadamir1)  
**Email:** Saadamir070@gmail.com  
**Last Updated:** February 2026  

**For AI Assistants:**  
This design system is the source of truth for all UI/UX decisions. When making changes:
1. Maintain color consistency (use CSS variables)
2. Follow Islamic design principles
3. Prioritize accessibility for elders and children
4. Keep components simple and reusable
5. Update this document when adding new patterns

**Version:** 1.0.0
