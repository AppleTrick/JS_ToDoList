const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// 로그아웃 부분
const logoutDiv = document.querySelector("#logout");
const logoutButton = document.querySelector("#logout input");

// 명언 부분
const quoteDiv = document.querySelector("#quote");

// todo-list 부분
const toDoFormC = document.getElementById("todo-Div");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"





// 로그인 내용 보내기
const onLoginSubmit = (event) => {
    event.preventDefault();

    loginForm.classList.add(HIDDEN_CLASSNAME);  // 로그인폼은 숨기고
    quoteDiv.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    loginInput.value = "";
    localStorage.setItem(USERNAME_KEY,username);
    paintGreeting(username);
}

// 메인 화면 출력
const paintGreeting = (username) => {
    const saveUsername = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `${username} 님 환영합니다!`;
    logoutDiv.addEventListener("submit", logoutFunc);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    logoutDiv.classList.remove(HIDDEN_CLASSNAME);
    toDoFormC.classList.remove(HIDDEN_CLASSNAME);
}

// 로그 아웃함수
const logoutFunc = (event) => {
    event.preventDefault();
    localStorage.removeItem(USERNAME_KEY);
    greeting.classList.add(HIDDEN_CLASSNAME);
    logoutDiv.classList.add(HIDDEN_CLASSNAME);
    toDoFormC.classList.add(HIDDEN_CLASSNAME);
    IsLogin();
}


const IsLogin = () => {
    // 유저 로그인 내용 확인
    const saveUsername = localStorage.getItem(USERNAME_KEY);
    if(saveUsername === null){
        // show the Form
        loginForm.classList.remove(HIDDEN_CLASSNAME);
        quoteDiv.classList.remove(HIDDEN_CLASSNAME);
        loginForm.addEventListener("submit" , onLoginSubmit);
    }else{
        // show the Greeting
        paintGreeting(saveUsername);
        console.log("유저 존재함");
    }
}

IsLogin();






