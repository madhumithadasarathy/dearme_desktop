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
    <div className="flex min-h-screen bg-blush-pink text-burgundy font-sans">
      {/* Sidebar Navigation */}
      <aside className="w-64 shrink-0 flex flex-col bg-cream/40 backdrop-blur-md border-r border-white/50 p-6 shadow-[4px_0_24px_rgba(217,119,141,0.05)]">
        <div className="mt-8 mb-12 px-2">
          <h1 className="text-3xl font-serif font-bold text-burgundy tracking-wide flex items-center gap-2">
            Dear Me <span className="text-dusty-rose">💖</span>
          </h1>
          <p className="text-sm font-medium text-muted-rose mt-1">Your gentle planner</p>
        </div>
        <nav className="flex flex-col gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-300 font-medium ${
                  isActive 
                  ? 'bg-white shadow-[0_2px_10px_rgba(217,119,141,0.08)] text-dusty-rose scale-[1.02]' 
                  : 'text-muted-rose hover:bg-white/60 hover:text-burgundy'
                }`
              }
            >
              <item.icon size={20} strokeWidth={2.5} />
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-10 overflow-y-auto">
        <div className="max-w-4xl mx-auto w-full h-full pb-10">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
