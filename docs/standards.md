# Development Standards

## File Organization & Naming

To maintain consistency and bridge the gap between "chaos" and "order," we follow strict folder and naming conventions.

### 1. Naming Convention

- **Kebab-case**: All files and directories must use `kebab-case`. (e.g., `user-profile.tsx`, `auth-client.ts`, `pin-input/`).
- **Lower-case Only**: Avoid PascalCase or camelCase in filenames unless required by a specific framework convention.

### 2. Component Structure

Components should be organized into self-contained directories. This keeps styles, tests, and logic bundled together.

- **Pattern**: `components/[category]/[component-name]/index.tsx`
- **Example**: `components/ui/button/index.tsx`
- **Exports**: Always use **Named Exports** (e.g., `export const Button = ...`) rather than default exports for UI components. This ensures consistent naming when imported across the project.

### 3. Next.js App Router

We follow the standard directory-based routing. Group related routes using route groups `()` when appropriate for layout separation.

- **Pages**: `app/(auth)/login/page.tsx`
- **Layouts**: `app/(auth)/layout.tsx`

### 4. Logic & Utilities

- **Lib**: Place centralized instances (Axios, Auth Clients) in `lib/`.
- **Hooks**: Place custom hooks in `hooks/` using `use-` prefix in kebab-case. (e.g., `use-media-query.ts`).

## Form Handling

We use `react-hook-form` in combination with `zod` for all form management and validation. This ensures type safety and a consistent validation experience across the application.

### Implementation Pattern

1. Define a Zod schema for the form data.
2. Use the `useForm` hook with the `zodResolver`.
3. Wrap inputs in a `<form>` and use `handleSubmit`.
4. Pass any validation errors to our UI components via their `variant="error"` and `helperText` props.

```tsx
const schema = z.object({
  email: z.string().email(),
});

const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm({
  resolver: zodResolver(schema),
});
```

## API Interactions

For all custom data fetching and mutations, we use a centralized **Axios** instance. Avoid using `window.fetch` directly unless required for specific library integrations.

### Axios Instance

The instance is located at `@/lib/api.ts` and includes pre-configured:

- `baseURL` (from environment variables)
- `withCredentials: true` (for cross-origin session support)
- Global `Content-Type: application/json`

### Usage

```tsx
import api from '@/lib/api';

const fetchData = async () => {
  const { data } = await api.get('/your-endpoint');
  return data;
};
```

## Authentication

Authentication is handled via **Better Auth**. While Better Auth provides its own client (`@/lib/auth-client.ts`), it should be used exclusively for auth-specific actions (signIn, signUp, verifyCode, etc.). All other application-specific data should be fetched through the centralized `api` (Axios) instance or the Apollo Client for GraphQL.

## State Management

We use **Zustand** for global client-side state management. It is lightweight, fast, and avoids the boilerplate of Redux.

### Implementation Pattern

- Create stores in `store/` directory.
- Use the `create` function from `zustand`.
- Follow the naming convention `use[Name]Store`.

```tsx
import { create } from 'zustand';

interface UserState {
  user: any;
  setUser: (user: any) => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
```

## Data Fetching (GraphQL)

For interacting with our GraphQL API, we use **Apollo Client**.

### Configuration

The client is configured in `lib/apollo-client.ts` with:

- `HttpLink` pointing to our backend GraphQL endpoint.
- `credentials: 'include'` for secure session handling.
- `InMemoryCache` for efficient data caching.

### Usage

Wrap your application (or the relevant route group) in the `Providers` component located in `components/providers`. Use Apollo hooks (`useQuery`, `useMutation`) for data operations.

```tsx
import { useQuery, gql } from '@apollo/client';

const GET_DATA = gql`
  query GetData {
    items {
      id
      name
    }
  }
`;

function MyComponent() {
  const { data, loading } = useQuery(GET_DATA);
  // ...
}
```
