import Link from 'next/link';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center font-sans selection:bg-strategist/20 bg-[#F6F5F3]">
      {/* Background Aura - The Strategist (Violet) */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-logic-glow rounded-full blur-[120px] opacity-40 animate-pulse" />
      </div>

      <nav className="absolute top-8 left-8">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tighter hover:opacity-70 transition-opacity"
        >
          qaos<span className="text-navigator">.</span>
        </Link>
      </nav>

      <main className="w-full max-w-[400px] px-4 relative z-10">{children}</main>

      <footer className="absolute bottom-8 text-xs text-secondary-text font-medium">
        © 2026 Qaos Inc. | Built with Intent.
      </footer>
    </div>
  );
}
