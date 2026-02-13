'use client';

import { ApolloProvider } from '@apollo/client';
import { client } from '@/lib/apollo-client';
import { ReactNode } from 'react';
import { ThemeProvider } from '@/components/theme-provider';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </ThemeProvider>
  );
}
