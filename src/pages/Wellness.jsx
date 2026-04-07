import React from 'react';
import PlannerCard from '../components/PlannerCard';
import SectionHeader from '../components/SectionHeader';
import { Activity, Droplets, Moon } from 'lucide-react';

export default function Wellness() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <SectionHeader 
        title="Wellness Overview" 
        subtitle="Listening to your body."
      />
      
      <div className="grid grid-cols-2 gap-6">
        <PlannerCard className="flex flex-col items-center justify-center text-center py-10 bg-white/70">
          <div className="w-16 h-16 bg-blush-pink rounded-full flex items-center justify-center mb-4 text-dusty-rose">
            <Activity size={32} />
          </div>
          <h3 className="font-sans font-bold text-2xl text-burgundy mb-1">4,200</h3>
          <p className="text-muted-rose font-medium text-sm uppercase tracking-widest">Steps Today</p>
        </PlannerCard>

        <PlannerCard className="flex flex-col items-center justify-center text-center py-10 bg-white/70">
          <div className="w-16 h-16 bg-soft-rose/50 rounded-full flex items-center justify-center mb-4 text-dusty-rose">
            <Droplets size={32} />
          </div>
          <h3 className="font-sans font-bold text-2xl text-burgundy mb-1">4 of 8</h3>
          <p className="text-muted-rose font-medium text-sm uppercase tracking-widest">Glasses of Water</p>
        </PlannerCard>
      </div>

      <PlannerCard>
        <h3 className="font-serif text-xl font-medium mb-4 text-dusty-rose flex items-center gap-2">
          <Moon size={20} /> Cycle Tracker
        </h3>
        <div className="p-6 bg-blush-pink/50 rounded-2xl border border-soft-rose/60">
          <p className="text-burgundy font-medium">Day 14 <span className="text-muted-rose font-normal ml-2">Estimated Ovulation</span></p>
          <div className="w-full h-2 bg-cream rounded-full mt-4 overflow-hidden">
            <div className="h-full bg-dusty-rose rounded-full w-1/2 rounded-r-none"></div>
          </div>
        </div>
      </PlannerCard>
    </div>
  );
}
