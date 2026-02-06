
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { SERVICE_ITEMS } from '../constants.tsx';

export const Services: React.FC = () => {
  return (
    <section id="services" className="w-full py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tighter leading-tight break-keep"
          >
            전략적 홍보 파트너,<br /> 
            <span className="text-gray-400">캠프에 맞게 선택하세요</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICE_ITEMS.map((item, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col p-10 rounded-[2.5rem] transition-all duration-500 group
                ${item.isHighlight 
                  ? 'bg-black text-white hover:shadow-[0_20px_50px_rgba(212,255,0,0.15)]' 
                  : 'bg-gray-50 border border-gray-100 text-black hover:border-black hover:bg-white'
                }
              `}
            >
              <div className="flex-1">
                <h3 className={`text-2xl font-bold mb-6 whitespace-pre-line leading-tight ${item.isHighlight ? 'text-lime-400' : 'text-black'}`}>
                  {item.title}
                </h3>
                <p className={`text-lg mb-10 leading-relaxed break-keep ${item.isHighlight ? 'text-gray-400' : 'text-gray-600'}`}>
                  {item.description}
                </p>

                {item.features.length > 0 && (
                  <ul className="space-y-4 mb-10">
                    {item.features.map((feat, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-4 text-base font-medium">
                        <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${item.isHighlight ? 'text-lime-400' : 'text-black'}`} />
                        <span className={item.isHighlight ? 'text-white' : 'text-black'}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {item.isHighlight && (
                <div className="mt-8">
                  <a 
                    href="http://pf.kakao.com/_xfQeRX/chat" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full p-5 bg-lime-400 rounded-2xl text-black font-bold text-lg hover:scale-[1.02] transition-transform"
                  >
                    실시간 상담 연결
                    <ArrowRight className="w-6 h-6" />
                  </a>
                </div>
              )}
              
              {!item.isHighlight && (
                 <div className="w-full h-1.5 bg-gray-200 mt-8 group-hover:bg-lime-400 transition-colors duration-500 rounded-full"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
