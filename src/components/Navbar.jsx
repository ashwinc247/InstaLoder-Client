import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext.jsx';
import { Sun, Moon, Menu, X, Download } from 'lucide-react';

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Download', path: '/download' },
    { name: 'FAQ', path: '/faq' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full transition-all duration-300 glass border-b border-slate-200/20 dark:border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-9 w-9 rounded-xl btn-gradient flex items-center justify-center text-white font-bold shadow-soft">
                <Download className="h-5 w-5" />
              </div>
              <span className="font-['Outfit'] font-extrabold text-xl tracking-tight text-slate-900 dark:text-white">
                INSTA<span className="text-gradient">LOADER</span>
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-violet-600 dark:text-violet-400'
                    : 'text-slate-600 hover:text-violet-600 dark:text-slate-300 dark:hover:text-violet-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <Link
              to="/download"
              className="px-4 py-2 text-sm font-medium text-white btn-gradient rounded-button hover:opacity-90 transition-opacity"
            >
              Start Downloader
            </Link>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass border-b border-slate-200/20 dark:border-slate-800/50 px-4 pt-2 pb-4 space-y-1 animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-xl text-base font-medium ${
                isActive(link.path)
                  ? 'text-violet-600 dark:text-violet-400 bg-violet-50/10'
                  : 'text-slate-600 hover:text-violet-600 dark:text-slate-300 dark:hover:text-violet-400 hover:bg-slate-50/10'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 pb-2 border-t border-slate-200/20 dark:border-slate-800/50 flex flex-col space-y-2">
            <Link
              to="/download"
              onClick={() => setIsOpen(false)}
              className="text-center py-2 text-base font-medium text-white btn-gradient rounded-button"
            >
              Start Downloader
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
