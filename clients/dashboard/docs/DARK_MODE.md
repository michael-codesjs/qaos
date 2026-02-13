# Dark Mode Implementation

## Overview

The Qaos Dashboard implements a comprehensive dark mode system using `next-themes` with system preference detection and manual override capabilities.

## Architecture

### Theme Provider

- **Library**: `next-themes` v0.4.4
- **Location**: `components/providers/index.tsx`
- **Configuration**:
  - `attribute="class"` - Uses class-based dark mode strategy
  - `defaultTheme="system"` - Respects OS preference by default
  - `enableSystem={true}` - Allows system preference detection

### Tailwind Configuration

- **Version**: Tailwind CSS v4
- **Dark Mode Strategy**: Class-based (`.dark` selector)
- **Custom Variant**: `@custom-variant dark (&:where(.dark, .dark *))` in `globals.css`

## Color System

### CSS Variables

```css
:root {
  --background: #f6f5f3;
  --foreground: #111111;
}

.dark {
  --background: #0a0a0a;
  --foreground: #f6f5f3;
}
```

### Dark Mode Color Patterns

#### Backgrounds

- **Primary Container**: `bg-white dark:bg-zinc-900`
- **Secondary Container**: `bg-gray-50 dark:bg-zinc-900`
- **Sidebar**: `bg-white dark:bg-zinc-950`
- **Hover States**: `hover:bg-gray-50 dark:hover:bg-white/5`

#### Borders

- **Primary**: `border-gray-100 dark:border-white/5`
- **Secondary**: `border-gray-50 dark:border-white/10`
- **Dividers**: `border-gray-200 dark:border-white/10`

#### Text

- **Headings**: `text-foreground dark:text-white`
- **Body**: `text-gray-500 dark:text-gray-400`
- **Subtle**: `text-gray-400 dark:text-gray-500`

## Component Implementation

### Sidebar

```tsx
<aside className="bg-white dark:bg-zinc-950 border-r border-gray-100 dark:border-white/10">
  {/* Navigation items */}
  <Link className="text-gray-500 hover:bg-gray-50 dark:hover:bg-white/5">
    <Icon color="currentColor" /> {/* Always use currentColor for icons */}
  </Link>
</aside>
```

### Theme Toggle

- **Location**: Sidebar footer
- **Design**: Pill-shaped segmented control
- **Active States**:
  - Light: `bg-white text-orange-500 ring-1 ring-black/5`
  - Dark: `bg-zinc-800 text-white ring-1 ring-white/10`

### Cards

```tsx
<div className="bg-white dark:bg-zinc-900 border border-gray-100 dark:border-white/5">
  <h3 className="text-foreground dark:text-white">Title</h3>
  <p className="text-gray-500 dark:text-gray-400">Description</p>
</div>
```

## Best Practices

### 1. Always Use `currentColor` for Icons

```tsx
// ✅ Correct
<Icon size={20} color="currentColor" />

// ❌ Incorrect
<Icon size={20} color="#000000" />
```

### 2. Pair Light and Dark Classes

```tsx
// ✅ Correct
className = 'bg-white dark:bg-zinc-900 text-foreground dark:text-white';

// ❌ Incorrect (missing dark variant)
className = 'bg-white text-foreground';
```

### 3. Use Semantic Color Variables

```tsx
// ✅ Correct
className = 'text-foreground dark:text-white';

// ❌ Incorrect (hardcoded colors)
className = 'text-black dark:text-white';
```

### 4. Maintain Consistent Opacity Levels

- Borders: `/5` or `/10`
- Backgrounds: `/5` for hover states
- Text: Use gray scale (400-500 range)

## Components with Dark Mode Support

### Layout

- ✅ Sidebar
- ✅ Header
- ✅ Footer

### UI Components

- ✅ StatCard
- ✅ Button (all variants)
- ✅ Input
- ✅ Modal
- ✅ Theme Toggle

### Pages

- ✅ Dashboard (Overview)
- ✅ Projects
- ✅ Activity Cards
- ✅ Suggestion Cards

## Testing Dark Mode

### Manual Testing

1. Toggle between light/dark using sidebar control
2. Verify system preference detection on first load
3. Check all interactive states (hover, focus, active)
4. Validate text contrast ratios

### Browser DevTools

```javascript
// Force dark mode
document.documentElement.classList.add('dark');

// Force light mode
document.documentElement.classList.remove('dark');
```

## Troubleshooting

### Issue: Dark mode classes not applying

**Solution**: Ensure `@custom-variant dark (&:where(.dark, .dark *))` is in `globals.css`

### Issue: Icons not changing color

**Solution**: Use `color="currentColor"` on all icon components

### Issue: Flashing on page load

**Solution**: `next-themes` handles this automatically with `suppressHydrationWarning` on `<html>`

## Future Enhancements

- [ ] Add color scheme meta tag for browser chrome
- [ ] Implement custom color themes beyond light/dark
- [ ] Add transition animations for theme switching
- [ ] Create dark mode preview in settings
