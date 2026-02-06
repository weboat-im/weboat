
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, Loader2 } from 'lucide-react';
import { RESERVATION_LOGS } from '../constants.tsx';

export const FinalCTA: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % RESERVATION_LOGS.length);
    }, 3000);
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
    <section id="contact" className="w-full py-32 bg-black text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-lime-400/10 via-transparent to-transparent opacity-50 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-block px-6 py-2 border border-lime-400/30 rounded-full text-lime-400 text-sm font-black mb-10 tracking-[0.2em] bg-lime-400/5"
        >
          CONTACT US
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter"
        >
          선거 캠프 세팅,<br />
          <span className="text-lime-400">오늘 바로 시작하세요.</span>
        </h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-xl md:text-2xl mb-16 max-w-2xl leading-relaxed"
        >
          이미 수많은 후보들이 위보트의 화력을 선택했습니다.<br />
          후보님의 지역구, 지금 바로 선점하세요.
        </motion.p>

        {isSuccess ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full bg-white/5 backdrop-blur-xl border border-lime-400/50 p-12 rounded-[3rem] flex flex-col items-center justify-center text-center gap-6 mb-12"
          >
            <div className="w-24 h-24 bg-lime-400 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(212,255,0,0.4)]">
              <Check className="w-12 h-12 text-black stroke-[4]" />
            </div>
            <div className="space-y-3">
              <h3 className="text-3xl font-bold text-white">신청이 접수되었습니다!</h3>
              <p className="text-gray-400 text-xl">
                24시간 이내에 담당 팀장이<br /> 직접 연락드리겠습니다.
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            onSubmit={handleSubmit}
            className="w-full bg-white/5 backdrop-blur-md border border-white/10 p-3 rounded-3xl md:rounded-full flex flex-col md:flex-row gap-3 mb-12 shadow-2xl"
          >
              <input 
                type="text" 
                name="name"
                required
                placeholder="성함 / 직함" 
                disabled={isSubmitting}
                className="bg-transparent text-white px-8 py-5 outline-none w-full md:w-1/4 placeholder-gray-600 text-center md:text-left border-b md:border-b-0 md:border-r border-white/10 focus:placeholder-white transition-all"
              />
               <input 
                type="text" 
                name="region"
                required
                placeholder="출마 지역구" 
                disabled={isSubmitting}
                className="bg-transparent text-white px-8 py-5 outline-none w-full md:w-1/3 placeholder-gray-600 text-center md:text-left border-b md:border-b-0 md:border-r border-white/10 focus:placeholder-white transition-all"
              />
               <input 
                type="text" 
                name="contact"
                required
                placeholder="연락처" 
                disabled={isSubmitting}
                className="bg-transparent text-white px-8 py-5 outline-none w-full md:w-1/3 placeholder-gray-600 text-center md:text-left focus:placeholder-white transition-all"
              />
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-lime-400 hover:bg-white text-black font-black px-12 py-5 rounded-2xl md:rounded-full whitespace-nowrap transition-all flex items-center justify-center gap-3 disabled:opacity-50 min-w-[160px] text-lg active:scale-95 shadow-lg shadow-lime-400/20"
              >
                {isSubmitting ? (
                  <Loader2 className="w-6 h-6 animate-spin" />
                ) : (
                  <>
                    확인 <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
          </motion.form>
        )}

        <div className="w-full max-w-xl mt-4 flex flex-col items-center">
          <div className="flex items-center gap-3 mb-4">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <span className="text-sm text-gray-400 font-bold tracking-widest uppercase">Live Activity</span>
          </div>
          <div className="relative h-14 overflow-hidden w-full flex justify-center items-center bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 shadow-inner">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={currentIndex}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                className="absolute w-full text-center px-4"
              >
                <span className="text-lime-400 font-bold text-lg md:text-xl italic">
                  "{RESERVATION_LOGS[currentIndex]}"
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
          <p className="text-sm text-gray-600 mt-6 font-medium">
            ※ 이미 당신의 경쟁 후보자가 이 페이지를 검토하고 있을 수 있습니다.
          </p>
        </div>

      </div>
    </section>
  );
};
