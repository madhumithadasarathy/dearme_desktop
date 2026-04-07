import React from 'react';
import PlannerCard from '../components/PlannerCard';
import SectionHeader from '../components/SectionHeader';

export default function Home() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <SectionHeader 
        title="Good Morning, Beautiful 🌸" 
        subtitle="Here is what your gentle day looks like today."
      />
      
      <div className="grid grid-cols-3 gap-6">
        <PlannerCard className="col-span-2">
          <h3 className="font-serif text-xl font-medium mb-4">Today's Focus</h3>
          <p className="text-muted-rose leading-relaxed">
            "Remember that progress is not linear. Be gentle with yourself."
          </p>
        </PlannerCard>
        
        <PlannerCard className="flex flex-col items-center justify-center text-center bg-soft-rose/20">
          <div className="text-4xl mb-2">✨</div>
          <p className="font-medium text-dusty-rose">3 Routines</p>
          <p className="text-sm text-muted-rose">completed</p>
        </PlannerCard>
      </div>

      <PlannerCard>
        <h3 className="font-serif text-xl font-medium mb-4">Upcoming Schedule</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-white/50 rounded-xl border border-blush-pink">
            <span className="text-muted-rose font-medium">08:00 AM</span>
            <span className="flex-1 ml-6 text-burgundy">Morning Skincare & Water</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-white/50 rounded-xl border border-blush-pink">
            <span className="text-muted-rose font-medium">12:30 PM</span>
            <span className="flex-1 ml-6 text-burgundy">Check Sugar Levels</span>
          </div>
        </div>
      </PlannerCard>
    </div>
  );
}
