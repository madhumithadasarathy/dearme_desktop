import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Home, CheckSquare, Activity, BookHeart, HeartPulse } from 'lucide-react';
import { useData } from '../contexts/DataContext';

export default function Layout() {
  const { user } = useData();
  const navItems = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/routines', label: 'Routines', icon: CheckSquare },
    { to: '/sugar-log', label: 'Sugar Log', icon: Activity },
    { to: '/journal', label: 'Journal', icon: BookHeart },
    { to: '/wellness', label: 'Wellness', icon: HeartPulse },
  ];

  return (
    <div className="flex w-full h-screen bg-transparent text-burgundy font-sans overflow-hidden">
      
      {/* Sidebar Navigation */}
      <aside className="w-[280px] shrink-0 flex flex-col p-6 border-r border-white/20 bg-white/40 backdrop-blur-md relative z-10 shadow-[4px_0_24px_rgba(133,14,53,0.05)]">
        <div className="mt-4 mb-10 px-2 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-dusty-rose to-theme-light shadow-sm flex items-center justify-center text-sm">✨</div>
          <h1 className="text-2xl font-serif font-bold text-burgundy tracking-wide">
            Dear Me
          </h1>
        </div>
        
        <div className="text-xs font-semibold text-burgundy/50 tracking-wider mb-4 px-3 uppercase">My Planner</div>
        
        <nav className="flex flex-col gap-2 flex-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-300 font-medium ${
                  isActive 
                  ? 'bg-white shadow-sm text-theme-dark' 
                  : 'text-burgundy/70 hover:bg-white/50 hover:text-burgundy'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <item.icon size={22} className={isActive ? 'stroke-[2.5px] text-dusty-rose' : 'stroke-[2px]'} />
                  <span className="flex-1">{item.label}</span>
                  {isActive && <div className="w-1.5 h-1.5 rounded-full bg-dusty-rose shadow-sm"></div>}
                </>
              )}
            </NavLink>
          ))}
        </nav>
        
        {/* Soft Footer Info */}
        <div className="mt-auto px-4 py-6 text-center border-t border-white/30">
           <p className="text-xs text-burgundy/60 italic font-medium">"Be gentle with yourself."</p>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative z-0 overflow-hidden bg-white/10 backdrop-blur-[2px]">
        
        {/* Top Header */}
        <header className="h-24 px-10 flex items-center justify-between shrink-0 border-b border-white/10">
          <h2 className="text-3xl font-serif font-bold text-burgundy drop-shadow-sm">Hello {user.name}! 🌸</h2>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm font-bold text-burgundy leading-none">Me</p>
                <p className="text-xs text-burgundy/60 font-medium">Gentle Explorer</p>
              </div>
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-dusty-rose to-theme-pink shadow-md flex items-center justify-center text-white font-bold text-lg">{user.name[0]}</div>
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
  );
}
