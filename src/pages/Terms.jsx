import React from 'react';

export const Terms = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-slate-700 dark:text-slate-350 space-y-6">
      <h1 className="font-['Outfit'] font-extrabold text-3xl sm:text-4xl text-gradient">Terms of Service</h1>
      <p className="text-xs text-slate-500">Last Updated: July 28, 2026</p>
      
      <p className="text-sm leading-relaxed">
        Please read these Terms of Service carefully before utilizing our media Downloader. By accessing the service, you confirm agreement with these terms.
      </p>

      <h2 className="font-bold text-lg text-slate-900 dark:text-white mt-8">1. Authorized Content Only</h2>
      <p className="text-sm leading-relaxed">
        The Insta Loader platform is strictly designed to organize, process, and download Instagram media that you own or possess legal download rights to archive. Any use of this platform to fetch unauthorized copyright materials is strictly prohibited.
      </p>

      <h2 className="font-bold text-lg text-slate-900 dark:text-white mt-8">2. Platform Access & Abuse</h2>
      <p className="text-sm leading-relaxed">
        Users must not trigger scraping routines, execute DDoS attacks, or exploit API structures. We apply rate limits to maintain system health, and we reserve the right to deactivate accounts violating these guidelines.
      </p>

      <h2 className="font-bold text-lg text-slate-900 dark:text-white mt-8">3. Limitation of Liability</h2>
      <p className="text-sm leading-relaxed">
        Insta Loader does not host or store public media databases. We are not responsible for the content retrieved, nor are we liable for any copyright disputes arising between you and third-party networks.
      </p>
    </div>
  );
};
