import React from 'react';

export const Disclaimer = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-slate-700 dark:text-slate-350 space-y-6">
      <h1 className="font-['Outfit'] font-extrabold text-3xl sm:text-4xl text-gradient">Disclaimer</h1>
      <p className="text-xs text-slate-500">Last Updated: July 28, 2026</p>
      
      <p className="text-sm leading-relaxed">
        The information and tools provided by Insta Loader are subject to the following disclosures.
      </p>

      <h2 className="font-bold text-lg text-slate-900 dark:text-white mt-8">1. Platform Association Disclosure</h2>
      <p className="text-sm leading-relaxed">
        Insta Loader is an independent application. We are not associated, affiliated, authorized, endorsed by, or in any way officially connected with Instagram, Meta Platforms, Inc., or any of their partner networks. All official trademark assets belong to their respective owners.
      </p>

      <h2 className="font-bold text-lg text-slate-900 dark:text-white mt-8">2. Educational & Personal Use</h2>
      <p className="text-sm leading-relaxed">
        This application is designed for personal organization, backup archives, and educational research purposes. Users must ensure that any files downloaded comply with the terms of service of Instagram and local copyright regulations.
      </p>

      <h2 className="font-bold text-lg text-slate-900 dark:text-white mt-8">3. Google AdSense & Adsense Policies</h2>
      <p className="text-sm leading-relaxed">
        This platform runs advertisement placements. Ad slots are configured to load dynamic creatives based on user preference and consent. We do not support click spamming or content occlusion, adhering strictly to AdSense publisher rules.
      </p>
    </div>
  );
};
