import {newTask} from "./src/new_task.js";
import { displayTasks } from "./src/display_tasks.js";

addEventListener('DOMContentLoaded', () => {
  newTask();
  displayTasks();
})
