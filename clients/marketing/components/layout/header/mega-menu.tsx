"use client";

import Link from "next/link";

interface MegaMenuProps {
  isVisible: boolean;
  type: "product" | "why-us";
}

export default function MegaMenu({ isVisible, type }: MegaMenuProps) {
  if (!isVisible) return null;

  const content = {
    product: {
      cols: [
        {
          items: [
            { tag: "Intelligence", title: "The Strategist", desc: "Real-time reasoning engine that plans and executes complex test paths." },
            { tag: "Execution", title: "The Navigator", desc: "Agentic browser control that drives UIs like a human using Nova Act." },
          ]
        },
        {
          items: [
            { tag: "Multimodal", title: "Visual Oracle", desc: "Advanced vision model that detects visual regressions and layout shifts." },
            { tag: "Platform", title: "Qaos Cloud", desc: "Scale your testing infrastructure without managing a single server." },
          ]
        },
        {
          items: [
            { tag: "Connectivity", title: "Native Tooling", desc: "Direct integrations with GitHub, Slack, Jira, and your CI/CD pipeline." },
            { tag: "Developer", title: "Testing SDK", desc: "Programmatic access to the Qaos agent suite for custom workflows." },
          ]
        }
      ],
      footer: "Qaos Cloud v0.4 is now in Private Beta — Request early access"
    },
    "why-us": {
      cols: [
        {
          items: [
            { tag: "Approach", title: "Intent vs Scripts", desc: "Stop writing brittle selectors. Tell Qaos what to do, not how to do it." },
            { tag: "Efficiency", title: "Zero Maintenance", desc: "Tests that heal automatically when your UI changes. No more broken pipes." },
          ]
        },
        {
          items: [
            { tag: "Performance", title: "Human Scale", desc: "Execute 1,000s of complex user flows in parallel, 24/7, with zero fatigue." },
            { tag: "Coverage", title: "Unknown Unknowns", desc: "Autonomous exploration finds edge cases your team never thought to test." },
          ]
        },
        {
          items: [
            { tag: "Culture", title: "Ship with Intent", desc: "Move from 'I hope it works' to 'I know it works' with absolute certainty." },
            { tag: "Security", title: "Enterprise Grade", desc: "SOC2 compliant, secure execution environments for sensitive data." },
          ]
        }
      ],
      footer: "Compare Qaos with traditional automation tools"
    }
  };

  const current = content[type];

  return (
    <div className="absolute top-full left-0 pt-3 w-[720px] z-50">
      <div className="bg-white border border-gray-100 shadow-[0_24px_54px_rgba(0,0,0,0.12)] rounded-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300 ease-out">
        {/* Main Grid Content */}
        <div className="grid grid-cols-3 divide-x divide-gray-50">
          {current.cols.map((col, idx) => (
            <div key={idx} className="p-6 space-y-7">
              {col.items.map((item, iIdx) => (
                <div key={iIdx} className="group cursor-pointer">
                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 block">{item.tag}</span>
                  <h4 className="font-bold text-[13px] text-foreground mb-1 group-hover:text-navigator transition-colors">{item.title}</h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed font-medium line-clamp-2">{item.desc}</p>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Footer Bar */}
        <div className="bg-gray-50/80 px-7 py-3 border-t border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="bg-white px-1.5 py-0.5 rounded border border-gray-200 text-[10px] font-bold text-gray-400 uppercase tracking-tight">Info</span>
            <p className="text-[11px] font-medium text-gray-600">
              {current.footer}
            </p>
          </div>
          <Link href="#" className="text-[11px] font-bold text-foreground hover:opacity-70 transition-opacity">
            Learn more →
          </Link>
        </div>
      </div>
    </div>
  );
}
