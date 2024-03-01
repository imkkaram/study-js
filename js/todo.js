const LINE_THROUGH_CLASS = "line-through";
const MOUSEOVER_CLASS = "todo-mouseover";
const SAVE_TODOS_KEY = "todos";
const DELETE_BUTTON_IMAGE = "../img/trash-can-2.png";

const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = todoForm.querySelector("input");
let todos = localStorage.getItem(SAVE_TODOS_KEY);
todos = todos ? JSON.parse(todos) : [];

function paintSavedTodos() {
	if (todos.length > 0) {
		todos.forEach((item) => {
			paintTodo(item);
		});
	}
}

function saveTodoInLocalStorage(todoObj) {
	todos.push(todoObj);
	localStorage.setItem(SAVE_TODOS_KEY, JSON.stringify(todos));
}

function deleteTodoInLocalStorage(liIndex) {
	todos = todos.filter((item) => item.index !== liIndex);
	localStorage.setItem(SAVE_TODOS_KEY, JSON.stringify(todos));
}

function onClickTodo(event) {
	event.target.classList.toggle(LINE_THROUGH_CLASS);
}

function onClickTodoDeleteButton(event) {
	const li = event.target.parentElement;
	deleteTodoInLocalStorage(li.index);
	todoList.removeChild(li);
}

function paintTodo(todoObj) {
	const li = document.createElement("li");
	li.id = "todo-row";
	li.index = todoObj.index;
	const span = document.createElement("span");
	span.innerText = todoObj.text;
	const button = document.createElement("button");
	button.className = "todo-btn";
	button.innerText = "🗑️";
	li.appendChild(span);
	li.appendChild(button);
	todoList.appendChild(li);
	span.addEventListener("click", onClickTodo);
	button.addEventListener("click", onClickTodoDeleteButton);
}

function onSubmitTodo(event) {
	event.preventDefault();
	const newTodo = todoInput.value;
	todoInput.value = "";
	todoObj = {
		index: todos.length,
		text: newTodo,
	};
	paintTodo(todoObj);
	saveTodoInLocalStorage(todoObj);
}

paintSavedTodos();
todoForm.addEventListener("submit", onSubmitTodo);
