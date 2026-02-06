import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQ_ITEMS } from '../constants';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-black mb-12 tracking-tighter">FAQ</h2>
        
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <div 
              key={index} 
              className="border-b border-gray-200 pb-4"
            >
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between py-4 text-left group"
              >
                <span className="text-lg md:text-xl font-bold group-hover:text-lime-600 transition-colors">
                  {item.question}
                </span>
                <span className="ml-4">
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-lime-600" />
                  ) : (
                    <Plus className="w-6 h-6 text-gray-400 group-hover:text-black" />
                  )}
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};