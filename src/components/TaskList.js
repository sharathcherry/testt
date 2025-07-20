import React, { useState, useEffect } from 'react';

const TaskList = () => {
    const initialTasks = () => {
        try {
            const savedTasks = localStorage.getItem('tasks');
            return savedTasks ? JSON.parse(savedTasks) : [
                { id: 1, text: 'Finalize Q3 marketing slides', completed: false },
                { id: 2, text: 'Submit IT support ticket', completed: true },
                { id: 3, text: 'Book travel for conference', completed: false },
            ];
        } catch (error) {
            return [];
        }
    };

    const [tasks, setTasks] = useState(initialTasks);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const toggleTask = (id) => {
        setTasks(tasks.map(task => 
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    return (
        <section className="bg-light-card dark:bg-dark-card p-6 rounded-lg shadow-lg" aria-labelledby="tasklist-heading">
            <h2 id="tasklist-heading" className="text-2xl font-bold mb-4">✅ My Tasks</h2>
            <ul className="space-y-3">
                {tasks.map(task => (
                    <li key={task.id} className="flex items-center">
                        <input
                            type="checkbox"
                            id={`task-${task.id}`}
                            checked={task.completed}
                            onChange={() => toggleTask(task.id)}
                            className="h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary"
                        />
                        <label htmlFor={`task-${task.id}`} className={`ml-3 text-md transition-all duration-300 ${task.completed ? 'line-through text-gray-500' : 'text-light-text dark:text-dark-text'}`}>
                            {task.text}
                        </label>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default TaskList;