
import React from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="py-4 px-6 sm:px-8 md:px-12 lg:px-16 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-bubble-800 to-bubble-400 flex items-center justify-center">
          <span className="text-white font-bold text-sm">B</span>
        </div>
        <span className="font-semibold text-lg md:text-xl text-gray-800">BubbleMaps</span>
      </div>
      <Button 
        asChild
        variant="outline" 
        className="hidden sm:flex border-bubble-600 text-bubble-600 hover:bg-bubble-50 hover:text-bubble-700"
      >
        <a href="https://t.me/BubblemapsBot" target="_blank" rel="noopener noreferrer">
          Open in Telegram
        </a>
      </Button>
    </header>
  );
};

export default Header;
