import React, { useState } from 'react';
import PlannerCard from '../components/PlannerCard';
import SectionHeader from '../components/SectionHeader';
import ToggleCheckbox from '../components/ToggleCheckbox';

export default function Routines() {
  const [morning, setMorning] = useState([true, false, false]);

  const toggleMorning = (idx) => {
    const newArr = [...morning];
    newArr[idx] = !newArr[idx];
    setMorning(newArr);
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <SectionHeader 
        title="My Routines" 
        subtitle="Small steps build beautiful habits."
      />
      
      <PlannerCard>
        <h3 className="font-serif text-xl font-medium mb-6 text-dusty-rose border-b border-soft-rose pb-2">Morning Gentle Start ☀️</h3>
        <div className="flex flex-col gap-4">
          <ToggleCheckbox checked={morning[0]} onChange={() => toggleMorning(0)} label="Drink a full glass of water" />
          <ToggleCheckbox checked={morning[1]} onChange={() => toggleMorning(1)} label="Check fasting sugar levels" />
          <ToggleCheckbox checked={morning[2]} onChange={() => toggleMorning(2)} label="Take morning vitamins" />
        </div>
      </PlannerCard>

      <PlannerCard className="opacity-80">
        <h3 className="font-serif text-xl font-medium mb-6 text-muted-rose border-b border-soft-rose pb-2">Evening Wind Down 🌙</h3>
        <div className="flex flex-col gap-4">
          <ToggleCheckbox checked={false} label="Light stretching" />
          <ToggleCheckbox checked={false} label="Read 10 pages of a book" />
          <ToggleCheckbox checked={false} label="Write in journal" />
        </div>
      </PlannerCard>
    </div>
  );
}
