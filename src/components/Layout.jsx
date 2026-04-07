import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Home, CheckSquare, Activity, BookHeart, HeartPulse } from 'lucide-react';

export default function Layout() {
  const navItems = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/routines', label: 'Routines', icon: CheckSquare },
    { to: '/sugar-log', label: 'Sugar Log', icon: Activity },
    { to: '/journal', label: 'Journal', icon: BookHeart },
    { to: '/wellness', label: 'Wellness', icon: HeartPulse },
  ];

  return (
    <div className="flex min-h-screen bg-transparent text-burgundy font-sans p-4 md:p-8 items-center justify-center">
      
      {/* Main Glass Dashboard Container */}
      <div className="flex w-full max-w-7xl h-[90vh] bg-white/60 backdrop-blur-3xl rounded-[2.5rem] shadow-[0_20px_50px_rgba(133,14,53,0.15)] border border-white/60 overflow-hidden">
        
        {/* Sidebar Navigation */}
        <aside className="w-64 shrink-0 flex flex-col p-6 border-r border-white/30 bg-white/20">
          <div className="mt-4 mb-10 px-2 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-dusty-rose to-blush-pink shadow-md"></div>
            <h1 className="text-2xl font-serif font-bold text-burgundy tracking-wide">
              Dear Me
            </h1>
          </div>
          
          <div className="text-xs font-semibold text-burgundy/40 tracking-wider mb-4 px-3 uppercase">Overview</div>
          
          <nav className="flex flex-col gap-1.5 flex-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 font-medium ${
                    isActive 
                    ? 'bg-white shadow-sm text-dusty-rose' 
                    : 'text-burgundy/60 hover:bg-white/40 hover:text-burgundy'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <item.icon size={20} className={isActive ? 'stroke-[2.5px]' : 'stroke-[2px]'} />
                    <span className="flex-1">{item.label}</span>
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-dusty-rose"></div>}
                  </>
                )}
              </NavLink>
            ))}
          </nav>
          
          {/* Go Pro Card Mockup */}
          <div className="mt-auto bg-gradient-to-br from-white/80 to-white/30 p-5 rounded-3xl border border-white/60 shadow-sm text-center relative overflow-hidden">
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-blush-pink/40 blur-xl rounded-full"></div>
            <div className="relative z-10">
              <h4 className="font-bold text-burgundy mb-1">Upgrade!</h4>
              <p className="text-xs text-burgundy/70 mb-4">Unlock premium tracking<br/>features today.</p>
              <button className="w-full py-2 bg-gradient-to-r from-dusty-rose to-theme-dark text-white rounded-xl text-sm font-semibold shadow-md transition-transform hover:scale-105">Go Premium</button>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col relative overflow-hidden">
          
          {/* Top Header */}
          <header className="h-24 px-10 flex items-center justify-between shrink-0 border-b border-white/20">
            <h2 className="text-3xl font-serif font-bold text-burgundy">Hello Beautiful! 👋</h2>
            
            <div className="flex items-center gap-6">
              <div className="flex bg-white/50 p-1 rounded-full shadow-inner border border-white/40">
                <button className="px-6 py-1.5 rounded-full bg-white shadow-sm text-burgundy font-medium text-sm">Dashboard</button>
                <button className="px-6 py-1.5 rounded-full text-burgundy/60 font-medium text-sm hover:text-burgundy transition-colors">Settings</button>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <p className="text-sm font-bold text-burgundy leading-none">Me</p>
                  <p className="text-[10px] text-burgundy/50 font-medium">Wellness Explorer</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-blush-pink border-2 border-white shadow-sm flex items-center justify-center text-dusty-rose font-bold">M</div>
              </div>
            </div>
          </header>
          
          {/* Scrollable Content */}
          <div className="flex-1 p-10 overflow-y-auto">
            <div className="max-w-5xl mx-auto pb-10">
              <Outlet />
            </div>
          </div>
        </main>
        
      </div>
    </div>
  );
}
