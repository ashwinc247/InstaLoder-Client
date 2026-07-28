import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout.jsx';

const PageLoader = () => (
  <div className="h-[60vh] w-full flex items-center justify-center text-slate-500 text-xs">
    <span>Loading components...</span>
  </div>
);

const Landing = lazy(() => import('../pages/Landing.jsx').then(m => ({ default: m.Landing })));
const FAQ = lazy(() => import('../pages/FAQ.jsx').then(m => ({ default: m.FAQ })));
const Privacy = lazy(() => import('../pages/Privacy.jsx').then(m => ({ default: m.Privacy })));
const Terms = lazy(() => import('../pages/Terms.jsx').then(m => ({ default: m.Terms })));
const Disclaimer = lazy(() => import('../pages/Disclaimer.jsx').then(m => ({ default: m.Disclaimer })));
const DownloadWorkspace = lazy(() => import('../pages/DownloadWorkspace.jsx').then(m => ({ default: m.DownloadWorkspace })));
const NotFound = lazy(() => import('../pages/NotFound.jsx').then(m => ({ default: m.NotFound })));

export const AppRoutes = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/download" element={<DownloadWorkspace />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
