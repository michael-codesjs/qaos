import React from "react";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto bg-foreground rounded-[40px] p-8 md:p-20 text-center relative overflow-hidden shadow-2xl">
        {/* Decorative Glows */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-strategist blur-[120px] opacity-20" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-navigator blur-[120px] opacity-20" />
        
        <div className="relative z-10">
          <h2 className="text-background text-4xl md:text-6xl font-bold tracking-tight mb-8">
            Stop testing. <br />
            Start shipping.
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto mb-12">
            Join the elite teams using Qaos to automate their entire quality assurance pipeline with intent-based AI.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full md:w-auto px-10 bg-white text-foreground hover:bg-gray-100">
              Start Your Free Trial
            </Button>
            <Button variant="ghost" size="lg" className="w-full md:w-auto px-10 text-white border border-gray-700 hover:bg-white/5">
              Talk to Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
