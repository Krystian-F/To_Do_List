let newTask = function() {
  const textInput  = document.querySelector('.task-input');
  const inputBtn = document.querySelector('.add-task__btn');  

  let dataDB = JSON.parse(localStorage.getItem('localDB')) || [];

  const getTaskInput = () => {
    let newTaskInput = textInput.value.trim();
    if (!getTaskInput) return;
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
  }
 
  if(textInput && inputBtn) {
    inputBtn.addEventListener('click', getTaskInput)

    textInput.addEventListener('keydown', (e) => {
      if(e.key === 'Enter'){
        getTaskInput();
      }
    })
  }
}

export {newTask};