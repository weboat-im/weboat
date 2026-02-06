import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, Loader2 } from 'lucide-react';
import { RESERVATION_LOGS } from '../constants';

export const FinalCTA: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Vertical Rolling Animation Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % RESERVATION_LOGS.length);
    }, 2500); // Change text every 2.5 seconds
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formspree.io/f/xkovwyar", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setIsSuccess(true);
        // Optional: Reset form or handle other logic
      } else {
        alert("제출 중 문제가 발생했습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      alert("네트워크 오류가 발생했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full py-24 bg-black text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-lime-400 rounded-full blur-[120px] opacity-20 pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-3xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <div className="inline-block px-4 py-1 border border-lime-400 rounded-full text-lime-400 text-sm font-bold mb-6 tracking-wide">
          CONTACT US
        </div>
        <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
          선거 캠프 세팅,<br />
          <span className="text-lime-400">오늘 바로 끝내세요.</span>
        </h2>
        <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-xl">
          기획부터 실행까지 하나의 홍보팀이 책임집니다. <br className="hidden md:block"/>
          한 명을 채용하는 비용으로 베테랑 전문가 팀을 운용해보세요.
        </p>

        {/* Conditional Rendering: Form or Success Message */}
        {isSuccess ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full bg-white/10 backdrop-blur-md border border-lime-400/50 p-10 rounded-3xl flex flex-col items-center justify-center text-center gap-6 mb-8 max-w-2xl"
          >
            <div className="w-20 h-20 bg-lime-400 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(212,255,0,0.3)]">
              <Check className="w-10 h-10 text-black stroke-[3]" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl md:text-3xl font-bold text-white">신청해주셔서 감사합니다!</h3>
              <p className="text-gray-300 text-lg">
                담당자가 남겨주신 연락처로<br className="md:hidden" /> 빠르게 연락드리겠습니다.
              </p>
            </div>
          </motion.div>
        ) : (
          <form 
            onSubmit={handleSubmit}
            className="w-full bg-white/5 backdrop-blur-sm border border-white/10 p-2 rounded-2xl md:rounded-full flex flex-col md:flex-row gap-2 mb-8"
          >
              <input 
                type="text" 
                name="name"
                required
                placeholder="성함" 
                disabled={isSubmitting}
                className="bg-transparent text-white px-6 py-4 outline-none w-full md:w-1/4 placeholder-gray-500 text-center md:text-left border-b md:border-b-0 md:border-r border-white/10 disabled:opacity-50"
              />
               <input 
                type="text" 
                name="region"
                required
                placeholder="출마 예정 지역" 
                disabled={isSubmitting}
                className="bg-transparent text-white px-6 py-4 outline-none w-full md:w-1/3 placeholder-gray-500 text-center md:text-left border-b md:border-b-0 md:border-r border-white/10 disabled:opacity-50"
              />
               <input 
                type="text" 
                name="contact"
                required
                placeholder="연락처" 
                disabled={isSubmitting}
                className="bg-transparent text-white px-6 py-4 outline-none w-full md:w-1/3 placeholder-gray-500 text-center md:text-left disabled:opacity-50"
              />
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-lime-400 hover:bg-lime-300 text-black font-bold px-8 py-4 rounded-xl md:rounded-full whitespace-nowrap transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed min-w-[120px]"
              >
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    신청 <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
          </form>
        )}

        {/* Vertical Rolling Animation (Ticker) */}
        <div className="w-full max-w-lg mt-8 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="text-sm text-gray-500 font-medium">실시간 현황</span>
          </div>
          <div className="relative h-8 overflow-hidden w-full flex justify-center items-center bg-gray-900/50 rounded-lg border border-gray-800">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={currentIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute w-full text-center"
              >
                <span className="text-lime-400 font-medium text-sm md:text-base">
                  {RESERVATION_LOGS[currentIndex]}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
          <p className="text-xs text-gray-600 mt-3">
            이미 당신의 경쟁자가 이 페이지를 보고 있을 수 있습니다.
          </p>
        </div>

      </div>
    </section>
  );
};