import React from 'react';
import PlannerCard from '../components/PlannerCard';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import InputField from '../components/InputField';

export default function SugarLog() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <SectionHeader 
        title="Sugar Tracking" 
        subtitle="Keep an eye on what matters."
      />
      
      <PlannerCard className="bg-white/50 mb-6">
        <div className="flex items-end gap-4">
          <InputField label="Enter Reading (mg/dL)" type="number" placeholder="e.g. 110" />
          <Button className="shrink-0 whitespace-nowrap">Log Reading</Button>
        </div>
      </PlannerCard>

      <PlannerCard className="p-0 overflow-hidden">
        <table className="w-full text-left font-sans">
          <thead>
            <tr className="bg-soft-rose/30 text-burgundy font-medium">
              <th className="py-4 px-6 rounded-tl-planner">Date & Time</th>
              <th className="py-4 px-6">Reading</th>
              <th className="py-4 px-6 rounded-tr-planner">Status</th>
            </tr>
          </thead>
          <tbody className="text-muted-rose">
            <tr className="border-b border-blush-pink">
              <td className="py-4 px-6">Today, 08:30 AM</td>
              <td className="py-4 px-6 font-semibold text-burgundy">95 mg/dL</td>
              <td className="py-4 px-6"><span className="inline-block px-3 py-1 bg-soft-green text-green-900 text-xs rounded-full font-bold">Normal</span></td>
            </tr>
            <tr className="border-b border-blush-pink">
              <td className="py-4 px-6">Yesterday, 08:00 PM</td>
              <td className="py-4 px-6 font-semibold text-burgundy">142 mg/dL</td>
              <td className="py-4 px-6"><span className="inline-block px-3 py-1 bg-soft-yellow text-yellow-900 text-xs rounded-full font-bold">Elevated</span></td>
            </tr>
            <tr>
              <td className="py-4 px-6">Yesterday, 07:15 AM</td>
              <td className="py-4 px-6 font-semibold text-burgundy">105 mg/dL</td>
              <td className="py-4 px-6"><span className="inline-block px-3 py-1 bg-soft-green text-green-900 text-xs rounded-full font-bold">Normal</span></td>
            </tr>
          </tbody>
        </table>
      </PlannerCard>
    </div>
  );
}
