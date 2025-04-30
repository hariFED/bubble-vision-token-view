
import React from 'react';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="py-20 px-6 sm:px-8 md:px-12 lg:px-16 bg-gradient-to-br from-bubble-700 to-bubble-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Analyze Tokens?</h2>
        <p className="mb-10 text-bubble-100 max-w-2xl mx-auto">
          Start using the Bubblemaps Token Analyzer Bot on Telegram today and get instant access to powerful token analytics and visualization tools.
        </p>
        <Button
          asChild
          className="bg-white text-bubble-700 hover:bg-bubble-50 py-6 px-8 rounded-xl font-medium text-lg shadow-lg animate-fade-up"
        >
          <a href="https://t.me/bubblemaps_only_Bot" target="_blank" rel="noopener noreferrer">
            Start Analyzing Tokens
          </a>
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
