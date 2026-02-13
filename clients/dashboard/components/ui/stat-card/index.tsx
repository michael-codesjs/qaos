import { cn } from '@/lib/utils';
import { Icon } from 'iconsax-react';

interface StatCardProps {
  title: string;
  value: string;
  trend: string;
  icon: Icon;
  color: 'navigator' | 'oracle' | 'strategist' | 'sonic';
}

export function StatCard({ title, value, trend, icon: Icon, color }: StatCardProps) {
  const colorMap = {
    navigator: 'bg-navigator/10 text-navigator',
    oracle: 'bg-oracle/10 text-oracle',
    strategist: 'bg-strategist/10 text-strategist',
    sonic: 'bg-sonic/10 text-sonic',
  };

  return (
    <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-gray-100 dark:border-white/5 shadow-[0_4px_24px_rgba(0,0,0,0.02)] transition-all hover:shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
      <div className="flex items-center justify-between mb-4">
        <div className={cn('p-2 rounded-xl', colorMap[color])}>
          <Icon size={24} variant="Bulk" color="currentColor" />
        </div>
        <span
          className={cn(
            'text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider',
            trend.startsWith('+')
              ? 'bg-oracle/10 text-oracle'
              : trend.startsWith('-')
                ? 'bg-navigator/10 text-navigator'
                : 'bg-gray-100 text-gray-500 dark:bg-white/10 dark:text-gray-400',
          )}
        >
          {trend}
        </span>
      </div>
      <div className="space-y-1">
        <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
          {title}
        </p>
        <p className="text-2xl font-bold text-foreground tracking-tight">{value}</p>
      </div>
    </div>
  );
}
