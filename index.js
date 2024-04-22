document.addEventListener("DOMContentLoaded", () =>{
    const todosList = document.getElementById("todos-list")

    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(todos => {
        todos.forEach(todo => {
            const li = document.createElement("li");
            li.textContent = todo.title;
            todosList.appendChild(li);
        });
    })
    .catch(error => {
        alert.error("Error fetching todos", error)
    })
})