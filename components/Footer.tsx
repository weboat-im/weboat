
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-500 py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-end gap-10">
        <div className="flex flex-col gap-4 items-start w-full md:w-auto">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-white font-['Pretendard'] font-black text-2xl tracking-tighter pb-1 transform translate-y-0.5">weboat</span>
          </div>
          <div className="text-sm leading-loose opacity-60 font-medium">
            <p className="break-keep">사업자 등록번호 : 217-77-00686 | 대표 : 백영재</p>
            <p className="break-keep">주소 : 서울특별시 영등포구 영등포로67길 6-15, 103호</p>
            <p className="break-keep">이메일 : weboat.im@gmail.com</p>
          </div>
        </div>
        
        <div className="w-full md:w-auto text-left md:text-right">
          <p className="text-sm font-bold tracking-tight text-white/40">
            weboat © 2026
          </p>
        </div>
      </div>
    </footer>
  );
};
