import React from "react";
import { Eye, Flash, DirectNotification, ShieldTick } from "iconsax-react";

const FEATURES = [
  {
    title: "Visual Integrity",
    description: "Every pixel is scrutinized. We detect layout shifts and visual bugs that code-based tests overloook.",
    icon: Eye,
    color: "text-oracle",
  },
  {
    title: "Massive Parallelism",
    description: "Run thousands of complex user journeys simultaneously. Get feedback in seconds, not hours.",
    icon: Flash,
    color: "text-sonic",
  },
  {
    title: "Intent-Based Logic",
    description: "Our agents understand the 'why' behind actions, making tests resilient to UI changes.",
    icon: DirectNotification,
    color: "text-strategist",
  },
  {
    title: "Zero Maintenance",
    description: "No more fragile selectors. When your UI changes, Qaos adapts its navigation automatically.",
    icon: ShieldTick,
    color: "text-navigator",
  },
];

export default function Features() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Relentless Precision. <br />
              <span className="text-gray-400">Built for Scale.</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-md">
              Qaos is engineered to handle the complexity of modern enterprise 
              applications without the overhead of traditional QA.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {FEATURES.map((feature) => (
              <div key={feature.title} className="group">
                <div className={`${feature.color} mb-4`}>
                  <feature.icon size="32" variant="Bulk" color="currentColor" />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
