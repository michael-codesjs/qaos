import Header from '@/components/layout/header/index';
import Footer from '@/components/layout/footer/index';

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col font-sans selection:bg-navigator/30">
      <Header />

      {/* Background Aura Effects - Compact & Subtle */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-action-glow rounded-full blur-[100px] opacity-60 animate-pulse" />
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-vision-glow rounded-full blur-[80px] opacity-40" />
      </div>

      <main className="grow flex flex-col">{children}</main>

      <Footer />
    </div>
  );
}
