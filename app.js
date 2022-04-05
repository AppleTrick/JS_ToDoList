// const loginForm = document.getElementById("login-form");

// # 1
// const loginInput = loginForm.querySelector('input');
// const loginButton = loginForm.querySelector('button');

const loginInput = document.querySelector("#login-form input")
const loginButton = document.querySelector("#login-form button")

const onLoginBtnClick = () => {
    const username  = loginInput.value;
    if(username === ""){
        alert("Please write your name");
    }else if(username.length > 15){
        alert("Yout name is too long");
    }
}

loginButton.addEventListener("click" , onLoginBtnClick)