import React, { useState } from 'react';
import { Check, Trash2, Edit2 } from 'lucide-react';

export default function TaskItem({ task, onToggleComplete, onDeleteTask, onEditTask }) {
  const [confirmDelete, setConfirmDelete] = useState(false);

  const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleString('en-US', {
      dateStyle: 'medium',
      timeStyle: 'short',
    });

  return (
    <div
      className={`p-4 rounded-lg shadow border-l-4 transition-colors 
      ${task.completed ? 'border-green-500' : 'border-blue-500'} 
      bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100`}
    >
      <div className="flex justify-between items-start">
        <div className="flex gap-3">
          <button
            onClick={() => onToggleComplete(task.id)}
            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
              task.completed ? 'bg-green-500 border-green-500 text-white' : 'border-gray-300 dark:border-gray-600'
            }`}
          >
            {task.completed && <Check className="w-3 h-3" />}
          </button>

          <div>
            <h3 className={`font-semibold break-words ${task.completed ? 'line-through text-gray-500 dark:text-gray-400' : ''}`}>
              {task.title}
            </h3>
            {task.description && (
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-1 break-words">
                {task.description}
              </p>
            )}
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
              Created: {formatDate(task.createdAt)}
            </p>
          </div>
        </div>

        {/* Edit and Delete Icons */}
        <div className="flex gap-2">
          <button
            onClick={() => onEditTask(task)}
            className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400"
            title="Edit"
          >
            <Edit2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => setConfirmDelete(true)}
            className="text-red-500 hover:text-red-700 dark:hover:text-red-400"
            title="Delete"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Delete Confirmation */}
      {confirmDelete && (
        <div className="mt-3 bg-red-50 dark:bg-red-900/30 p-3 rounded">
          <p className="text-sm text-red-700 dark:text-red-400 mb-2">Confirm delete?</p>
          <button
            onClick={() => onDeleteTask(task.id)}
            className="bg-red-600 text-white px-3 py-1 rounded mr-2 hover:bg-red-700"
          >
            Delete
          </button>
          <button
            onClick={() => setConfirmDelete(false)}
            className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}
