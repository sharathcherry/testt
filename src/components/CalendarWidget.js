import React from 'react';

const CalendarWidget = () => {
  const today = new Date();
  const currentDay = today.getDate();
  const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  
  const events = { 10: "Project Alpha Deadline", 18: "Team Offsite", 25: "Company Holiday" };

  return (
    <section className="bg-light-card dark:bg-dark-card p-6 rounded-lg shadow-lg" aria-labelledby="calendar-heading">
      <h2 id="calendar-heading" className="text-2xl font-bold mb-4">📅 Calendar</h2>
      <div className="grid grid-cols-7 gap-2 text-center text-sm">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => <div key={day} className="font-bold text-gray-500">{day}</div>)}
        {days.map(day => (
          <div key={day} className={`relative flex items-center justify-center h-9 w-9 rounded-full cursor-pointer transition-colors ${day === currentDay ? 'bg-primary text-white font-bold' : 'hover:bg-gray-200 dark:hover:bg-gray-700'} ${events[day] ? 'font-bold ring-2 ring-accent' : ''}`} title={events[day] || ''}>
            {day}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CalendarWidget;