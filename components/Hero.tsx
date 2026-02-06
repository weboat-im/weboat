
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center pt-32 pb-32 md:pb-48 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start text-left max-w-5xl"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1] text-black break-keep mb-10">
            지금껏 없었던<br />
            당신만의 홍보팀<br />
            <span className="relative inline-block mt-2">
              <span className="relative z-10 text-black">위보트</span>
              <motion.span 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
                className="absolute bottom-2 md:bottom-3 left-0 h-4 md:h-12 bg-lime-400 -z-10"
              ></motion.span>
            </span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed font-medium break-keep mb-12"
          >
            숏폼, 카드뉴스, SNS 운영부터<br />
            메시지 작성, 캠페인 기획, 후보자 브랜딩까지<br />
            선거 승리에 필요한 모든 홍보 실무를<br />
            하나의 전문 팀이 전담합니다.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a 
              href="http://pf.kakao.com/_xfQeRX/chat" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-black text-white rounded-full text-lg font-bold hover:bg-lime-400 hover:text-black transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg"
            >
              무료 상담 신청하기
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="https://tally.so/r/Gxpyl2" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-black text-black rounded-full text-lg font-bold hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center"
            >
              홍보 실무 무료 키트 받기
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
