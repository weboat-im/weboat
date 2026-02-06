import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div className="lg:col-span-8 flex flex-col gap-6 z-10">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-black">
            지금껏 없었던<br />
            당신만의 홍보팀<br />
            <span className="relative inline-block mt-2">
              <span className="relative z-10">위보트</span>
              <span className="absolute bottom-2 left-0 w-full h-4 md:h-8 bg-lime-400 -z-10"></span>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed font-medium mt-4 break-keep">
            숏폼, 카드뉴스, SNS 운영부터 메시지 작성, 캠페인 기획, 후보자 브랜딩까지<br />
            선거 승리에 필요한 모든 홍보 실무를 하나의 전문 팀이 전담합니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a href="#contact" className="px-8 py-4 bg-black text-white rounded-full text-lg font-bold hover:bg-lime-400 hover:text-black transition-all duration-300 flex items-center justify-center gap-2 group">
              무료 상담 신청하기
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="https://tally.so/r/Gxpyl2" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-black text-black rounded-full text-lg font-bold hover:bg-gray-50 transition-all duration-300 flex items-center justify-center"
            >
              홍보 실무 무료 키트 받기
            </a>
          </div>
        </div>

        {/* Logo removed as per request */}
      </div>
    </section>
  );
};