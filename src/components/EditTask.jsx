import React from 'react';

export default function EditTask() {

  function saveEditedTask() {

    const [editingTaskId, setEditingTaskId] = useState(null);
    const [editedTaskText, setEditedTaskText] = useState('');
    
    const startEditTask = (taskId, taskText) => {
        setEditingTaskId(taskId);
        setEditedTaskText(taskText);
      };
  };

  return (
    <svg 
      onClick={saveEditedTask}
      width="14"
      height="14"
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 14 14" 
    >
        <path d="M2.95833 11.0509L6.08421 11.0403L12.9069 4.28275C13.1746 4.015 13.322 3.65942 13.322 3.28117C13.322 2.90292 13.1746 2.54734 12.9069 2.27959L11.7835 1.15617C11.248 0.620669 10.3137 0.623502 9.78242 1.15404L2.95833 7.91296V11.0509ZM10.7819 2.15775L11.9074 3.27904L10.7762 4.39963L9.65279 3.27692L10.7819 2.15775ZM4.375 8.50371L8.64625 4.27284L9.76967 5.39625L5.49913 9.62571L4.375 9.62925V8.50371Z" fill="#A238FF"/>
        <path d="M1.54167 13.875H11.4583C12.2396 13.875 12.875 13.2396 12.875 12.4583V6.3185L11.4583 7.73517V12.4583H3.77858C3.76017 12.4583 3.74104 12.4654 3.72263 12.4654C3.69925 12.4654 3.67587 12.459 3.65179 12.4583H1.54167V2.54167H6.39162L7.80829 1.125H1.54167C0.760375 1.125 0.125 1.76038 0.125 2.54167V12.4583C0.125 13.2396 0.760375 13.875 1.54167 13.875Z" fill="#A238FF"/>
    </svg>
  );
};