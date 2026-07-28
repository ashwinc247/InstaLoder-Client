import React from 'react';

export const AdSlot = ({ id, type = 'banner', className = '' }) => {
  const heightClass = {
    banner: 'h-24 md:h-28',
    hero: 'h-32 md:h-40',
    sidebar: 'h-[300px]',
    article: 'h-48'
  }[type] || 'h-24';

  return (
    <div className={`w-full overflow-hidden flex items-center justify-center border border-dashed border-slate-300 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-900/30 rounded-card p-2 text-center text-[10px] text-slate-400 select-none ${heightClass} ${className}`}>
      <div className="space-y-1">
        <span className="uppercase text-[8px] tracking-wider text-slate-500 block">Advertisement</span>
        <span className="font-mono text-slate-400">AdSlot Placed [ID: {id}]</span>
      </div>
    </div>
  );
};
