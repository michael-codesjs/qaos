# UI Components

Documentation for reusable UI components in the marketing site.

## Button

A flexible button component built with `class-variance-authority` (CVA).

**Location**: `components/ui/button/index.tsx`

### Props

| Prop        | Type                                                                  | Default   | Description                              |
| :---------- | :-------------------------------------------------------------------- | :-------- | :--------------------------------------- |
| `variant`   | `primary`, `secondary`, `ghost`, `outline`, `navigator`, `strategist` | `primary` | Visual style of the button               |
| `size`      | `sm`, `md`, `lg`, `icon`                                              | `md`      | Size of the button                       |
| `isLoading` | `boolean`                                                             | `false`   | If true, shows a spinner instead of text |
| `...props`  | `ButtonHTMLAttributes`                                                | -         | Standard HTML button attributes          |

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

## Input

A custom input component that supports labels, icons, password toggles, and error states. It is fully compatible with `react-hook-form`.

**Location**: `components/ui/input/index.tsx`

### Props

| Prop         | Type                  | Default   | Description                                       |
| :----------- | :-------------------- | :-------- | :------------------------------------------------ |
| `label`      | `string`              | -         | Visual label above the input                      |
| `variant`    | `default`, `error`    | `default` | Error state styling                               |
| `helperText` | `string`              | -         | Descriptive text or error message below the input |
| `leftIcon`   | `ReactNode`           | -         | Icon displayed inside the input on the left       |
| `rightIcon`  | `ReactNode`           | -         | Icon displayed inside the input on the right      |
| `...props`   | `InputHTMLAttributes` | -         | Standard HTML input attributes                    |

### Usage with React Hook Form

```tsx
<Input
  label="Email Address"
  {...register('email')}
  variant={errors.email ? 'error' : 'default'}
  helperText={errors.email?.message}
/>
```
