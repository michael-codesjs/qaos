import Header from '@/components/layout/header/index';
import Footer from '@/components/layout/footer/index';
import { Button } from '@/components/ui/button';
import TrustedBy from '@/components/sections/trusted-by';
import Agents from '@/components/sections/agents';
import Features from '@/components/sections/features';
import Comparison from '@/components/sections/comparison';
import HowItWorks from '@/components/sections/how-it-works';
import Integrations from '@/components/sections/integrations';
import FAQ from '@/components/sections/faq';
import CTA from '@/components/sections/cta';

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col font-sans selection:bg-navigator/30">
      <Header />

      {/* Background Aura Effects - Compact & Subtle */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-action-glow rounded-full blur-[100px] opacity-60 animate-pulse" />
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-vision-glow rounded-full blur-[80px] opacity-40" />
      </div>

      <main className="grow flex flex-col">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center px-4 pt-32 pb-20 text-center relative z-0">
          {/* Badge / Pill */}
          <a
            href="#"
            className="group inline-flex items-center gap-2 p-1 pr-3 rounded-full bg-white shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_6px_32px_rgba(0,0,0,0.06)] transition-all hover:-translate-y-0.5 mb-8 border border-gray-100/50"
          >
            <span className="bg-foreground text-background text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
              New
            </span>
            <span className="text-xs font-semibold text-gray-500 group-hover:text-foreground transition-colors flex items-center gap-1">
              Testing with Intent: Introducing Nova Act
              <svg
                className="w-3.5 h-3.5 text-gray-400 group-hover:text-foreground transition-colors ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </a>

          {/* Headline */}
          <h1 className="text-[40px] md:text-[76px] font-bold tracking-[-0.03em] max-w-4xl mb-7 leading-[1.1] md:leading-[0.95] text-foreground">
            Testing with
            <br className="md:hidden" /> <span className="text-navigator">Intent</span>,<br />
            Not Just Scripts.
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-[22px] text-gray-400 font-medium max-w-2xl mb-12 leading-relaxed px-4 md:px-0">
            The autonomous agent platform that uncovers critical bugs,
            <br className="hidden md:block" />
            and drives continuous product quality with an all-in-one AI suite.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-20">
            <Button size="lg" className="min-w-[200px]">
              Get Started for Free
            </Button>
            <Button variant="secondary" size="lg" className="min-w-[200px]">
              Book a Demo
            </Button>
          </div>

          {/* Hero Visual */}
          <div className="w-full max-w-5xl aspect-video bg-linear-to-b from-white to-gray-50/50 rounded-3xl border border-gray-100 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-from)_0%,transparent_70%)] from-navigator/5 opacity-50" />
            <div className="flex items-center justify-center h-full">
              <div className="text-gray-300 font-mono text-xs tracking-widest uppercase flex flex-col items-center gap-4">
                <div className="w-12 h-12 rounded-full border-2 border-dashed border-gray-200 animate-spin-slow" />
                Initializing...
              </div>
            </div>
          </div>
        </section>

        <TrustedBy />
        <Agents />
        <Features />
        <Comparison />
        <HowItWorks />
        <Integrations />

        {/* Social Proof */}
        <section className="py-20 px-4 bg-white/30">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-strategist mb-6 flex justify-center">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5683 13 13.017 13H11.017C10.4647 13 10.017 12.5523 10.017 12V9C10.017 6.79086 11.8079 5 14.017 5H19.017C21.2261 5 23.017 6.79086 23.017 9V15C23.017 17.2091 21.2261 19 19.017 19H16.017C15.4647 19 15.017 19.4477 15.017 20V21H14.017ZM1 21L1 18C1 16.8954 1.89543 16 3 16H6C6.55228 16 7 15.5523 7 15V9C7 8.44772 6.55228 8 6 8H2C1.44772 8 1 8.44772 1 9V12C1 12.5523 0.552285 13 0 13H-2C-2.55228 13 -3 12.5523 -3 12V9C-3 6.79086 -1.20914 5 1 5H6C8.20914 5 10 6.79086 10 9V15C10 17.2091 8.20914 19 6 19H3C2.44772 19 2 19.4477 2 20V21H1Z" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-medium text-foreground mb-8 leading-relaxed italic">
              &quot;Qaos found edge cases in our checkout flow that our manual testers hadn&apos;t
              uncovered in months.&quot;
            </h3>
            <div className="flex flex-col items-center">
              <p className="font-bold text-sm text-foreground uppercase tracking-wider">
                Sarah Jenkins
              </p>
              <p className="text-xs text-gray-400 font-bold mt-1">Head of Engineering, Linear</p>
            </div>
          </div>
        </section>

        <FAQ />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
