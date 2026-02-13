'use client';

import { Notification, ProfileCircle, Convert3DCube } from 'iconsax-react';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import { useHeaderStore } from '@/store/header-store';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { title, description } = useHeaderStore();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-40 flex h-20 w-full items-center justify-between px-8 transition-all duration-300',
        scrolled
          ? 'bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border-b border-gray-100 dark:border-white/10'
          : 'bg-transparent',
      )}
    >
      {/* Left side: Context/Search */}
      {/* Left side: Page Title */}
      <div className="flex flex-col justify-center">
        <h1 className="text-xl font-bold tracking-tight text-foreground dark:text-white">
          {title}
        </h1>
        {description && (
          <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-0.5">
            {description}
          </p>
        )}
      </div>

      {/* Right side: Tools/Profile */}
      <div className="flex items-center gap-2">
        <button className="p-3 text-gray-500 dark:text-gray-400 hover:text-foreground dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 rounded-xl transition-all">
          <Convert3DCube size={22} variant="Linear" color="currentColor" />
        </button>
        <button className="p-3 text-gray-500 dark:text-gray-400 hover:text-foreground dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 rounded-xl transition-all relative">
          <Notification size={22} variant="Linear" color="currentColor" />
          <span className="absolute top-3 right-3 w-2 h-2 bg-navigator rounded-full border-2 border-white dark:border-zinc-950" />
        </button>

        <div className="w-px h-6 bg-gray-200 dark:bg-white/10 mx-2" />

        <button className="flex items-center gap-3 pl-3 pr-2 py-2 hover:bg-gray-100 dark:hover:bg-white/5 rounded-2xl transition-all group">
          <div className="flex flex-col items-end">
            <span className="text-sm font-bold text-foreground dark:text-white leading-none">
              Michael Phiri
            </span>
            <span className="text-[10px] font-bold text-navigator uppercase tracking-wider mt-1">
              Admin
            </span>
          </div>
          <div className="w-10 h-10 bg-gray-200 dark:bg-white/5 rounded-xl overflow-hidden border border-gray-100 dark:border-white/10 group-hover:border-navigator transition-colors">
            {/* Placeholder for avatar */}
            <div className="w-full h-full bg-navigator/10 flex items-center justify-center text-navigator">
              <ProfileCircle size={28} variant="Bulk" color="currentColor" />
            </div>
          </div>
        </button>
      </div>
    </header>
  );
}
