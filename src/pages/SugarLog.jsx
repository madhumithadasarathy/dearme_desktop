import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { useData } from '../contexts/DataContext';

export default function SugarLog() {
  const { sugarLogs, addSugarLog, getSugarColorCategory } = useData();
  const [newValue, setNewValue] = useState('');
  const [slot, setSlot] = useState('Before Breakfast');
  
  const today = new Date().toISOString().split('T')[0];
  const todaysLogs = sugarLogs.filter(log => log.date === today);

  const timeSlots = [
    'Before Breakfast', 'After Breakfast',
    'Before Lunch', 'After Lunch',
    'Before Dinner', 'After Dinner'
  ];

  const handleAdd = () => {
    if (!newValue || isNaN(newValue)) return;
    addSugarLog({
      date: today,
      timeSlot: slot,
      value: parseInt(newValue),
      notes: ''
    });
    setNewValue('');
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <SectionHeader 
        title="Sugar Log" 
        subtitle="Track your sweet balance throughout the day."
      />
      
      <div className="bg-white/60 backdrop-blur-md rounded-[2rem] p-8 shadow-[0_10px_40px_rgba(133,14,53,0.05)] border border-white/50">
        <h3 className="font-serif text-xl font-bold mb-4 text-burgundy">Add New Reading</h3>
        <div className="flex gap-4 mb-2">
          <select 
            value={slot}
            onChange={(e) => setSlot(e.target.value)}
            className="flex-1 rounded-xl border-white/60 bg-white/50 px-4 py-2 outline-none focus:ring-2 focus:ring-theme-pink shadow-sm text-burgundy font-medium"
          >
            {timeSlots.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          <input 
            type="number"
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
            placeholder="Level (mg/dL)"
            className="w-32 rounded-xl border-white/60 bg-white/50 px-4 py-2 outline-none focus:ring-2 focus:ring-theme-pink shadow-sm text-burgundy font-medium"
          />
          <button onClick={handleAdd} className="px-6 py-2 bg-theme-dark text-white font-bold rounded-xl shadow-sm hover:scale-105 transition-transform">
            Log
          </button>
        </div>
      </div>

      <div className="bg-white/40 backdrop-blur-md rounded-[2rem] p-8 shadow-[0_10px_40px_rgba(133,14,53,0.05)] border border-white/50">
        <h3 className="font-serif text-xl font-bold mb-6 text-burgundy">Today's Readings</h3>
        
        {todaysLogs.length === 0 ? (
          <p className="text-burgundy/50 text-center py-4 font-medium">No readings logged today yet.</p>
        ) : (
          <div className="overflow-hidden rounded-2xl border border-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/60 text-burgundy">
                  <th className="p-4 font-bold border-b border-white">Time Slot</th>
                  <th className="p-4 font-bold border-b border-white">Level</th>
                  <th className="p-4 font-bold border-b border-white">Status</th>
                </tr>
              </thead>
              <tbody>
                {todaysLogs.map((log) => {
                  const status = getSugarColorCategory(log.value);
                  const statusColors = {
                    'Green': 'bg-green-100 text-green-700 border-green-200',
                    'Yellow': 'bg-yellow-100 text-yellow-700 border-yellow-200',
                    'Red': 'bg-theme-pink/20 text-theme-dark border-theme-pink/30'
                  };
                  return (
                    <tr key={log.id} className="border-b border-white hover:bg-white/30 transition-colors">
                      <td className="p-4 font-medium text-burgundy/80">{log.timeSlot}</td>
                      <td className="p-4 font-bold text-burgundy">{log.value}</td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold border ${statusColors[status]}`}>
                          {status === 'Green' ? 'Good' : status === 'Yellow' ? 'Elevated' : 'High/Low'}
                        </span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
