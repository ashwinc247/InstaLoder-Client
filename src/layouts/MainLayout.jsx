import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar.jsx';
import { Footer } from '../components/Footer.jsx';
import { CookieConsent } from '../components/CookieConsent.jsx';

export const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-darkbg text-slate-900 dark:text-white transition-colors duration-300">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};
