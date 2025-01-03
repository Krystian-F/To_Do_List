import {newTask} from "./src/new_task.js";
import { displayTasks } from "./src/display_tasks.js";
import { deleteTask } from "./src/delete_task.js";
import { editTask } from "./src/edit_task.js";

addEventListener('DOMContentLoaded', () => {
  newTask();
  displayTasks();
  deleteTask();
  editTask();
})
