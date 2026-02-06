import React from 'react';

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="w-full py-24 md:py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-snug md:leading-tight tracking-tight break-keep max-w-full text-white">
          <span className="block mb-8 md:mb-16">
            선거의 성공과 실패를<br />
            직접 겪은 경험으로 위보트를 시작합니다.
          </span>
          <span className="block mb-8 md:mb-16">
            우리는 변화를 꿈꾸며,<br />
            도전하는 정치인을 위한 디자인을 합니다.
          </span>
          <span className="block">
            화려한 수사보다 묵묵한 실행력을,<br />
            거창한 선언보다 정교한 기획을 지향합니다.
          </span>
        </h2>

      </div>
    </section>
  );
};