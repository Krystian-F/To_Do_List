let displayTasks = function () {
  let dataDB = JSON.parse(localStorage.getItem('localDB')) || []; 
  const allTasksContainer = document.querySelector('.task-items__all');
  const inProgressTasksContainer = document.querySelector('.task-items__progress');
  const finishedTasksContainer = document.querySelector('.task-items__finished');
  const taskContainers = [...(document.querySelectorAll('.task-items'))];

  taskContainers.forEach((container) => {
    console.log(container);
    container.innerHTML = '';
  })

  let renderTasks = function (tasks) {
    tasks.forEach((task) => {
      const taskElement = document.createElement('div');
      taskElement.classList.add('task-item');
      taskElement.textContent = task.taskText;

      if (task.state === 'all_tasks') {
        allTasksContainer.appendChild(taskElement);
      } else if (task.state === 'in_progress') {
        inProgressTasksContainer.appendChild(taskElement);
      } else if (task.state === 'finished') {
        finishedTasksContainer.appendChild(taskElement);
      }
    })
  }

  console.log(dataDB)
  renderTasks(dataDB);
}

export {displayTasks}