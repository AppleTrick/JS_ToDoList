const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];

// localstorage에 데이터저장
const saveToDos = () => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));

    // stringify => object 값을 string으로 변환
    // parse => string을 object 값으로 변환
}


// todoList 항목 추가
const handleToDoSubmit = (event) => {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text : newTodo,
        id: Date.now(), // 구분하기 위해 사용
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

// todoList 항목 삭제
const deleteTodo = (event) => {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((item) =>item.id !== parseInt(li.id) );
    saveToDos();
}

// todoList 화면에 구현
const paintToDo = (newTodoObj) => {
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    span.innerText = newTodoObj.text;
    const button = document.createElement("button");
    button.innerText = "❌"
    button.addEventListener("click", deleteTodo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}


// to-do-list 항목 추가시 발생되는 이벤트 추가
toDoForm.addEventListener("submit" , handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos);
    // console.log(parsedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}