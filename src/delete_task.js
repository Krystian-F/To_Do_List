import { displayTasks } from "./display_tasks.js";

let deleteTask = function () {
  let deleteBtns = [...(document.querySelectorAll('.delete-button'))];
  let dataDB = JSON.parse(localStorage.getItem('localDB')) || [];

  const removeElementById = function (tasks, taskId) {
    let index = tasks.findIndex( task => task.id === taskId);

    if (index !== -1) {
      tasks.splice(index, 1);
      console.log(`Task with ID ${taskId} removed.`);
    } else {
      return
    }

    return tasks
  }

  deleteBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      let itemForRemoval = e.target.closest('.task-item');
      let idForRemoval = Number(itemForRemoval.dataset.id);
      
      let updatedDB =  removeElementById(dataDB, idForRemoval);
      console.log(updatedDB);
      localStorage.setItem('localDB', JSON.stringify(updatedDB));

      displayTasks();
    })
  })
}

export {deleteTask}