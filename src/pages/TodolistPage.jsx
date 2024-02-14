import '../style-todo.css';

import React, { useState } from 'react';

export default function TodolistPage() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedTaskText, setEditedTaskText] = useState('');

  const addTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: taskInput }]);
      setTaskInput('');
    }
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const startEditTask = (taskId, taskText) => {
    setEditingTaskId(taskId);
    setEditedTaskText(taskText);
  };

  const cancelEditTask = () => {
    setEditingTaskId(null);
    setEditedTaskText('');
  };

  const saveEditedTask = () => {
    setTasks(
      tasks.map((task) =>
        task.id === editingTaskId ? { ...task, text: editedTaskText } : task
      )
    );
    setEditingTaskId(null);
    setEditedTaskText('');
  };

  return (
    <div className='TodoWrapper'>
      <h1>To-Do List</h1>

      <div className='TodoForm'>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder='Add a new task'
          className='todo-input'
        />
        <button onClick={addTask} className='add-task-btn'>Add +</button>
      </div>
        <ul className='task-list'>
        {tasks.map((task) => (
          <li key={task.id} className='Todo'>
            {editingTaskId === task.id ? (
              <>
                <input
                  type="text"
                  value={editedTaskText}
                  onChange={(e) => setEditedTaskText(e.target.value)}
                />
                <div className='todo-icons'>
                  <button className='todo-btn' onClick={saveEditedTask}>save</button>
                  <button className='todo-btn' onClick={cancelEditTask}>undo</button>
                </div>
              </>
            ) : (
              <>
                {task.text}{' '}
                <div className='todo-icons'>
                  <button className='todo-btn' onClick={() => startEditTask(task.id, task.text)}>
                    edit
                  </button>{' '}
                  <button className='todo-btn' onClick={() => deleteTask(task.id)}>delete</button>
                </div>
                
              </>
            )}
          </li>
        ))}
      </ul>
      
    </div>
  );
}