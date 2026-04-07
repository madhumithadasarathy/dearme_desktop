import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { useData } from '../contexts/DataContext';

export default function Journal() {
  const { journalEntries, addJournalEntry } = useData();
  const [mood, setMood] = useState('Neutral');
  const [content, setContent] = useState('');

  const moods = ['Great', 'Good', 'Neutral', 'Low', 'Anxious'];

  const handleSave = () => {
    if (!content.trim()) return;
    addJournalEntry({ mood, content, tags: [] });
    setContent('');
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <SectionHeader 
        title="My Journal" 
        subtitle="A safe space for your thoughts."
      />
      
      <div className="bg-white/60 backdrop-blur-md rounded-[2rem] p-8 shadow-[0_10px_40px_rgba(133,14,53,0.05)] border border-white/50">
        <h3 className="font-serif text-xl font-bold mb-4 text-burgundy">New Entry</h3>
        <div className="flex gap-2 mb-6">
          {moods.map(m => (
            <button 
              key={m}
              onClick={() => setMood(m)}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all shadow-sm ${mood === m ? 'bg-theme-pink text-white' : 'bg-white/60 text-burgundy/70 hover:bg-white'}`}
            >
              {m}
            </button>
          ))}
        </div>
        <textarea 
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full h-32 rounded-2xl border-white/60 bg-white/50 p-4 outline-none focus:ring-2 focus:ring-theme-pink shadow-inner text-burgundy resize-none mb-4 font-medium"
          placeholder="How are you feeling right now...?"
        ></textarea>
        <div className="flex justify-end">
          <button onClick={handleSave} className="px-8 py-2 bg-theme-dark text-white font-bold rounded-xl shadow-sm hover:scale-105 transition-transform">
            Save Entry
          </button>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="font-serif text-xl font-bold text-burgundy px-2 border-b border-burgundy/10 pb-2">Past Entries</h3>
        {journalEntries.length === 0 && <p className="text-burgundy/50 text-center font-medium">No journal entries yet.</p>}
        {journalEntries.slice().reverse().map(entry => (
          <div key={entry.id} className="bg-white/40 backdrop-blur-sm rounded-[2rem] p-6 shadow-sm border border-white/50 group hover:bg-white/60 transition-colors">
            <div className="flex items-center justify-between mb-3 border-b border-white/30 pb-3">
              <span className="font-bold text-sm text-theme-dark">{new Date(entry.date).toLocaleDateString()}</span>
              <span className="px-3 py-1 bg-white/60 text-theme-dark text-xs rounded-full font-bold shadow-sm">{entry.mood}</span>
            </div>
            <p className="text-burgundy/80 whitespace-pre-wrap font-medium">{entry.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
