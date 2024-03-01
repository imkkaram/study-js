const USERNAME_KEY = "username";

const loginForm = login.querySelector("#login-form");
const username = localStorage.getItem(USERNAME_KEY);
console.log(username);

function paintGreeting(username) {
	const greeting = document.querySelector("#greeting");
	greeting.innerText = `Hello, ${username} 👋`;
	greeting.classList.remove("hidden");
}

function onSubmitLogin(event) {
	event.preventDefault();
	const newUsername = loginForm.querySelector(".login-input").value;
	console.log(newUsername);
	localStorage.setItem(USERNAME_KEY, newUsername);
	loginForm.classList.add("hidden");
	paintGreeting(newUsername);
}

if (username !== null) {
	paintGreeting(username);
} else {
	loginForm.classList.remove("hidden");
	loginForm.addEventListener("submit", onSubmitLogin);
}
