import React from 'react';

export default function SectionHeader({ title, subtitle, className = '' }) {
  return (
    <div className={`mb-6 ${className}`}>
      <h2 className="text-3xl font-serif text-burgundy font-medium tracking-wide">{title}</h2>
      {subtitle && <p className="text-muted-rose mt-1 text-base">{subtitle}</p>}
    </div>
  );
}
