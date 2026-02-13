'use client';

import { Moon, Sun1 } from 'iconsax-react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

interface ColorModeSwitcherProps {
  isCollapsed?: boolean;
}

export function ColorModeSwitcher({ isCollapsed = false }: ColorModeSwitcherProps) {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className={cn(
        'flex items-center bg-gray-100 dark:bg-white/5 p-1 rounded-full transition-all duration-300 border border-transparent',
        isCollapsed ? 'flex-col gap-1 w-12' : 'flex-row gap-1 w-full',
      )}
    >
      <button
        onClick={() => setTheme('light')}
        className={cn(
          'flex items-center justify-center rounded-full transition-all duration-200 relative z-10',
          isCollapsed ? 'w-10 h-10' : 'flex-1 h-9',
          theme === 'light'
            ? 'bg-white text-orange-500 shadow-sm ring-1 ring-black/5 dark:ring-white/10'
            : 'text-gray-400 hover:text-foreground dark:text-gray-500 dark:hover:text-white',
        )}
      >
        <Sun1 size={18} variant={theme === 'light' ? 'Bold' : 'Linear'} color="currentColor" />
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={cn(
          'flex items-center justify-center rounded-full transition-all duration-200 relative z-10',
          isCollapsed ? 'w-10 h-10' : 'flex-1 h-9',
          theme === 'dark'
            ? 'bg-zinc-800 text-white shadow-sm ring-1 ring-white/10'
            : 'text-gray-400 hover:text-foreground dark:text-gray-500 dark:hover:text-white',
        )}
      >
        <Moon size={18} variant={theme === 'dark' ? 'Bold' : 'Linear'} color="currentColor" />
      </button>
    </div>
  );
}
