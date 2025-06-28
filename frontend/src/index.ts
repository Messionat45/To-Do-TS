declare const axios: any;
//because of that axos defined in html and to keep TS ghappy initialised thsi variable here

const addBtn = document.getElementById("add") as HTMLButtonElement;
const todosSection = document.getElementById("todos") as HTMLElement;
const base_url = "http://localhost:3000/api";

addBtn.addEventListener("click", async () => {
  try {
    const titleInput = document.getElementById("title") as HTMLInputElement;
    const dateInput = document.getElementById("date") as HTMLInputElement;

    const title = titleInput.value.trim(); //trim remoevs whilte spaces from befroe or afetr
    const date = dateInput.value;

    console.log(title, date);

    if (!title || !date) {
      alert("Please enetr both title and date");
      return;
    }

    const response = await axios.post(`${base_url}/todos`, {
      title,
      date,
      completed: false,
    });

    console.log(response);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      alert("something went wrong ");
    }
  }
});
