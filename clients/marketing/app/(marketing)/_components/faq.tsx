'use client';

import React, { useState } from 'react';
import { Add, Minus } from 'iconsax-react';
import { cn } from '@/lib/utils';

const FAQS = [
  {
    question: 'Does Qaos work with any tech stack?',
    answer:
      'Yes. Qaos is platform-agnostic. Because it interacts with your application at the interface layer like a human would, it works with any web-based application regardless of the underlying framework (React, Vue, Next.js, or even legacy apps).',
  },
  {
    question: "How does 'Intent' differ from traditional scripting?",
    answer:
      "Traditional scripts rely on DOM selectors that break when your CSS or HTML structure changes. Qaos uses generative vision and logic agents. You define the goal (e.g., 'Verify the checkout flow works with a discount code'), and the agents figure out the path, making them resilient to UI changes.",
  },
  {
    question: 'Can it handle complex edge cases and discovery?',
    answer:
      "Absolutely. While you can define specific paths, Qaos is designed for discovery. Our 'Strategist' agent constantly explores alternative paths and edge cases that manual testers or static scripts would never think to check.",
  },
  {
    question: 'How do we integrate Qaos into our CI/CD?',
    answer:
      'Qaos provides a robust CLI and API. You can trigger agent runs on every pull request, Vercel preview, or staging deployment. Results can be synced directly to Slack, Linear, or Jira for immediate action.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Enterprise security is our foundation. Qaos is built with SOC2 Type II compliance in mind, ensuring all test data and application snapshots are encrypted and handled with strict access controls.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 bg-[#F9F8F6]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Common <span className="text-gray-400">Questions</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Everything you need to know about autonomous quality assurance.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-gray-100 bg-white overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 md:p-8 flex items-center justify-between text-left outline-none"
              >
                <span className="text-lg font-bold text-foreground group-hover:text-navigator transition-colors">
                  {faq.question}
                </span>
                <div
                  className={cn(
                    'shrink-0 ml-4 transition-transform duration-300',
                    openIndex === index ? 'rotate-180' : '',
                  )}
                >
                  {openIndex === index ? (
                    <Minus size="24" color="currentColor" />
                  ) : (
                    <Add size="24" color="currentColor" />
                  )}
                </div>
              </button>

              <div
                className={cn(
                  'px-6 md:px-8 transition-all duration-300 ease-in-out',
                  openIndex === index
                    ? 'max-h-[500px] pb-8 opacity-100'
                    : 'max-h-0 opacity-0 overflow-hidden',
                )}
              >
                <p className="text-gray-500 leading-relaxed font-medium">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
