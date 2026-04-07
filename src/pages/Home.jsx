import React from 'react';
import PlannerCard from '../components/PlannerCard';
import SectionHeader from '../components/SectionHeader';

export default function Home() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* Quick Summary Row */}
      <div className="grid grid-cols-4 gap-6">
        
        {/* Today's Focus */}
        <div className="col-span-3 bg-white/60 backdrop-blur-md rounded-[2rem] p-8 shadow-[0_10px_40px_rgba(133,14,53,0.05)] border border-white/50 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-theme-light/40 to-transparent rounded-bl-full transition-transform duration-700 group-hover:scale-110"></div>
          <h3 className="font-serif text-2xl font-bold text-burgundy mb-3 relative z-10">Today's Focus</h3>
          <p className="text-burgundy/70 text-lg leading-relaxed relative z-10 max-w-xl">
            "Remember that progress is not linear. Be gentle with yourself today as you navigate your routines."
          </p>
        </div>
        
        {/* Routine Tracker Stat */}
        <div className="col-span-1 bg-gradient-to-br from-theme-pink to-theme-dark rounded-[2rem] p-6 shadow-md flex flex-col items-center justify-center text-center text-white relative overflow-hidden group">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          <div className="text-4xl mb-2 relative z-10 group-hover:animate-bounce">✨</div>
          <h3 className="font-bold text-2xl mb-1 relative z-10">3 / 5</h3>
          <p className="text-xs text-white/80 font-medium relative z-10 uppercase tracking-widest">Routines</p>
        </div>

      </div>

      <div className="grid grid-cols-12 gap-8 mt-4">
        
        {/* Left Column: Schedule & Sugar Overview */}
        <div className="col-span-7 flex flex-col gap-8">
          
          <div className="bg-white/60 backdrop-blur-md rounded-[2rem] p-8 shadow-[0_10px_40px_rgba(133,14,53,0.05)] border border-white/50">
            <div className="flex items-center justify-between mb-6 border-b border-burgundy/10 pb-4">
              <h3 className="font-serif text-xl font-bold text-burgundy">Upcoming Schedule</h3>
              <button className="text-xs font-bold text-theme-pink hover:text-theme-dark transition-colors">View All</button>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-6 p-4 bg-white/50 rounded-2xl border border-white hover:shadow-sm transition-all group cursor-pointer">
                <div className="w-16 text-center shrink-0">
                  <span className="block text-burgundy font-bold">08:00</span>
                  <span className="text-[10px] text-burgundy/50 font-semibold uppercase">AM</span>
                </div>
                <div className="w-1 h-12 bg-theme-light rounded-full group-hover:bg-theme-pink transition-colors"></div>
                <div className="flex-1">
                  <h4 className="text-burgundy font-bold text-sm">Morning Skincare & Water</h4>
                  <p className="text-xs text-burgundy/50 font-medium mt-1">Daily Care Routine</p>
                </div>
              </div>

              <div className="flex items-center gap-6 p-4 bg-white/50 rounded-2xl border border-white hover:shadow-sm transition-all group cursor-pointer">
                <div className="w-16 text-center shrink-0">
                  <span className="block text-burgundy font-bold">12:30</span>
                  <span className="text-[10px] text-burgundy/50 font-semibold uppercase">PM</span>
                </div>
                <div className="w-1 h-12 bg-theme-pink rounded-full shadow-[0_0_10px_rgba(238,105,131,0.4)]"></div>
                <div className="flex-1">
                  <h4 className="text-burgundy font-bold text-sm">Check Sugar Levels</h4>
                  <p className="text-xs text-burgundy/50 font-medium mt-1">Pre-Lunch Reading</p>
                </div>
                <button className="px-5 py-2 bg-theme-dark text-white text-xs font-bold rounded-xl shadow-sm hover:scale-105 transition-transform">Log Now</button>
              </div>
            </div>
          </div>
          
        </div>

        {/* Right Column: Mini Widgets */}
        <div className="col-span-5 flex flex-col gap-6">
          
          {/* Sugar Quick Stat */}
          <div className="bg-white/60 backdrop-blur-md rounded-[2rem] p-6 shadow-[0_10px_40px_rgba(133,14,53,0.05)] border border-white/50 flex items-center justify-between group">
            <div>
              <p className="text-xs text-burgundy/60 font-semibold uppercase tracking-wider mb-1">Latest Sugar Reading</p>
              <h4 className="font-bold text-2xl text-burgundy flex items-end gap-2">
                105 <span className="text-sm text-burgundy/50 font-medium pb-1">mg/dL</span>
              </h4>
              <p className="text-[10px] text-green-600 font-bold mt-1 bg-green-100 w-max px-2 py-0.5 rounded-md">Excellent</p>
            </div>
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-theme-light to-white flex items-center justify-center shadow-inner group-hover:rotate-12 transition-transform">
              <span className="text-2xl">🩸</span>
            </div>
          </div>

          {/* Quick Journal Prompt */}
          <div className="bg-white/60 backdrop-blur-md rounded-[2rem] p-6 shadow-[0_10px_40px_rgba(133,14,53,0.05)] border border-white/50 relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-theme-pink/10 rounded-full blur-xl"></div>
            <h3 className="font-serif text-lg font-bold text-burgundy border-b border-burgundy/10 pb-3 mb-4">Evening Reflection</h3>
            <p className="text-sm text-burgundy/70 italic font-medium leading-relaxed mb-6">
              "What felt heavy today that you can put down right now?"
            </p>
            <button className="w-full py-3 bg-white border border-theme-pink/30 text-theme-dark rounded-xl text-xs font-bold hover:bg-theme-pink hover:text-white transition-all shadow-sm">Write an entry</button>
          </div>

        </div>
      </div>
    </div>
  );
}
