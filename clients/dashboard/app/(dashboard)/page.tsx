'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Flash, TrendUp, Activity, Timer1, Add, ArrowRight } from 'iconsax-react';
import { cn } from '@/lib/utils';

import { useHeaderStore } from '@/store/header-store';
import { useEffect } from 'react';
import { StatCard } from '@/components/ui/stat-card';

export default function DashboardPage() {
  const setHeader = useHeaderStore((state) => state.setHeader);

  useEffect(() => {
    setHeader(
      'Overview',
      "Welcome back, Michael. Here is what's happening with your agents today.",
    );
  }, [setHeader]);

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Active Tests" value="12" trend="+2" icon={Flash} color="navigator" />
        <StatCard title="Success Rate" value="98.2%" trend="+0.4%" icon={Activity} color="oracle" />
        <StatCard
          title="Avg. Resolve Time"
          value="4m 12s"
          trend="-15s"
          icon={Timer1}
          color="strategist"
        />
        <StatCard title="Daily Credits" value="840" trend="84%" icon={TrendUp} color="sonic" />
      </div>

      {/* Actions */}
      <div className="flex items-center justify-end">
        <Link href="/projects">
          <Button variant="navigator" className="gap-2">
            <Add size={20} color="currentColor" />
            <span>New Project</span>
          </Button>
        </Link>
      </div>

      {/* Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-foreground">Recent Activity</h3>
            <button className="text-xs font-bold text-gray-400 hover:text-navigator transition-colors flex items-center gap-1">
              View All <ArrowRight size={14} />
            </button>
          </div>

          <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-white/5 divide-y divide-gray-50 dark:divide-white/5">
            <ActivityItem
              agent="Navigator"
              action="resolved critical bug"
              target="Checkout Flow"
              time="2m ago"
              status="success"
            />
            <ActivityItem
              agent="Strategist"
              action="started regression hunt"
              target="Auth Module"
              time="15m ago"
              status="running"
            />
            <ActivityItem
              agent="Oracle"
              action="detected visual mismatch"
              target="Landing Page"
              time="1h ago"
              status="warning"
            />
          </div>
        </div>

        {/* Quick Links / Tasks */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-foreground">Suggested Actions</h3>
          <div className="flex flex-col gap-3">
            <Suggestion
              title="Optimize Test Coverage"
              desc="Your 'Payment' module is missing edge case tests."
              tag="Priority"
            />
            <Suggestion
              title="Configure Webhooks"
              desc="Get notified instantly on Slack or Discord."
              tag="Setup"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ActivityItem({ agent, action, target, time, status }: any) {
  const statusColor =
    status === 'success' ? 'bg-oracle' : status === 'running' ? 'bg-strategist' : 'bg-navigator';

  return (
    <div className="p-4 flex items-center justify-between group cursor-pointer hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
      <div className="flex items-center gap-4">
        <div className={cn('w-2 h-2 rounded-full', statusColor)} />
        <div>
          <p className="text-sm font-semibold text-foreground">
            <span className="text-navigator font-bold">{agent}</span> {action} on{' '}
            <span className="underline decoration-navigator/20">{target}</span>
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500 font-medium">{time}</p>
        </div>
      </div>
      <ArrowRight
        size={18}
        color="currentColor"
        className="text-gray-300 dark:text-gray-600 group-hover:text-navigator group-hover:translate-x-1 transition-all"
      />
    </div>
  );
}

function Suggestion({ title, desc, tag }: any) {
  return (
    <div className="p-4 bg-white dark:bg-zinc-900 border border-gray-100 dark:border-white/5 rounded-2xl space-y-2 hover:border-navigator/30 dark:hover:border-navigator/30 transition-all cursor-pointer group">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-bold px-2 py-0.5 bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-gray-400 rounded-full uppercase tracking-wider group-hover:bg-navigator/10 group-hover:text-navigator transition-colors">
          {tag}
        </span>
      </div>
      <h4 className="text-sm font-bold text-foreground leading-snug">{title}</h4>
      <p className="text-xs text-gray-400 dark:text-gray-500 leading-relaxed font-medium">{desc}</p>
    </div>
  );
}
