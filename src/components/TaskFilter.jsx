import React from 'react';
import { Search } from 'lucide-react';

const TaskFilter = ({
  currentFilter,
  onFilterChange,
  taskCounts = { all: 0, pending: 0, completed: 0 },
  searchTerm,
  onSearchChange,
}) => {
  const filters = [
    { key: 'all', label: 'All', count: taskCounts.all },
    { key: 'pending', label: 'Pending', count: taskCounts.pending },
    { key: 'completed', label: 'Completed', count: taskCounts.completed },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-6">
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => onFilterChange(filter.key)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                currentFilter === filter.key
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search tasks..."
            className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none w-full sm:w-64 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default TaskFilter;
