const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

const onLoginSubmit = (event) => {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    paintGreeting(username);
}

const paintGreeting = (username) => {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

if(saveUsername === null){
    // show the Form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit" , onLoginSubmit);
}else{
    // show the Greeting
    paintGreeting(saveUsername);
}