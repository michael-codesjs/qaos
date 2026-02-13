'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { HambergerMenu, CloseSquare, ArrowDown2 } from 'iconsax-react';
import Image from 'next/image';
import NavItem from './nav-item';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-center pt-4 px-4 pointer-events-none">
      <div
        className={`flex items-center justify-between w-full transition-all duration-500 ease-in-out pointer-events-auto border
          ${
            scrolled
              ? 'max-w-4xl bg-white/70 backdrop-blur-xl border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.06)] rounded-2xl px-5 py-2'
              : 'max-w-7xl px-4 md:px-8 py-4 border-transparent'
          } focus:outline-none focus:ring-0`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 transition-all duration-500 group outline-none"
        >
          <div
            className={cn(
              'relative transition-all duration-500 ease-in-out overflow-hidden rounded-xl border border-gray-100',
              scrolled ? 'w-7 h-7' : 'w-11 h-11',
            )}
          >
            <Image src="/logo-chaos.png" alt="Qaos Logo" fill className="object-contain" priority />
          </div>
          <span
            className={`font-bold tracking-tight transition-all duration-500 ease-in-out whitespace-nowrap overflow-hidden ${scrolled ? 'max-w-0 opacity-0' : 'max-w-[100px] opacity-100 text-xl ml-1'}`}
          >
            qaos
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-0.5">
          <NavItem label="Product" hasDropdown />
          <NavItem label="Why us" hasDropdown />
          <NavItem label="Customers" />
          <NavItem label="Pricing" />
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          <Link href="/login">
            <Button variant="outline" size="sm" className="hidden sm:block">
              Open app
            </Button>
          </Link>
          <Link href="/signup">
            <Button
              className={cn(
                'text-[12px] md:text-[13px]',
                scrolled ? 'h-9 md:h-10 px-4' : 'h-10 md:h-11 px-5',
              )}
            >
              Get free trial
            </Button>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:bg-gray-100 rounded-lg transition-colors outline-none focus:ring-0"
          >
            {isMenuOpen ? (
              <CloseSquare size="24" color="currentColor" />
            ) : (
              <HambergerMenu size="24" color="currentColor" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-[-1] transition-all duration-500 ease-in-out lg:hidden pointer-events-auto ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
      >
        <div className="pt-28 px-8 pb-12 h-full overflow-y-auto flex flex-col">
          <div className="space-y-12 grow">
            <section className="space-y-6">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">
                Product
              </h3>
              <div className="space-y-6">
                <MobileNavItem label="Intelligence" hasItems />
                <MobileNavItem label="Lead Generation & Signals" hasItems />
                <MobileNavItem label="Multichannel Engagement" hasItems />
                <MobileNavItem label="Deliverability Optimization" hasItems />
              </div>
            </section>

            <section className="space-y-6">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">Why us</h3>
              <div className="space-y-6">
                <MobileNavItem label="Pricing" />
                <MobileNavItem label="Customers" />
                <MobileNavItem label="Solutions" hasItems />
              </div>
            </section>
          </div>

          <section className="mt-auto pt-8 border-t border-gray-100 space-y-4">
            <Link href="/signup" className="w-full">
              <Button size="lg" className="w-full text-lg shadow-lg">
                Get free trial
              </Button>
            </Link>
            <Link href="/login" className="w-full">
              <Button variant="ghost" size="lg" className="w-full text-lg">
                Open app
              </Button>
            </Link>
          </section>
        </div>
      </div>
    </header>
  );
}

function MobileNavItem({ label, hasItems }: { label: string; hasItems?: boolean }) {
  return (
    <div className="flex items-center justify-between group cursor-pointer">
      <span className="text-2xl font-bold text-foreground tracking-tight group-hover:text-navigator transition-colors">
        {label}
      </span>
      {hasItems && <ArrowDown2 size="20" color="currentColor" className="text-gray-400" />}
    </div>
  );
}
