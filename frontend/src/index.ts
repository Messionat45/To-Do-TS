// import axios from "axios";
declare const axios: any;
import { Todo } from "./types/todo";
//because of that axos defined in html and to keep TS ghappy initialised thsi variable here

const addBtn = document.getElementById("add") as HTMLButtonElement;
const todoList = document.getElementById("todo-list") as HTMLElement;
todoList.style.listStyle = "none";
const base_url = "http://localhost:3000/api";

addBtn.addEventListener("click", async () => {
  try {
    const titleInput = document.getElementById("title") as HTMLInputElement;
    const dateInput = document.getElementById("date") as HTMLInputElement;

    const title = titleInput.value.trim(); //trim remoevs whilte spaces from befroe or afetr
    const date = dateInput.value;

    console.log(title, date);

    if (!title || !date) {
      alert("Please enetr both title and dates");
      return;
    }

    const response = await axios.post(`${base_url}/todos`, {
      title,
      date,
      completed: false,
    });

    await renderTodos();
    titleInput.value = "";
    dateInput.value = "";

    console.log(response);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      alert("something went wrong ");
    }
  }
});

async function renderTodos() {
  try {
    console.log("Rendering todos...");

    const response = await axios.get(`${base_url}/todos`);
    const todos = response.data;
    console.log(todos);
    todoList.innerHTML = "";

    todos.forEach((todo: Todo) => {
      const li = document.createElement("li");
      li.innerHTML = `<span style="display:inline-block; width:600px; margin:auto; text-align:center; padding:5px">${todo.title}     ${todo.date}    ${todo.completed}</span>`;

      todoList.append(li);
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}

renderTodos(); // Load existing todos when page loads
