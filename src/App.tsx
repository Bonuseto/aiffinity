import React from 'react';
import NavigationBar from './components/NavigationBar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <NavigationBar />
      <Dashboard />
    </div>
  );
}

export default App;
