# EXO Portfolio - Implementation Guide

## ✅ Completed

### 1. i18n Setup
- ✅ Installed: `react-i18next`, `i18next`, `i18next-browser-languagedetector`
- ✅ Created translation files: `src/i18n/locales/{vi,en,ko}.json`
- ✅ Updated `main.tsx` to import i18n
- ✅ Created `LanguageSwitcher` component with flags
- ✅ Updated `Header` with i18n and language switcher

**Language Switcher Location:** Top-right in header (desktop & mobile)

### 2. Brand Update
- ✅ Company name: ConnectUs → **EXO**
- ✅ Logo: Changed to "E" with slate-700/900 gradient
- ✅ Softer header colors: Fire gradients → Slate colors

## 🔄 Next Steps Required

### 3. Update Tailwind Config (Softer Colors)

Replace `tailwind.config.js` colors with:

```javascript
colors: {
  primary: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b', // Slate - Main brand
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
    950: '#020617',
  },
  secondary: {
    50: '#eef2ff',
    100: '#e0e7ff',
    200: '#c7d2fe',
    300: '#a5b4fc',
    400: '#818cf8',
    500: '#6366f1', // Indigo
    600: '#4f46e5',
    700: '#4338ca',
    800: '#3730a3',
    900: '#312e81',
    950: '#1e1b4b',
  },
  accent: {
    50: '#f0fdfa',
    100: '#ccfbf1',
    200: '#99f6e4',
    300: '#5eead4',
    400: '#2dd4bf',
    500: '#14b8a6', // Teal
    600: '#0d9488',
    700: '#0f766e',
    800: '#115e59',
    900: '#134e4a',
    950: '#042f2e',
  },
}
```

Remove: `fire`, `ember` color scales (too bright)

### 4. Update Section Component

In `src/components/ui/Section.tsx`, change padding values:

```typescript
const paddingClasses = {
  none: '',
  sm: 'py-8 lg:py-12',    // Was: py-12 lg:py-16
  md: 'py-12 lg:py-16',   // Was: py-16 lg:py-20
  lg: 'py-16 lg:py-20',   // Was: py-20 lg:py-28
};
```

Update background options:
```typescript
const backgroundClasses = {
  white: 'bg-white',
  gray: 'bg-slate-50',
  gradient: 'bg-gradient-to-b from-white via-slate-50 to-white',
  dark: 'bg-slate-900',
};
```

Remove: `fire`, `sunset`, `ember` backgrounds

### 5. Update HomePage.tsx

Replace emoji with React Icons from `react-icons/fi`:

```tsx
import {
  FiTrendingUp, FiUsers, FiGlobe, FiZap, FiStar, FiMessageCircle,
  FiShoppingCart, FiDollarSign, FiMonitor, FiCpu
} from 'react-icons/fi';

// Stats icons
🚀 → <FiTrendingUp className="w-8 h-8" />
👥 → <FiUsers className="w-8 h-8" />
🌍 → <FiGlobe className="w-8 h-8" />
⚡ → <FiZap className="w-8 h-8" />
⭐ → <FiStar className="w-8 h-8" />
💬 → <FiMessageCircle className="w-8 h-8" />

// Service icons
💻 → <FiShoppingCart className="w-10 h-10" /> // E-commerce
📱 → <FiDollarSign className="w-10 h-10" /> // FinTech
☁️ → <FiMonitor className="w-10 h-10" /> // Streaming
🤖 → <FiCpu className="w-10 h-10" /> // AI Agent
```

**Update services array:**
```tsx
{
  icon: <FiShoppingCart />,
  title: t('home.services.ecommerce.title'),
  description: t('home.services.ecommerce.description'),
  link: '/services#ecommerce',
  color: 'from-slate-500 to-slate-600',
},
{
  icon: <FiDollarSign />,
  title: t('home.services.fintech.title'),
  description: t('home.services.fintech.description'),
  link: '/services#fintech',
  color: 'from-indigo-500 to-indigo-600',
},
{
  icon: <FiMonitor />,
  title: t('home.services.streaming.title'),
  description: t('home.services.streaming.description'),
  link: '/services#streaming',
  color: 'from-teal-500 to-teal-600',
},
{
  icon: <FiCpu />,
  title: t('home.services.ai.title'),
  description: t('home.services.ai.description'),
  link: '/services#ai',
  color: 'from-purple-500 to-purple-600',
}
```

**Update Section paddings:**
```tsx
// Hero
<Section padding="none" background="gradient" className="relative min-h-screen">

// Stats
<Section background="white" padding="md"> {/* was: lg */}

// Services
<Section background="gray" padding="md"> {/* was: lg */}

// Portfolio
<Section background="white" padding="md"> {/* was: lg */}

// Tech Stack
<Section background="gray" padding="sm"> {/* was: md */}

// CTA
<Section background="dark" padding="md"> {/* was: lg */}
```

**Update gradient classes:**
```tsx
// Replace fire gradients with softer ones
bg-fire → bg-gradient-to-br from-slate-100 to-slate-200
bg-sunset → bg-gradient-to-b from-slate-50 to-white
fire-glow → shadow-lg
gradient-fire → bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent
```

### 6. Update index.css

Remove or update:
```css
/* Remove these */
.fire-glow {
  @apply shadow-glow-fire;
}

.ember-glow {
  @apply shadow-glow-ember;
}

.gradient-fire {
  @apply bg-gradient-to-r from-fire-600 via-primary-500 to-accent-500 bg-clip-text text-transparent;
}

/* Replace with */
.gradient-brand {
  @apply bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent;
}

.btn-primary {
  @apply bg-slate-700 text-white hover:bg-slate-800 focus:ring-slate-500;
}

.btn-secondary {
  @apply bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500;
}
```

### 7. Quick Test Checklist

After implementing:

- [ ] Language switcher shows in header (desktop & mobile)
- [ ] Switching languages updates nav links
- [ ] Colors are softer (slate/indigo/teal instead of fire/orange/red)
- [ ] Sections have less spacing between them
- [ ] No emojis visible (all replaced with icons)
- [ ] Logo shows "EXO" instead of "ConnectUs"
- [ ] All text uses translation keys (t('key'))

## File Structure

```
frontend/
├── src/
│   ├── i18n/
│   │   ├── index.ts                    ✅ Created
│   │   └── locales/
│   │       ├── vi.json                 ✅ Created
│   │       ├── en.json                 ✅ Created
│   │       └── ko.json                 ✅ Created
│   ├── components/
│   │   ├── LanguageSwitcher.tsx        ✅ Created
│   │   ├── layout/
│   │   │   └── Header.tsx              ✅ Updated (i18n + switcher)
│   │   └── ui/
│   │       └── Section.tsx             🔄 Need to update padding
│   ├── pages/
│   │   └── HomePage.tsx                🔄 Need to update (i18n + icons + spacing)
│   ├── main.tsx                        ✅ Updated (import i18n)
│   └── index.css                       🔄 Need to update (remove fire classes)
├── tailwind.config.js                  🔄 Need to update (soft colors)
└── package.json                        ✅ Updated (i18n packages)
```

## Priority Order

1. **High**: Update `tailwind.config.js` (soft colors)
2. **High**: Update `index.css` (remove fire classes)
3. **High**: Update `Section.tsx` (reduce padding)
4. **High**: Update `HomePage.tsx` (i18n + icons + spacing)
5. **Medium**: Update other pages (Services, Portfolio, About, Contact)
6. **Low**: Update Footer with i18n

## Commands

```bash
# Currently running
npm run dev

# Access at
http://localhost:3000/

# Test language switching
# Click language icon in top-right header
```
