const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const ul = document.querySelector("#saveTodoList");

const TODOS_KEY ="Todo";

function paintTodo(newTodo){    //2️⃣ todolist를 화면에 보여줌
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo.value;
    /* span.innerText = String(newTodo.value).padEnd(40, "\u00a0"); */
    li.id = newTodo.id;
    
    const button = document.createElement("button");
    button.innerText = "delete";
    button.id = "delButton";

    button.addEventListener("click", deleteTodo);   //3️⃣ button이 함수 안에서 선언된거라 함수 안에서 이벤트를 받아야함.

    li.appendChild(span);
    li.appendChild(button);
    ul.appendChild(li);
}

let todoArray = []; 

function deleteTodo (event){    //3️⃣-1 버튼을 눌렀을 때 해당 리스트가 삭제됨.
    const li = event.target.parentElement;
    /* function filtering (item){
        return item.id !== parseInt(li.id);
    }
    todoArray = todoArray.filter(filtering); */
    todoArray = todoArray.filter((item) => item.id !== parseInt(li.id));
    li.remove();
    saveTodo();
}

function saveTodo(){    //3️⃣-2 localStorage에 저장
    localStorage.setItem(TODOS_KEY, JSON.stringify(todoArray));
}

const savedTodos = localStorage.getItem(TODOS_KEY);


if(savedTodos){
    const parseTodos = JSON.parse(savedTodos);
    parseTodos.forEach(paintTodo);
    todoArray = parseTodos;
}

function handleToDoSubmit(event){   //1️⃣ submit됐을 때 새로고침되는 것을 막고, newTodo를 array에 저장, input 칸을 비워줌.
    event.preventDefault();

    const newTodo = todoInput.value;
    todoInput.value = "";
    
    const newTodoObj = {
        id: Date.now(),
        value: newTodo,
    };
    todoArray.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodo();
};

todoForm.addEventListener("submit", handleToDoSubmit);

const todoScreen = document.querySelector("#saveTodoList");
const homeButton = document.querySelector("#home");


function hiddenTodoList(){
    todoScreen.classList.toggle("hidden"); 
}


homeButton.addEventListener("click", hiddenTodoList);
