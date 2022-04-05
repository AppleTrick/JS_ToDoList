// const loginForm = document.getElementById("login-form");

// # 1
// const loginInput = loginForm.querySelector('input');
// const loginButton = loginForm.querySelector('button');

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

// submit 으로 바꿔서 삭제
// const loginButton = document.querySelector("#login-form button")

const onLoginSubmit = (event) => {
    event.preventDefault();
    const username = loginInput.value;

    // js에서 폼 부분등을 삭제하는 조건
    // 1. HTML을 삭제한다.
    // 2. CSS를 이용해서 안보이게 한다.

    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);


}

loginForm.addEventListener("submit" , onLoginSubmit);
