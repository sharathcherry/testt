import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle = ({ isDarkMode, toggleTheme }) => (
  <button
    onClick={toggleTheme}
    className="p-2 rounded-full text-light-text dark:text-dark-text hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
    aria-label={isDarkMode ? 'Activate light mode' : 'Activate dark mode'}
  >
    {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
  </button>
);

const Header = ({ isDarkMode, toggleTheme }) => {
  const navLinks = ['Home', 'Announcements', 'Teams', 'Calendar', 'Help Desk'];
  
  return (
    <header className="bg-light-card dark:bg-dark-card shadow-md sticky top-0 z-50" aria-label="Main Header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <img className="h-8 w-auto" src="https://via.placeholder.com/150x40/2563eb/ffffff?text=Axero" alt="Axero Company Logo" />
            <h1 className="text-xl font-bold text-primary">OfficeSpace</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-4" aria-label="Main navigation">
            {navLinks.map(link => (
              <a 
                key={link} 
                href="#" 
                className="px-3 py-2 rounded-md text-sm font-medium text-light-text dark:text-dark-text hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-current={link === 'Home' ? 'page' : undefined}
              >
                {link}
              </a>
            ))}
          </nav>
          <div className="flex items-center">
            <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;