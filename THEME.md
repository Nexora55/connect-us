# Theme System - Fire & Warm Palette 🔥

Hệ thống theme hiện đại với tone màu nóng, rực rỡ như ngọn lửa.

## Color Palette

### Primary Colors (Orange - Vibrant)
```jsx
bg-primary-500     // #f97316 - Main orange
text-primary-600   // Darker shade
border-primary-400 // Lighter shade
```

### Secondary Colors (Red - Bright)
```jsx
bg-secondary-500   // #ef4444 - Bright red
text-secondary-600 // Darker red
hover:bg-secondary-700
```

### Accent Colors (Yellow - Golden)
```jsx
bg-accent-500      // #f59e0b - Golden yellow
text-accent-600    // Darker yellow
```

### Fire Colors (Hot Pink-Red)
```jsx
bg-fire-500        // #ff6b6b - Hot pink-red
text-fire-600      // Deep fire red
border-fire-400    // Light fire
```

### Ember Colors (Ember Yellow)
```jsx
bg-ember-500       // #ffc429 - Ember yellow
text-ember-700     // Deep ember
```

## Gradient Backgrounds 🎨

### Sử dụng trực tiếp
```jsx
// Linear gradients
<div className="bg-fire">           // Red → Orange → Yellow
<div className="bg-fire-reverse">   // Yellow → Orange → Red
<div className="bg-flame">          // Yellow → Orange → Red (vertical)
<div className="bg-ember">          // Red → Orange → Yellow → Orange → Red
<div className="bg-sunset">         // Yellow → Orange → Red → Dark Red
<div className="bg-blaze">          // Horizontal fire wave

// Radial gradients
<div className="bg-inferno">        // Yellow center → Red → Dark red
<div className="bg-volcano">        // Yellow bottom → Red → Dark
<div className="bg-lava">           // Dark bottom → Red → Orange → Yellow

// Glow effects
<div className="bg-fire-glow">      // Soft fire glow
<div className="bg-warm-glow">      // Warm ambient glow
```

### Sử dụng với CSS classes
```jsx
<div className="bg-fire-gradient">    // Từ tailwind.config
<div className="bg-ember-gradient">   // Gradient ember
<div className="bg-sunset-gradient">  // Gradient sunset
<div className="bg-inferno-gradient"> // Gradient inferno
<div className="bg-blaze-gradient">   // Gradient blaze
```

### Custom gradients với Tailwind
```jsx
// Gradient với stops tùy chỉnh
<div className="bg-gradient-to-r from-fire-600 via-primary-500 to-accent-400">
<div className="bg-gradient-to-br from-secondary-500 via-primary-500 to-accent-500">
<div className="bg-gradient-to-t from-fire-900 via-secondary-600 to-primary-400">
```

## Shadows & Glow Effects ✨

### Fire glow shadows
```jsx
// Glow effects
<div className="shadow-glow-orange">     // Orange glow
<div className="shadow-glow-orange-lg">  // Large orange glow
<div className="shadow-glow-red">        // Red glow
<div className="shadow-glow-red-lg">     // Large red glow
<div className="shadow-glow-yellow">     // Yellow glow
<div className="shadow-glow-fire">       // Multi-color fire glow
<div className="shadow-glow-ember">      // Ember glow (3 colors)

// CSS utility classes
<div className="fire-glow">              // Fire shadow effect
<div className="ember-glow">             // Ember shadow effect
```

## Typography

### Gradient text
```jsx
<h1 className="gradient-text">           // Orange → Red gradient
<h1 className="gradient-fire">           // Fire → Orange → Yellow
```

### Font families
```jsx
font-sans      // Inter - Default
font-display   // Cal Sans - For headings
font-mono      // JetBrains Mono - For code
```

### Responsive typography
```jsx
<h1>           // 4xl (mobile) → 5xl (desktop)
<h2>           // 3xl → 4xl
<h3>           // 2xl → 3xl
<p>            // base with relaxed line-height
```

## Components

### Buttons
```jsx
// Fire-themed buttons
<button className="btn btn-primary">     // Orange button
<button className="btn btn-secondary">   // Red button
<button className="btn-outline">         // Outline button
<button className="btn-ghost">           // Ghost button

// Custom fire button
<button className="bg-fire-gradient text-white px-6 py-3 rounded-xl fire-glow hover:scale-105 transition-transform">
  Blazing Button
</button>
```

### Cards
```jsx
<div className="card">                   // Basic card
<div className="card-hover">             // Card with hover effect
<div className="card-bordered">          // Bordered card

// Fire-themed card
<div className="card bg-gradient-to-br from-primary-50 to-secondary-50 border-2 border-primary-200 fire-glow">
  Content
</div>
```

### Badges
```jsx
<span className="badge badge-primary">   // Orange badge
<span className="badge badge-secondary"> // Red badge (not default purple)
<span className="badge badge-success">   // Green badge
<span className="badge badge-warning">   // Yellow badge
<span className="badge badge-error">     // Red badge
```

### Inputs
```jsx
<input className="input" />              // Standard input
<input className="input input-error" />  // Error state
```

## Animations

### Pre-defined animations
```jsx
animate-fade-in        // Fade in effect
animate-slide-up       // Slide up from bottom
animate-slide-down     // Slide down from top
animate-scale-in       // Scale in effect
animate-float          // Floating effect
animate-pulse-subtle   // Subtle pulse
animate-bounce-subtle  // Subtle bounce
animate-shimmer        // Shimmer effect
```

### Animation delays
```jsx
animation-delay-150    // 150ms delay
animation-delay-300    // 300ms delay
animation-delay-450    // 450ms delay
```

### Example: Staggered animation
```jsx
<div className="animate-slide-up animation-delay-150">First</div>
<div className="animate-slide-up animation-delay-300">Second</div>
<div className="animate-slide-up animation-delay-450">Third</div>
```

## Spacing

### Custom spacing values
```jsx
p-18       // 4.5rem (72px)
m-88       // 22rem (352px)
gap-100    // 25rem (400px)
space-112  // 28rem (448px)
px-128     // 32rem (512px)
```

## Border Radius

### Extended radius options
```jsx
rounded-4xl    // 2rem (32px)
rounded-5xl    // 2.5rem (40px)
```

## Usage Examples

### Hero Section with Fire Theme
```jsx
<section className="relative min-h-screen bg-sunset overflow-hidden">
  <div className="absolute inset-0 bg-fire-glow opacity-50"></div>
  <div className="container-custom relative z-10">
    <h1 className="gradient-fire text-7xl font-bold animate-slide-up">
      Your Blazing Portfolio
    </h1>
    <p className="text-white/90 text-xl animate-fade-in animation-delay-300">
      Connect with us today
    </p>
    <button className="btn btn-primary fire-glow hover:scale-105 transition-transform animate-scale-in animation-delay-450">
      Get Started
    </button>
  </div>
</section>
```

### Feature Card
```jsx
<div className="card-hover bg-gradient-to-br from-white to-primary-50 border-2 border-primary-200">
  <div className="w-12 h-12 rounded-xl bg-fire flex items-center justify-center mb-4 fire-glow">
    🔥
  </div>
  <h3 className="text-2xl font-semibold text-neutral-900 mb-2">
    Hot Feature
  </h3>
  <p className="text-neutral-600">
    Description of your amazing feature
  </p>
</div>
```

### Pricing Card with Ember Glow
```jsx
<div className="card bg-gradient-to-b from-ember-50 to-primary-50 border-2 border-ember-300 ember-glow">
  <span className="badge badge-warning">Popular</span>
  <h3 className="text-3xl font-bold gradient-fire mt-4">$99/mo</h3>
  <button className="btn btn-primary w-full mt-6">
    Choose Plan
  </button>
</div>
```

### Contact Section
```jsx
<section className="section bg-gradient-to-b from-white via-primary-50 to-secondary-50">
  <div className="container-custom">
    <h2 className="gradient-fire text-center">Get in Touch</h2>
    <form className="max-w-lg mx-auto space-y-4">
      <input className="input" placeholder="Your name" />
      <input className="input" type="email" placeholder="Email" />
      <button className="btn btn-primary w-full fire-glow">
        Send Message
      </button>
    </form>
  </div>
</section>
```

## Best Practices

1. **Contrast**: Sử dụng text màu sáng (white/neutral-50) trên background tối, và text tối (neutral-900) trên background sáng
2. **Glow Effects**: Không lạm dụng glow, chỉ dùng cho CTA và elements quan trọng
3. **Gradients**: Kết hợp với opacity để tạo depth
4. **Animations**: Sử dụng delays để tạo staggered effects
5. **Responsive**: Luôn test trên mobile và desktop

## Dark Mode Support

Theme đã có dark mode variables. Để bật dark mode:

```jsx
// Add to root element
<html className="dark">
```

Variables sẽ tự động chuyển đổi dựa trên `prefers-color-scheme`.

---

**Note**: Theme này sử dụng Inter font từ Google Fonts. Font được load tự động trong [index.css](src/index.css#L1).
