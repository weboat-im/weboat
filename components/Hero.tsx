
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none select-none overflow-hidden text-[20vw] font-black leading-none break-all">
        WEBOAT WEBOAT WEBOAT WEBOAT WEBOAT
      </div>
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        <div className="lg:col-span-10 flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-black tracking-tighter leading-[0.85] text-black">
              당신의 승리를<br />
              설계하는 압도적 화력<br />
              <span className="relative inline-block mt-4">
                <span className="relative z-10 text-black">위보트</span>
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
                  className="absolute bottom-2 left-0 h-6 md:h-12 bg-lime-400 -z-10"
                ></motion.span>
              </span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-700 max-w-3xl leading-relaxed font-medium break-keep"
          >
            숏폼, SNS, 메시지 전략부터 후보자 브랜딩까지.<br />
            수많은 선거를 승리로 이끈 베테랑들이 후보님의 캠프에 '전담 홍보팀'으로 합류합니다.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-5 mt-4"
          >
            <a href="#contact" className="px-10 py-5 bg-black text-white rounded-full text-xl font-bold hover:bg-lime-400 hover:text-black transition-all duration-300 flex items-center justify-center gap-3 group shadow-xl">
              무료 상담 및 슬롯 확인
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </a>
            <a 
              href="https://tally.so/r/Gxpyl2" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-10 py-5 border-2 border-black text-black rounded-full text-xl font-bold hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center"
            >
              홍보 실무 가이드 받기
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
