
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="py-16 md:py-28 px-6 sm:px-8 md:px-12 lg:px-16 max-w-6xl mx-auto text-center">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-800 animate-fade-in">
        Bubblemaps Token Analyzer Bot
      </h1>
      <p className="text-xl md:text-2xl text-bubble-600 font-medium mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
        Analyze tokens, view Bubble Maps, and more!
      </p>
      <p className="text-gray-600 max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
        Get real-time token information, visualize token holders, and review decentralization scores with ease. 
        Our Telegram bot provides instant analysis to help you make informed decisions.
      </p>
      <div className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
        <Button 
          asChild
          className="bg-bubble-600 hover:bg-bubble-700 text-white py-6 px-8 rounded-xl font-medium text-lg"
        >
          <a href="https://t.me/BubblemapsBot" target="_blank" rel="noopener noreferrer">
            Start Analyzing Tokens
          </a>
        </Button>
      </div>

      <div className="mt-16 md:mt-24 relative overflow-hidden rounded-xl border border-gray-200 shadow-lg animate-fade-up" style={{ animationDelay: "0.4s" }}>
        <div className="bg-gradient-to-r from-bubble-100/50 to-bubble-50/50 p-8 md:p-12 rounded-xl">
          <div className="bg-white rounded-lg shadow-md p-4 md:p-6 max-w-md mx-auto">
            <div className="flex items-start border-b border-gray-100 pb-4 mb-4">
              <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-bubble-800 to-bubble-400 flex items-center justify-center mr-4">
              <img src="/logo.png" alt="Bubblemaps Logo" className="rounded-full" />
              </div>
              <div className="text-left">
                <p className="font-medium text-gray-900">Bubblemaps only Bot</p>
                <p className="text-sm text-gray-500">Analyzing tokens for you</p>
              </div>
            </div>
            <div className="text-left mb-4">
              <p className="text-sm text-gray-700 mb-3">Send me a token address to analyze:</p>
              <p className="font-mono bg-gray-50 p-2 rounded text-xs text-gray-600">0x1f9840a85d5af5bf1d1762f925bdaddc4201f984</p>
            </div>
            <div className="text-left mt-4">
              <p className="text-sm text-bubble-600 font-medium">Fetching token data...</p>
              <p className="text-xs text-gray-500 mt-1">I'll show you holder distribution, decentralization score and more.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
