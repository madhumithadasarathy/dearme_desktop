import React from 'react';
import PlannerCard from '../components/PlannerCard';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';

export default function Journal() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <SectionHeader 
        title="My Journal 📖" 
        subtitle="A safe space to pour your thoughts."
      />
      
      <PlannerCard>
        <div className="flex gap-4 mb-6 pt-2 pb-6 border-b border-blush-pink overflow-x-auto select-none">
          {['Happy 🌸', 'Calm 🍃', 'Anxious 🌧️', 'Sad 💧', 'Tired ☕'].map((mood) => (
            <button key={mood} className="px-4 py-2 bg-white/60 border border-soft-rose rounded-xl hover:bg-blush-pink transition-colors text-burgundy whitespace-nowrap">
              {mood}
            </button>
          ))}
        </div>

        <h3 className="font-serif text-lg font-medium mb-3 text-dusty-rose">Today's Prompt</h3>
        <p className="text-burgundy italic mb-4">"What is one thing you can forgive yourself for today?"</p>
        
        <textarea 
          placeholder="Dear Me..." 
          className="w-full h-64 bg-transparent border-0 border-l-2 border-soft-rose pl-6 resize-none focus:outline-none focus:border-dusty-rose text-lg text-burgundy font-serif placeholder-muted-rose"
        />

        <div className="mt-4 flex justify-end">
          <Button>Save thoughts gently</Button>
        </div>
      </PlannerCard>
    </div>
  );
}
