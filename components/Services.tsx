import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { SERVICE_ITEMS } from '../constants';

export const Services: React.FC = () => {
  return (
    <section id="services" className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter leading-tight break-keep">
            전략적 홍보 파트너,<br className="md:hidden" /> 캠프에 맞게 선택하세요
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SERVICE_ITEMS.map((item, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col p-8 rounded-2xl transition-all duration-300 group
                ${item.isHighlight 
                  ? 'bg-black text-white hover:scale-105 hover:shadow-2xl hover:shadow-lime-400/20 ring-4 ring-black' 
                  : 'bg-white border border-gray-200 text-black hover:border-black hover:shadow-xl'
                }
              `}
            >
              <div className="flex-1">
                <h3 className={`text-2xl font-bold mb-4 whitespace-pre-line ${item.isHighlight ? 'text-lime-400' : 'text-black'}`}>
                  {item.title}
                </h3>
                <p className={`text-sm mb-8 leading-relaxed ${item.isHighlight ? 'text-gray-300' : 'text-gray-600'}`}>
                  {item.description}
                </p>

                {item.features.length > 0 && (
                  <ul className="space-y-3 mb-8">
                    {item.features.map((feat, fIndex) => {
                      const [mainText, ...subTexts] = feat.split('\n');
                      
                      return (
                        <li key={fIndex} className="flex items-start gap-3 text-sm font-medium">
                          <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${item.isHighlight ? 'text-lime-400' : 'text-black'}`} />
                          <div className="flex flex-col gap-1">
                            <span className={item.isHighlight ? 'text-white' : 'text-black'}>
                              {mainText}
                            </span>
                            {subTexts.length > 0 && (
                              <div className={`flex flex-col gap-1 ${item.isHighlight ? 'text-gray-400' : 'text-gray-500'}`}>
                                {subTexts.map((sub, sIndex) => (
                                  <span key={sIndex} className="text-xs font-normal">
                                    {sub}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>

              {item.isHighlight && (
                <div className="mt-6 pt-6 border-t border-gray-800">
                  <a href="#contact" className="flex items-center justify-between w-full p-4 bg-lime-400 rounded-xl text-black font-bold hover:bg-white transition-colors">
                    1:1 상담 신청하기
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              )}
              
              {!item.isHighlight && (
                 <div className="w-full h-1 bg-gray-100 mt-6 group-hover:bg-black transition-colors duration-500"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};