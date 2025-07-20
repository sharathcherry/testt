import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import AnnouncementBanner from './components/AnnouncementBanner';
import TeamSpotlight from './components/TeamSpotlight';
import CalendarWidget from './components/CalendarWidget';
import TaskList from './components/TaskList';
import QuickLinks from './components/QuickLinks';
import ProductivityChart from './components/ProductivityChart';
import Footer from './components/Footer';

function App() {
  // State management for dark mode with localStorage persistence
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // If no theme saved, use system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main className="flex-grow w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <AnnouncementBanner />
        
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content column */}
          <div className="lg:col-span-2 space-y-8">
            <TeamSpotlight />
            <ProductivityChart />
          </div>

          {/* Sidebar column */}
          <div className="space-y-8">
            <CalendarWidget />
            <TaskList />
          </div>
        </div>
        
        <QuickLinks />
      </main>
      <Footer />
    </div>
  );
}

export default App;