'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home2,
  Element3,
  Setting2,
  Logout,
  ArrowLeft2,
  ArrowRight2,
  Flash,
  SearchNormal1,
  Profile2User,
  Chart,
} from 'iconsax-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { ColorModeSwitcher } from '@/components/ui/color-mode-switcher';

const navItems = [
  { label: 'Overview', icon: Home2, href: '/' },
  { label: 'Projects', icon: Element3, href: '/projects' },
  { label: 'Test Suites', icon: Flash, href: '/tests' },
  { label: 'Analytics', icon: Chart, href: '/analytics' },
  { label: 'Team', icon: Profile2User, href: '/team' },
  { label: 'Settings', icon: Setting2, href: '/settings' },
];

export function Sidebar({ onToggle }: { onToggle?: (collapsed: boolean) => void }) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Persistence logic
  useEffect(() => {
    const saved = localStorage.getItem('sidebar-collapsed');
    if (saved !== null) {
      const collapsed = saved === 'true';
      setIsCollapsed(collapsed);
      onToggle?.(collapsed);
    }
  }, [onToggle]);

  const toggleSidebar = () => {
    const newState = !isCollapsed;
    setIsCollapsed(newState);
    localStorage.setItem('sidebar-collapsed', String(newState));
    onToggle?.(newState);
  };

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 h-screen bg-white dark:bg-zinc-950 border-r border-gray-100 dark:border-white/10 transition-all duration-300 z-50 flex flex-col',
        isCollapsed ? 'w-(--sidebar-collapsed-width)' : 'w-(--sidebar-width)',
      )}
    >
      {/* Header */}
      <div
        className={cn(
          'h-20 flex items-center px-6 border-b border-gray-50 dark:border-white/10 shrink-0',
          isCollapsed && 'justify-center',
        )}
      >
        <Link href="/dashboard" className="flex items-center gap-3">
          <div className="w-9 h-9 relative overflow-hidden rounded-xl border border-gray-100 dark:border-white/10 shrink-0">
            <Image src="/logo-chaos.png" alt="Qaos" fill className="object-contain" />
          </div>
          {!isCollapsed && (
            <span className="font-bold text-xl tracking-tight text-foreground">qaos</span>
          )}
        </Link>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 leading-none rounded-xl transition-all duration-200 group relative',
                isCollapsed && 'justify-center',
                isActive
                  ? 'bg-navigator/5 text-navigator dark:bg-navigator/10'
                  : 'text-gray-500 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-foreground',
              )}
            >
              <item.icon
                size={22}
                variant={isActive ? 'Bold' : 'Linear'}
                color="currentColor"
                className={cn(
                  'shrink-0',
                  isActive
                    ? 'text-navigator'
                    : 'group-hover:text-foreground text-foreground dark:text-gray-400 dark:group-hover:text-white',
                )}
              />
              {!isCollapsed && (
                <span
                  className={cn(
                    'font-semibold text-sm',
                    isActive
                      ? 'text-foreground'
                      : 'text-gray-500 group-hover:text-foreground dark:text-gray-400 dark:group-hover:text-white',
                  )}
                >
                  {item.label}
                </span>
              )}
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-navigator rounded-r-full" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer / Toggle */}
      <div className="p-3 border-t border-gray-50 dark:border-white/10 space-y-1">
        <div className={cn('mb-2', isCollapsed ? 'mx-auto' : 'mx-3')}>
          <ColorModeSwitcher isCollapsed={isCollapsed} />
        </div>

        <button
          onClick={toggleSidebar}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-foreground dark:hover:text-white transition-all duration-200"
        >
          {isCollapsed ? (
            <ArrowRight2 size={22} variant="Linear" color="currentColor" />
          ) : (
            <>
              <ArrowLeft2 size={22} variant="Linear" color="currentColor" />
              <span className="font-semibold text-sm text-left flex-1 dark:text-gray-400 dark:group-hover:text-white">
                Collapse
              </span>
            </>
          )}
        </button>

        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 transition-all duration-200">
          <Logout size={22} variant="Linear" color="currentColor" />
          {!isCollapsed && <span className="font-semibold text-sm">Log out</span>}
        </button>
      </div>
    </aside>
  );
}
