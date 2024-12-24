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
      const taskHTML = `
      <div 
        class="task-item" 
        draggable="true"
        data-id="${task.id}"
      >
        <!-- Draggable Icon -->
        <span task-item__draggable-icon;">☰</span>

        <!-- Task Text -->
        <span style="flex: 1;">${task.taskText}</span>

        <!-- Buttons -->
        <div class="task-item__buttons">
          <button 
            class="edit-button" 
          >
            Edit
          </button>
          <button 
            class="delete-button" 
          >
            Delete
          </button>
        </div>
      </div>
    `;

      if (task.state === 'all_tasks') {
        allTasksContainer.innerHTML += taskHTML;
      } else if (task.state === 'in_progress') {
        inProgressTasksContainer.innerHTML += taskHTML;
      } else if (task.state === 'finished') {
        finishedTasksContainer.innerHTML += taskHTML;
      }
    })
  }

  console.log(dataDB)
  renderTasks(dataDB);
}

export {displayTasks}