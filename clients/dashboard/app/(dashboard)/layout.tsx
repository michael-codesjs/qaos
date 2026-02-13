'use client';

import { useState, useEffect } from 'react';
import { Sidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { cn } from '@/lib/utils';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('sidebar-collapsed');
    if (saved !== null) {
      setIsCollapsed(saved === 'true');
    }
    setIsLoaded(true);
  }, []);

  const handleToggle = (collapsed: boolean) => {
    setIsCollapsed(collapsed);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar onToggle={handleToggle} />

      <div
        className={cn(
          'flex flex-col flex-1 transition-all duration-300',
          isLoaded
            ? isCollapsed
              ? 'ml-[var(--sidebar-collapsed-width)]'
              : 'ml-[var(--sidebar-width)]'
            : 'ml-0',
        )}
      >
        <Header />
        <main className="flex-1 px-8 py-6">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
