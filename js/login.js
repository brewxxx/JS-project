const userInfo = document.querySelector("#login");
const greeting = document.querySelector("#greeting");
const loginForm = document.querySelector("#login-form");

const HIDDEN_KEY = "hidden";
const USER_KEY = "userName";

function showGreeting() {
    loginForm.classList.add(HIDDEN_KEY);
    greeting.innerText = `Hello, ${userInfo.value}`;
    greeting.classList.remove(HIDDEN_KEY);
}

function saveUserInfo() {
    localStorage.setItem(USER_KEY, userInfo.value);
}

function checkUser(){
    const savedUser = localStorage.getItem(USER_KEY);
    if(savedUser !== null){
        loginForm.classList.add(HIDDEN_KEY);
        greeting.innerText = `Hello, ${savedUser}`;
        greeting.classList.remove(HIDDEN_KEY);
    }
}

checkUser();

function preventSubmit(event){
    event.preventDefault();
    showGreeting();
    saveUserInfo();
}

loginForm.addEventListener("submit", preventSubmit);
