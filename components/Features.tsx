
import React from 'react';
import { motion } from 'framer-motion';
import { FEATURES } from '../constants.tsx';

export const Features: React.FC = () => {
  return (
    <section className="w-full py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {FEATURES.map((feature, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-2">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold tracking-tight">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed text-lg break-keep">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
