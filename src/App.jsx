import React from 'react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Routines from './pages/Routines';
import SugarLog from './pages/SugarLog';
import Journal from './pages/Journal';
import Wellness from './pages/Wellness';

function App() {
  return (
    // We use MemoryRouter for Electron apps to prevent URL browser bar issues.
    // If it were a pure web app, BrowserRouter would be used.
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="routines" element={<Routines />} />
          <Route path="sugar-log" element={<SugarLog />} />
          <Route path="journal" element={<Journal />} />
          <Route path="wellness" element={<Wellness />} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
}

export default App;
