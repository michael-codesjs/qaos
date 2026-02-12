# Iconography

We use the [Iconsax](https://iconsax.io/) library for our iconography, specifically the `iconsax-react` package.

## Usage

All icons should be imported from `iconsax-react`.

**Important**: You must always include the `color="currentColor"` prop to ensure the icon inherits the text color of its parent element, allowing for easy styling with Tailwind CSS classes (e.g., `text-gray-500`, `hover:text-white`).

### Example

```tsx
import { Monitor } from "iconsax-react";

<Monitor size="24" color="currentColor" />
```

## Standard Sizes

*   **Small (Buttons/Meta)**: `size="16"`
*   **Medium (Navigation)**: `size="20"`
*   **Large (Feature cards)**: `size="24"` or larger

## Logo
The main Qaos logo is a custom SVG component located at `branding/qaos-logo.tsx`.
