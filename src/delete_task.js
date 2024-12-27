import { displayTasks } from "./display_tasks.js";

const deleteTask = function () {
  let dataDB = JSON.parse(localStorage.getItem("localDB")) || [];

  let attachDeleteListeners = function () {
    let deleteBtns = [...(document.querySelectorAll('.delete-button'))];

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

        if (dataDB.length === 0) {
          localStorage.removeItem("localDB");
        }

        displayTasks();
        attachDeleteListeners();
      })
    })    
  }

  attachDeleteListeners();
}

export {deleteTask}