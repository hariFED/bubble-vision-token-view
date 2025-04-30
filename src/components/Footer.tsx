
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 px-6 sm:px-8 md:px-12 lg:px-16 bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-bubble-800 to-bubble-400 flex items-center justify-center">
            <img src="/logo.png" alt="Bubblemaps Logo" className="rounded-full" />
          </div>
          <span className="font-medium text-gray-700">Bubblemaps Token Analyzer</span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm text-gray-500 items-center">
          <a href="https://bubblemaps.io" target="_blank" rel="noopener noreferrer" className="hover:text-bubble-600 transition-colors">
            Visit Bubblemaps
          </a>
          <a href="https://t.me/bubblemaps_only_Bot" target="_blank" rel="noopener noreferrer" className="hover:text-bubble-600 transition-colors">
            Telegram Bot
          </a>
          <a href="mailto:bubblemapsonlybot@gmail.com" className="hover:text-bubble-600 transition-colors">
            Contact Support
          </a>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Bubblemaps. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
