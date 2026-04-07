import React from 'react';

export default function InputField({ label, fullWidth = true, className = '', ...props }) {
  return (
    <div className={`flex flex-col gap-1.5 ${fullWidth ? 'w-full' : ''} ${className}`}>
      {label && <label className="text-sm text-burgundy font-medium ml-1">{label}</label>}
      <input 
        className="w-full bg-white/70 border border-blush-pink rounded-xl px-4 py-3 text-burgundy placeholder-muted-rose focus:outline-none focus:border-dusty-rose focus:ring-2 focus:ring-blush-pink transition-all font-sans"
        {...props}
      />
    </div>
  );
}
