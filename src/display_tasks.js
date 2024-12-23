let displayTasks = function () {
  let datDB = JSON.parse(localStorage.getItem('localDB')) || []; 
  const allTasksContainer = document.querySelector('.task-items__all')
  const inProgressTasksContainer = document.querySelector('.task-items__progress')
  const finishedTasksContainer = document.querySelector('.task-items__finished')
  const taskContainers = [...(document.querySelectorAll('.task-items'))];

  taskContainers.forEach((container) => {
    console.log(container);
    container.innerHTML = '';
  })
}

export {displayTasks}