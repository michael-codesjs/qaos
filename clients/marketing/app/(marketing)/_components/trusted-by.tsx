import React from "react";

const LOGOS = [
  "Linear",
  "Vercel",
  "Supabase",
  "Stripe",
  "OpenAI",
  "Anthropic",
];

export default function TrustedBy() {
  return (
    <section className="w-full py-16 border-y border-gray-100 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-10">
          Trusted by high-growth engineering teams
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          {LOGOS.map((logo) => (
            <span
              key={logo}
              className="text-lg md:text-xl font-bold tracking-tighter text-foreground"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
