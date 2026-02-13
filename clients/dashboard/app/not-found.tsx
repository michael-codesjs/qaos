'use client';

import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { Home2, SearchNormal1, Warning2 } from 'iconsax-react';
import { cn } from '@/lib/utils';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4 text-center overflow-hidden relative">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-navigator/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] bg-strategist/5 rounded-full blur-[80px] pointer-events-none" />

      {/* Content */}
      <div className="relevant z-10 flex flex-col items-center max-w-lg animated-fade-in">
        <div className="relative mb-6">
          <h1 className="text-[180px] font-bold leading-none text-transparent bg-clip-text bg-linear-to-br from-gray-200 to-transparent select-none">
            404
          </h1>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 rotate-12 animate-float">
            <Warning2 size={64} variant="Bold" className="text-navigator" color="currentColor" />
          </div>
        </div>

        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-3">Refraction Error</h2>

        <p className="text-gray-500 text-lg mb-10 max-w-sm mx-auto leading-relaxed">
          The signal you are looking for has been lost in the noise. We cannot find the page you
          requested.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: 'navigator', size: 'lg' }),
              'w-full sm:w-auto shadow-lg shadow-navigator/20 hover:shadow-navigator/30 text-white!',
            )}
          >
            <Home2 size={20} variant="Bold" color="currentColor" />
            <span>Return to Overview</span>
          </Link>

          <Link
            href="/search"
            className={cn(
              buttonVariants({ variant: 'secondary', size: 'lg' }),
              'w-full sm:w-auto text-foreground!',
            )}
          >
            <SearchNormal1 size={20} variant="Linear" color="currentColor" />
            <span>Search Assets</span>
          </Link>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 w-full flex justify-center">
          <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">
            Error Code: 404_NOT_FOUND
          </span>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translate(-50%, -50%) rotate(12deg) translateY(0px);
          }
          50% {
            transform: translate(-50%, -50%) rotate(12deg) translateY(-10px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
