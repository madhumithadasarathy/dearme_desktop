import React from 'react';
import { Check } from 'lucide-react';

export default function ToggleCheckbox({ checked, onChange, label, className = '' }) {
  return (
    <label className={`flex items-center gap-4 cursor-pointer group ${className}`} onClick={() => onChange?.(!checked)}>
      <div className={`shrink-0 w-6 h-6 rounded border-2 transition-all duration-200 flex items-center justify-center ${checked ? 'bg-soft-green border-soft-green shadow-sm' : 'border-dusty-rose/50 bg-white group-hover:border-dusty-rose'}`}>
        {checked && <Check size={16} className="text-burgundy stroke-[3px]" />}
      </div>
      <span className={`text-lg font-sans transition-all duration-200 ${checked ? 'text-muted-rose line-through' : 'text-burgundy'}`}>
        {label}
      </span>
    </label>
  );
}
