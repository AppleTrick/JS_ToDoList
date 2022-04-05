// const loginForm = document.getElementById("login-form");

// # 1
// const loginInput = loginForm.querySelector('input');
// const loginButton = loginForm.querySelector('button');

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

// submit 으로 바꿔서 삭제
// const loginButton = document.querySelector("#login-form button")

const onLoginSubmit = (info) => {
    info.preventDefault();
    console.log(loginInput);
}

loginForm.addEventListener("submit" , onLoginSubmit);