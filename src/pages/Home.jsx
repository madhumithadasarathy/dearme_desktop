import React from 'react';
import PlannerCard from '../components/PlannerCard';
import SectionHeader from '../components/SectionHeader';

export default function Home() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* Top Header Links Mockup */}
      <div className="flex gap-8 border-b border-burgundy/10 pb-4 mb-8">
        <a href="#" className="font-semibold text-burgundy border-b-2 border-dusty-rose pb-4 -mb-[18px]">Overview</a>
        <a href="#" className="font-semibold text-burgundy/50 hover:text-burgundy transition-colors">Goal Details</a>
        <a href="#" className="font-semibold text-burgundy/50 hover:text-burgundy transition-colors">Health Statistic</a>
        <a href="#" className="font-semibold text-burgundy/50 hover:text-burgundy transition-colors">My Plans</a>
      </div>

      <div className="grid grid-cols-12 gap-6">
        
        {/* Main Bar Chart Card */}
        <div className="col-span-5 bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-white relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-dusty-rose/10 rounded-bl-full transition-transform group-hover:scale-110"></div>
          <h3 className="font-semibold text-xl text-burgundy">Weekly Stats</h3>
          <p className="text-xs text-burgundy/50 mt-1 mb-8">Balance of your self-care routines</p>
          
          <div className="flex items-end justify-between h-40 gap-3 px-2">
            {[40, 85, 30, 60, 50].map((h, i) => (
              <div key={i} className="flex flex-col items-center gap-3 flex-1 pb-1">
                <div className="w-full bg-cream rounded-xl relative overflow-hidden group-hover:shadow-sm" style={{height: '100px'}}>
                  <div className={`absolute bottom-0 w-full rounded-xl transition-all duration-1000 ${i === 1 ? 'bg-gradient-to-t from-dusty-rose to-theme-pink' : 'bg-blush-pink'}`} style={{height: `${h}%`}}></div>
                </div>
                <span className="text-[10px] font-semibold text-burgundy/60">{'MTWTF'[i]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Middle & Right Cards grouping */}
        <div className="col-span-7 grid grid-cols-2 gap-6">
          
          {/* Tasks Chart */}
          <div className="col-span-1 bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-white">
            <h3 className="font-semibold text-base text-burgundy">Tasks Chart</h3>
            <p className="text-[10px] text-burgundy/50 mt-1 mb-6">73% of your daily task has been done</p>
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-theme-dark"></div><span className="text-xs font-semibold text-burgundy/70">Done</span></div>
                <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-dusty-rose"></div><span className="text-xs font-semibold text-burgundy/70">In progress</span></div>
              </div>
              <div className="w-16 h-16 rounded-full border-4 border-dusty-rose border-l-theme-dark relative flex items-center justify-center shadow-sm">
                <span className="font-bold text-sm text-burgundy">73%</span>
              </div>
            </div>
          </div>

          {/* Solid Pink Card */}
          <div className="col-span-1 bg-gradient-to-br from-theme-pink to-dusty-rose rounded-3xl p-6 shadow-md shadow-dusty-rose/30 flex flex-col justify-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')] opacity-30"></div>
            <div className="relative z-10 text-center">
              <div className="w-10 h-10 mx-auto bg-white/20 rounded-xl mb-3 flex items-center justify-center backdrop-blur-md">✨</div>
              <h3 className="font-bold text-lg leading-tight mb-1">Wellness<br/>Report</h3>
              <p className="text-xs text-white/80 font-medium">we tracked 17 metrics</p>
            </div>
          </div>

          {/* App Guidelines / Talk Note */}
          <div className="col-span-2 bg-white/70 backdrop-blur-sm rounded-3xl p-5 shadow-sm border border-white flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-Theme-light flex items-center justify-center text-xl bg-blush-pink shadow-sm">💧</div>
              <div>
                <h4 className="font-bold text-burgundy text-sm">Drink More Water!</h4>
                <p className="text-xs text-burgundy/50 font-medium mt-0.5">Stay hydrated, you only drank 2 cups.</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-gradient-to-r from-dusty-rose to-theme-pink text-white text-xs font-bold rounded-xl shadow-sm hover:scale-105 transition-transform">Log Water</button>
          </div>
          
        </div>

      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-2 gap-6 mt-6">
        
        {/* Recent Activities */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-white">
          <h3 className="font-semibold text-lg text-burgundy mb-6">Recent Activities <span className="text-xs text-burgundy/40 font-normal ml-2">3 Logs</span></h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 rounded-2xl hover:bg-white transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-soft-green flex items-center justify-center text-sm font-bold shadow-sm">K</div>
                <div>
                  <h4 className="font-bold text-sm text-burgundy">Morning Routine</h4>
                  <p className="text-xs text-burgundy/50 font-medium">I completed my tasks on time ✨</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 rounded-2xl bg-white shadow-sm border border-white/50 relative overflow-hidden group">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-dusty-rose rounded-r-full"></div>
              <div className="flex items-center gap-4 pl-2">
                <div className="w-10 h-10 rounded-full bg-soft-yellow flex items-center justify-center text-sm font-bold shadow-sm">G</div>
                <div>
                  <h4 className="font-bold text-sm text-burgundy">Sugar Checked</h4>
                  <p className="text-xs text-burgundy/50 font-medium">My sugar was slightly elevated @Afternoon</p>
                </div>
              </div>
              <button className="px-4 py-1.5 border-2 border-dusty-rose text-dusty-rose text-xs font-bold rounded-xl hover:bg-dusty-rose hover:text-white transition-colors">Review</button>
            </div>
          </div>
        </div>

        {/* Tasks Comparison */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-sm border border-white flex flex-col relative overflow-hidden group">
            <h3 className="font-semibold text-lg text-burgundy mb-2">Health Comparison</h3>
            <div className="flex-1 w-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-center opacity-30 absolute inset-0 mix-blend-overlay"></div>
            <div className="relative z-10 flex-1 flex items-end">
              {/* Fake Line Chart mimicking the dashboard */}
              <svg className="w-full h-32 drop-shadow-md" viewBox="0 0 400 100" preserveAspectRatio="none">
                <path d="M0,80 Q50,70 100,50 T200,90 T300,40 T400,60" fill="none" stroke="#ee6983" strokeWidth="4" className="path-glow"/>
                <path d="M0,90 Q80,95 150,60 T250,70 T350,20 T400,30" fill="none" stroke="#850e35" strokeWidth="2" opacity="0.6"/>
                <circle cx="100" cy="50" r="5" fill="#fff" stroke="#ee6983" strokeWidth="2"/>
                <circle cx="300" cy="40" r="5" fill="#fff" stroke="#ee6983" strokeWidth="2"/>
              </svg>
            </div>
        </div>

      </div>

    </div>
  );
}
