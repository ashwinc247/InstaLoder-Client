import React from 'react';

export const Privacy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-slate-700 dark:text-slate-350 space-y-6">
      <h1 className="font-['Outfit'] font-extrabold text-3xl sm:text-4xl text-gradient">Privacy Policy</h1>
      <p className="text-xs text-slate-500">Last Updated: July 28, 2026</p>
      
      <p className="text-sm leading-relaxed">
        At Insta Loader, we prioritize the protection of your personal information. This Privacy Policy details how we collect, process, and protect your details when interacting with our downloader application and dashboard interfaces.
      </p>

      <h2 className="font-bold text-lg text-slate-900 dark:text-white mt-8">1. Information We Collect</h2>
      <p className="text-sm leading-relaxed">
        We collect account credentials (name, email addresses, and encrypted passwords) when registering for the Dashboard. We also collect URL links submitted to validate media extraction, along with connection parameters (device models, browsers, and country location) solely for analytics and performance monitoring.
      </p>

      <h2 className="font-bold text-lg text-slate-900 dark:text-white mt-8">2. Use of Information</h2>
      <p className="text-sm leading-relaxed">
        Collected information is utilized to provision your user dashboard workspace, compile download history reports, prevent API abuse, and serve relevant ad configurations. We do not sell or distribute personal user information to third-party databases.
      </p>

      <h2 className="font-bold text-lg text-slate-900 dark:text-white mt-8">3. Cookies & Analytical Triggers</h2>
      <p className="text-sm leading-relaxed">
        We configure secure HTTP-only cookies to verify session details and support token rotations. In compliance with data regulations, we present a Cookie Banner permitting users to opt out of non-essential tracking before loading analytics triggers.
      </p>

      <h2 className="font-bold text-lg text-slate-900 dark:text-white mt-8">4. Data Retention</h2>
      <p className="text-sm leading-relaxed">
        User profile records are stored securely until a deletion request is initiated. Temporary download buffers and cached images are automatically pruned by background systems to prevent storage leaks.
      </p>
    </div>
  );
};
