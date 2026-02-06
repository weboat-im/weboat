import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-600 py-12 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col gap-2 items-center md:items-start">
          <div className="flex items-center gap-2">
            <span className="text-white font-['Pretendard'] font-black text-2xl tracking-tighter pb-1 transform translate-y-0.5">weboat</span>
          </div>
          <p className="text-sm">정치인 홍보 전담 에이전시</p>
        </div>
        <div className="text-sm text-center md:text-right">
          <p>© 2024 WeBoat. All rights reserved.</p>
          <p className="mt-1">Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};