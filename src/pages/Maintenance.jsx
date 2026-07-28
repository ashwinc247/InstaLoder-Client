import React from 'react';
import { Settings } from 'lucide-react';

export const Maintenance = () => {
  return (
    <div className="max-w-md mx-auto px-4 py-24 text-center space-y-6 flex flex-col items-center justify-center min-h-[70vh]">
      <div className="h-20 w-20 bg-yellow-500/10 text-yellow-500 rounded-full flex items-center justify-center mx-auto animate-pulse">
        <Settings className="h-10 w-10 animate-spin" style={{ animationDuration: '6s' }} />
      </div>
      <h1 className="font-['Outfit'] font-black text-3xl text-slate-900 dark:text-white">Under Maintenance</h1>
      <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-xs">
        Insta Loader is undergoing scheduled upgrades. We will return online shortly. Thank you for your patience.
      </p>
    </div>
  );
};
