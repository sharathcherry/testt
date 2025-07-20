import React from 'react';
import { FaChartBar } from 'react-icons/fa';

const ProductivityChart = () => {
  // NOTE: For a real chart, install and use a library like 'react-chartjs-2'
  // and pass data to it. This is a static placeholder.
  return (
    <section className="bg-light-card dark:bg-dark-card p-6 rounded-lg shadow-lg" aria-labelledby="productivity-heading">
      <h2 id="productivity-heading" className="text-2xl font-bold mb-4">📈 Productivity</h2>
      <div className="h-64 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900/50 rounded-lg text-center p-4">
        <FaChartBar className="h-16 w-16 text-gray-400 mb-4" />
        <h3 className="font-semibold text-lg">Weekly Task Completion</h3>
        <p className="text-gray-500 dark:text-gray-400">Chart data is loading... (Static Placeholder)</p>
      </div>
    </section>
  );
};

export default ProductivityChart;