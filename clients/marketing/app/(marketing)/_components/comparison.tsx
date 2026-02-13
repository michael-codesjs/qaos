import React from 'react';
import { DocumentCode, Cpu, Code, GlobalSearch } from 'iconsax-react';
import { cn } from '@/lib/utils';

const COMPARISON_DATA = [
  {
    label: 'Maintenance',
    scripts: 'Fragile selectors break on every UI change',
    intent: 'Agents adapt to UI updates automatically',
  },
  {
    label: 'Setup Time',
    scripts: 'Weeks spent writing & debugging scripts',
    intent: 'Minutes to define intent in plain English',
  },
  {
    label: 'Coverage',
    scripts: 'Limited to paths you manually scripted',
    intent: 'Autonomous discovery of edge cases',
  },
  {
    label: 'Scale',
    scripts: 'Slow, linear execution on restricted VMs',
    intent: 'Massive parallel cloud-native execution',
  },
];

export default function Comparison() {
  return (
    <section className="py-24 px-4 bg-[#F9F8F6]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Intent vs <span className="text-gray-400">Scripts</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Stop babysitting your test suite. Qaos replaces brittle automation with autonomous
            agents that think like your users.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Legacy Scripts Card */}
          <div className="relative p-8 md:p-12 rounded-[40px] bg-white/50 border border-gray-100 overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-5">
              <Code size="120" variant="Bold" color="currentColor" />
            </div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="p-2 bg-gray-100 rounded-lg">
                <DocumentCode size="24" className="text-gray-400" color="currentColor" />
              </span>
              Legacy Scripts
            </h3>
            <ul className="space-y-8">
              {COMPARISON_DATA.map((item) => (
                <li key={item.label} className="flex flex-col gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    {item.label}
                  </span>
                  <p className="text-gray-500 font-medium">{item.scripts}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Qaos Intent Card */}
          <div className="relative p-8 md:p-12 rounded-[40px] bg-foreground text-background shadow-2xl overflow-hidden group">
            {/* Gradient Glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-navigator blur-[100px] opacity-20" />

            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <GlobalSearch size="120" variant="Bold" color="currentColor" />
            </div>

            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="p-2 bg-navigator/20 rounded-lg">
                <Cpu size="24" className="text-navigator" color="currentColor" />
              </span>
              Qaos Intent
            </h3>
            <ul className="space-y-8">
              {COMPARISON_DATA.map((item) => (
                <li key={item.label} className="flex flex-col gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-navigator">
                    {item.label}
                  </span>
                  <p className="text-gray-300 font-medium">{item.intent}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
