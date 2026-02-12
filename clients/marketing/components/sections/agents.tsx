import React from "react";
import { Computing, Mouse, Eye, Flash } from "iconsax-react";

const AGENTS = [
  {
    name: "The Strategist",
    description: "Orchestrates complex test paths and logic. It plans the most efficient route to find your most critical bugs.",
    icon: Computing,
    color: "text-strategist",
    bg: "bg-strategist/10",
    border: "border-strategist/20",
  },
  {
    name: "The Navigator",
    description: "Interacts with your UI precisely as a human would. It clicks, scrolls, and navigates through any user flow.",
    icon: Mouse,
    color: "text-navigator",
    bg: "bg-navigator/10",
    border: "border-navigator/20",
  },
  {
    name: "The Visual Oracle",
    description: "Sees what your users see. It verifies visual integrity, layout consistency, and identifies regressions instantly.",
    icon: Eye,
    color: "text-oracle",
    bg: "bg-oracle/10",
    border: "border-oracle/20",
  },
  {
    name: "The Sonic",
    description: "Runs tests in massive parallel, delivering results in seconds. Built for the speed of modern development.",
    icon: Flash,
    color: "text-sonic",
    bg: "bg-sonic/10",
    border: "border-sonic/20",
  },
];

export default function Agents() {
  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Meet the <span className="text-foreground/80">Qaos Suite</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            A specialized fleet of autonomous agents working in tandem to 
            protect your software integrity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {AGENTS.map((agent) => (
            <div 
              key={agent.name}
              className={`p-8 rounded-3xl border ${agent.border} ${agent.bg} backdrop-blur-sm hover:-translate-y-1 transition-all duration-300 group`}
            >
              <div className={`w-12 h-12 rounded-2xl ${agent.bg} ${agent.color} flex items-center justify-center mb-6 border ${agent.border}`}>
                <agent.icon size="24" variant="Bold" color="currentColor" />
              </div>
              <h3 className="text-xl font-bold mb-3">{agent.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {agent.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
