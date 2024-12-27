import { displayTasks } from "./display_tasks.js";
import { deleteTask } from "./delete_task.js";
import { editTask } from "./edit_task.js";

const newTask = function() {
  const textInput  = document.querySelector('.task-input');
  const inputBtn = document.querySelector('.add-task__btn');  

  const getTaskInput = () => {
    let dataDB = JSON.parse(localStorage.getItem('localDB')) || []
    let newTaskInput = textInput.value.trim();
    if (!newTaskInput) return;
    let newTaskId = Date.now();
    let newTask = {
      id : newTaskId,
      taskText : newTaskInput,
      state : 'all_tasks'    
    }
    textInput.value = '';

    console.log(newTask);
    dataDB.push(newTask);
    localStorage.setItem('localDB', JSON.stringify(dataDB));
    
    displayTasks();
    deleteTask();
    editTask();
  }
 
  if(textInput && inputBtn) {
    inputBtn.addEventListener('click', () => {
    getTaskInput();
    }) 

    textInput.addEventListener('keydown', (e) => {
      if(e.key === 'Enter'){
        getTaskInput();
      }
    })
  }
}

export {newTask};