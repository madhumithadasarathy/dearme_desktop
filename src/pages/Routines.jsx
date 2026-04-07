import React from 'react';
import SectionHeader from '../components/SectionHeader';
import ToggleCheckbox from '../components/ToggleCheckbox';
import { useData } from '../contexts/DataContext';

export default function Routines() {
  const { tasks, completions, toggleTaskCompletion } = useData();
  
  const today = new Date().toISOString().split('T')[0];
  const todaysCompletions = completions[today] || [];
  
  const morningTasks = tasks.filter(t => t.category === 'Morning');
  const eveningTasks = tasks.filter(t => t.category === 'Evening');

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <SectionHeader 
        title="My Routines" 
        subtitle="Small steps build beautiful habits."
      />
      
      <div className="bg-white/60 backdrop-blur-md rounded-[2rem] p-8 shadow-[0_10px_40px_rgba(133,14,53,0.05)] border border-white/50">
        <h3 className="font-serif text-xl font-bold mb-6 text-dusty-rose border-b border-white/30 pb-3">Morning Gentle Start ☀️</h3>
        <div className="flex flex-col gap-5">
          {morningTasks.map(task => (
            <ToggleCheckbox 
              key={task.id}
              checked={todaysCompletions.includes(task.id)} 
              onChange={() => toggleTaskCompletion(today, task.id)} 
              label={task.title} 
            />
          ))}
        </div>
      </div>

      <div className="bg-white/40 backdrop-blur-md rounded-[2rem] p-8 shadow-[0_10px_40px_rgba(133,14,53,0.05)] border border-white/50">
        <h3 className="font-serif text-xl font-bold mb-6 text-burgundy/60 border-b border-white/30 pb-3">Evening Wind Down 🌙</h3>
        <div className="flex flex-col gap-5">
          {eveningTasks.map(task => (
            <ToggleCheckbox 
              key={task.id}
              checked={todaysCompletions.includes(task.id)} 
              onChange={() => toggleTaskCompletion(today, task.id)} 
              label={task.title} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}
