import React, { useEffect, useState } from 'react';
import { ShieldCheck } from 'lucide-react';

export const CookieConsent = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (type) => {
    localStorage.setItem('cookie_consent', type);
    setShow(false);
    
    if (type === 'accept_all') {
      window.analyticsEnabled = true;
    } else {
      window.analyticsEnabled = false;
    }
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-4 right-4 left-4 md:left-auto md:max-w-md z-50 glass p-6 rounded-card shadow-floating border border-slate-200/20 dark:border-slate-800/50 animate-in slide-in-from-bottom duration-300">
      <div className="flex items-start space-x-3">
        <div className="p-2 rounded-xl bg-violet-500/10 text-violet-500 mt-1">
          <ShieldCheck className="h-6 w-6" />
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold text-slate-900 dark:text-white">Cookie Consent Preferences</h4>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            We use essential and non-essential cookies to analyze traffic, customize your workspace settings, and serve relevant AdSense ads. Learn more in our Privacy Policy.
          </p>
        </div>
      </div>
      <div className="mt-6 flex flex-col sm:flex-row gap-2">
        <button
          onClick={() => handleConsent('accept_all')}
          className="flex-1 px-4 py-2 text-xs font-semibold text-white btn-gradient rounded-button"
        >
          Accept All
        </button>
        <button
          onClick={() => handleConsent('reject_some')}
          className="flex-1 px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-button transition-colors"
        >
          Reject Non-Essential
        </button>
      </div>
    </div>
  );
};
