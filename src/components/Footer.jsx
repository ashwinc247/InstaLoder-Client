import React from 'react';
import { Link } from 'react-router-dom';
import { Download, Github } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg btn-gradient flex items-center justify-center text-white font-bold">
                <Download className="h-4 w-4" />
              </div>
              <span className="font-['Outfit'] font-extrabold text-lg tracking-tight text-white">
                INSTA<span className="text-gradient">LOADER</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Premium workspace to download, save, and organize media you own or have permission to access. Fast, secure, and fully optimized.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/download" className="hover:text-white transition-colors">Media Downloader</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors">Frequently Asked Questions</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Legal Policy</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link to="/disclaimer" className="hover:text-white transition-colors">AdSense & Platform Disclaimer</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-white mb-4">Developer Portal</h3>
            <p className="text-sm">
              Explore our project source files and follow modern full stack development standards.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="GitHub Repository"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-xs text-center space-y-4">
          <p>
            Disclaimer: Insta Loader is not affiliated with, authorized, or endorsed by Instagram, Meta Platforms, Inc., or any of their parent or subsidiary companies. We respect copyright laws. Users are solely responsible for ensuring they possess legal rights to download or manage any media links processed on this system.
          </p>
          <p>
            &copy; {new Date().getFullYear()} Insta Loader. Built for premium media organization. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
