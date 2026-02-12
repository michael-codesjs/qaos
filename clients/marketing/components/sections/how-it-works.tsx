import React from 'react';

const STEPS = [
  {
    number: '01',
    title: 'Define Intent',
    description:
      'Write your test objectives in plain English. Tell Qaos what you want to verify, not how to click.',
  },
  {
    number: '02',
    title: 'Autonomous Discovery',
    description:
      'Our agent suite explores your application, mapping every possible path and state change.',
  },
  {
    number: '03',
    title: 'Truth Extraction',
    description:
      'Qaos identifies discrepancies between your intent and the reality of your application.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-4 bg-white/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="flex-1 sticky top-32">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              How Qaos <br />
              <span className="text-navigator">Uncovers Truth</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-sm">
              We've replaced brittle selectors and fragile scripts with a generative brain that
              understands user intent.
            </p>
          </div>

          <div className="flex-[1.5] space-y-12">
            {STEPS.map((step) => (
              <div
                key={step.number}
                className="group relative pl-12 md:pl-20 py-8 border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-all rounded-3xl"
              >
                <span className="absolute left-0 top-8 text-5xl md:text-6xl font-black text-gray-200/60 group-hover:text-navigator/20 transition-colors tabular-nums">
                  {step.number}
                </span>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  {step.title}
                  <div className="h-0.5 w-0 group-hover:w-12 bg-navigator transition-all duration-500" />
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed max-w-xl">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
