import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Home } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="max-w-md mx-auto px-4 py-24 text-center space-y-6 flex flex-col items-center justify-center min-h-[60vh]">
      <div className="h-20 w-20 bg-pink-500/10 text-pink-500 rounded-full flex items-center justify-center mx-auto">
        <AlertTriangle className="h-10 w-10" />
      </div>
      <h1 className="font-['Outfit'] font-black text-3xl text-slate-900 dark:text-white">Page Not Found</h1>
      <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-xs">
        The resource you are looking for has been moved, renamed, or is currently unavailable.
      </p>
      <Link
        to="/"
        className="inline-flex px-6 py-3 rounded-button text-sm font-bold text-white btn-gradient items-center space-x-2"
      >
        <Home className="h-4 w-4" />
        <span>Return Home</span>
      </Link>
    </div>
  );
};
