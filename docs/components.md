# UI Components

Documentation for reusable UI components in the marketing site.

## Button

A flexible button component built with `class-variance-authority` (CVA).

**Location**: `components/ui/button/index.tsx`

### Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `variant` | `primary`, `secondary`, `ghost`, `outline`, `navigator`, `strategist` | `primary` | Visual style of the button |
| `size` | `sm`, `md`, `lg`, `icon` | `md` | Size of the button |
| `isLoading` | `boolean` | `false` | If true, shows a spinner instead of text |
| `...props` | `ButtonHTMLAttributes` | - | Standard HTML button attributes |

### Usage

```tsx
import { Button } from "@/components/ui/button";

// Standard Button
<Button>Get Started</Button>

// Loading State
<Button isLoading>Processing...</Button>

// Variants
<Button variant="navigator">Explore Navigator</Button>
<Button variant="ghost" size="sm">Cancel</Button>
```
