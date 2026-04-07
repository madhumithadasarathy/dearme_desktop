import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { useData } from '../contexts/DataContext';

export default function Wellness() {
  const { period, rewards, completions } = useData();

  const handleLogPeriod = () => {
    // In a full implementation, this opens a modal. For now it's just a UI button.
    alert("This will update the period start date in DataContext.");
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <SectionHeader 
        title="Wellness Tracker" 
        subtitle="Understanding your body and celebrating your streaks."
      />
      
      <div className="grid grid-cols-2 gap-6">
        {/* Cycle Tracker */}
        <div className="bg-white/60 backdrop-blur-md rounded-[2rem] p-8 shadow-[0_10px_40px_rgba(133,14,53,0.05)] border border-white/50 text-center flex flex-col items-center justify-center relative overflow-hidden group">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-theme-pink/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
          <h3 className="font-serif text-lg font-bold text-burgundy mb-6 relative z-10">Cycle Phase</h3>
          <div className="relative w-32 h-32 flex items-center justify-center mb-6 z-10">
            <svg className="w-full h-full transform -rotate-90">
              <circle cx="64" cy="64" r="60" fill="transparent" stroke="#fff5e4" strokeWidth="8"/>
              <circle cx="64" cy="64" r="60" fill="transparent" stroke="#ee6983" strokeWidth="8" strokeDasharray="377" strokeDashoffset="280" className="transition-all duration-1000 ease-out"/>
            </svg>
            <div className="absolute text-center">
              <span className="block text-3xl font-bold text-burgundy">Day</span>
              <span className="block text-2xl font-bold text-theme-pink">14</span>
            </div>
          </div>
          <p className="text-sm font-medium text-burgundy/60 mb-6 relative z-10">Estimated Ovulation Phase</p>
          <button onClick={handleLogPeriod} className="px-6 py-2 bg-white text-theme-dark border border-theme-pink/30 font-bold rounded-xl shadow-sm hover:bg-theme-pink hover:text-white transition-colors relative z-10">
            Log Start Date
          </button>
        </div>

        {/* Rewards & Streaks */}
        <div className="bg-gradient-to-br from-theme-dark to-theme-pink rounded-[2rem] p-8 shadow-md text-white flex flex-col justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          
          <h3 className="font-serif text-xl font-bold mb-8 text-white border-b border-white/20 pb-4 relative z-10">Trophy Room 🏆</h3>
          
          <div className="space-y-6 relative z-10">
            <div className="flex justify-between items-center">
              <span className="font-medium text-white/80 uppercase text-xs tracking-widest">Total Points</span>
              <span className="text-3xl font-bold text-theme-cream flex items-center gap-2">
                {rewards.totalPoints} <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded text-white mb-1">pts</span>
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="font-medium text-white/80 uppercase text-xs tracking-widest">Current Streak</span>
              <span className="text-2xl font-bold text-theme-cream flex items-center gap-2">
                {rewards.currentStreak} 🔥
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="font-medium text-white/80 uppercase text-xs tracking-widest">Longest Streak</span>
              <span className="text-lg font-bold text-white/90">
                {rewards.longestStreak} days
              </span>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
