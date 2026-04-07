import React, { useState } from 'react';
import { Heart } from 'lucide-react';

function App() {
  const [loading, setLoading] = useState(true);

  // Simulate a quick loading state to match aesthetic
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blush-pink">
      <div className="p-8 text-center bg-white/40 backdrop-blur-sm rounded-3xl shadow-sm border border-white/50">
        <h1 className="text-4xl font-semibold mb-4 text-pink-500 tracking-wide flex items-center justify-center gap-2">
          Dear Me <Heart className="text-pink-500 fill-pink-500" />
        </h1>
        {loading ? (
          <p className="text-gray-600 italic">Your planner is loading...</p>
        ) : (
          <p className="text-gray-600">Welcome to your gentle space. 🌸</p>
        )}
      </div>
    </div>
  );
}

export default App;
