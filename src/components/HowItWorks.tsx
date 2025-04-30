
import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Send a Contract Address",
      description: "Simply send any token contract address to our Telegram bot."
    },
    {
      number: 2,
      title: "Bot Fetches Token Data",
      description: "The bot automatically retrieves token information, holder statistics, and more."
    },
    {
      number: 3,
      title: "View Bubble Map Analysis",
      description: "Instantly receive a visual Bubble Map showing top holders and decentralization metrics."
    }
  ];

  return (
    <section className="py-16 md:py-24 px-6 sm:px-8 md:px-12 lg:px-16 bg-bubble-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-16 text-gray-800">How It Works</h2>
        
        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div key={step.number} className="relative animate-fade-up" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
              <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 h-full">
                <div className="h-12 w-12 bg-bubble-100 text-bubble-700 flex items-center justify-center rounded-full font-bold text-xl mb-6">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute right-[-5%] top-[30%] transform translate-x-1/2 w-[10%] h-[2px] bg-bubble-200">
                  <div className="absolute right-0 top-1/2 transform translate-y-[-50%] translate-x-1/2 h-3 w-3 bg-bubble-300 rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
