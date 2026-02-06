import React from 'react';
import { FEATURES } from '../constants';

export const Features: React.FC = () => {
  return (
    <section className="w-full py-24 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {FEATURES.map((feature, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mb-2">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};