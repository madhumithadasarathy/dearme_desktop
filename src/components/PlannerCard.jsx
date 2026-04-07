import React from 'react';

export default function PlannerCard({ children, className = '' }) {
  return (
    <div className={`bg-cream rounded-planner shadow-planner p-6 ${className}`}>
      {children}
    </div>
  );
}
