const editTask = function () {
  let dataDB = JSON.parse(localStorage.getItem('localDB')) || [];

    let updateDB = function (tasks, taskId, newText) {
        let task = tasks.find((task) => task.id === taskId);
        
        if (task) {
          task.taskText = newText;
        } else {
          return;
        }

        return tasks;
      }

      let attachEditListeners = function () {
        let editBtns = [...(document.querySelectorAll('.edit-button'))];
        editBtns.forEach((btn) => {
          btn.addEventListener('click', (e) => {
            let taskParent = e.target.closest('.task-item');
            let taskId = Number(taskParent.dataset.id);
            
            let taskTextField = taskParent.querySelector('.task-item__text');
            let taskTextValue = taskTextField.innerText;
      
            let editField = document.createElement('input');
            editField.type = 'text';
            editField.value = taskTextValue;
            editField.className = 'task-item__text';
      
            taskParent.replaceChild(editField, taskTextField);

            // Save edit
            editField.addEventListener('keydown', (e) => {
              if(e.key === 'Enter' && editField !== '') {
                console.log(editField.value)
                let editedTextValue = editField.value
                let editedTextField = document.createElement('span');
                editedTextField.className = 'task-item__text';
                editedTextField.textContent= editedTextValue;
                taskParent.replaceChild(editedTextField, editField);

              let editedDataDB =  updateDB(dataDB, taskId, editedTextValue);
              localStorage.setItem('localDB', JSON.stringify(editedDataDB));
              }
            })
          })
        })            
      }

  attachEditListeners();
}

export {editTask}