const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const logoutDiv = document.querySelector("#logout");
const logoutButton = document.querySelector("#logout input");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"





// 로그인 내용 보내기
const onLoginSubmit = (event) => {
    event.preventDefault();

    loginForm.classList.add(HIDDEN_CLASSNAME);  // 로그인폼은 숨기고
    const username = loginInput.value;
    loginInput.value = "";
    localStorage.setItem(USERNAME_KEY,username);
    paintGreeting(username);
}

// 메인 화면 출력
const paintGreeting = (username) => {
    const saveUsername = localStorage.getItem(USERNAME_KEY);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
    logoutDiv.addEventListener("submit", logoutFunc);
    logoutDiv.classList.remove(HIDDEN_CLASSNAME);

}

// 로그 아웃함수
const logoutFunc = (event) => {
    event.preventDefault();
    localStorage.removeItem(USERNAME_KEY);
    greeting.classList.add(HIDDEN_CLASSNAME);
    logoutDiv.classList.add(HIDDEN_CLASSNAME);
    IsLogin();
}

// 유저 로그인 내용 확인
const saveUsername = localStorage.getItem(USERNAME_KEY);

const IsLogin = () => {
    if(saveUsername === null){
        // show the Form
        loginForm.classList.remove(HIDDEN_CLASSNAME);
        loginForm.addEventListener("submit" , onLoginSubmit);
    }else{
        // show the Greeting
        paintGreeting(saveUsername);
    }
}

IsLogin();






