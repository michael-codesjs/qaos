'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'iconsax-react';

const INTEGRATIONS = [
  { name: 'GitHub', category: 'CI/CD', domain: 'github.com' },
  { name: 'Slack', category: 'Alerts', domain: 'slack.com' },
  { name: 'Linear', category: 'Bugs', domain: 'linear.app' },
  { name: 'Vercel', category: 'Deployment', domain: 'vercel.com' },
  { name: 'Jenkins', category: 'Infrastructure', domain: 'jenkins.io' },
  { name: 'GitLab', category: 'Source Control', domain: 'gitlab.com' },
  { name: 'Jira', category: 'Management', domain: 'atlassian.com' },
  { name: 'Microsoft Teams', category: 'Collaboration', domain: 'microsoft.com' },
];

export default function Integrations() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Fits perfectly into your <br />
              <span className="text-navigator">modern workflow.</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-md mx-auto lg:mx-0 leading-relaxed">
              Qaos integrates with the tools you already use. Trigger tests from your CI, get alerts
              in Slack, and auto-sync bugs to your issue tracker.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <span className="px-4 py-2 bg-gray-50 text-gray-400 text-[10px] font-bold rounded-full border border-gray-100 uppercase tracking-[0.15em]">
                Single Sign-On
              </span>
              <span className="px-4 py-2 bg-gray-50 text-gray-400 text-[10px] font-bold rounded-full border border-gray-100 uppercase tracking-[0.15em]">
                API Access
              </span>
              <span className="px-4 py-2 bg-gray-50 text-gray-400 text-[10px] font-bold rounded-full border border-gray-100 uppercase tracking-[0.15em]">
                Webhooks
              </span>
            </div>
          </div>

          <div className="flex-[1.2] w-full">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-3 gap-4 mb-8">
              {INTEGRATIONS.map((app) => (
                <div
                  key={app.name}
                  className="p-6 rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all group flex flex-col items-center text-center gap-4 cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center p-3 group-hover:bg-gray-100 transition-all">
                    <img
                      src={`https://unavatar.io/${app.domain}`}
                      alt={app.name}
                      className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100 transition-all duration-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          `https://www.google.com/s2/favicons?domain=${app.domain}&sz=128`;
                      }}
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-foreground">{app.name}</h4>
                    <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider mt-1">
                      {app.category}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <Button
                variant="ghost"
                className="group text-gray-400 hover:text-foreground gap-2 font-bold text-sm tracking-tight transition-all"
              >
                View all 20+ integrations
                <ArrowRight size="18" className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
