const userInfo = document.querySelector('#login');
const greeting = document.querySelector('#greeting');
const loginForm = document.querySelector('#login-form');

const HIDDEN_KEY = 'hidden';
const USER_KEY = 'userName';

function showGreeting(hello) {
  loginForm.classList.add(HIDDEN_KEY);
  greeting.innerText = `${hello}, ${userInfo.value}`;
  greeting.classList.remove(HIDDEN_KEY);
}

function saveUserInfo() {
  localStorage.setItem(USER_KEY, userInfo.value);
}

function checkUser(hello) {
  const savedUser = localStorage.getItem(USER_KEY);
  if (savedUser !== null) {
    loginForm.classList.add(HIDDEN_KEY);
    greeting.innerText = `${hello}, ${savedUser}`;
    greeting.classList.remove(HIDDEN_KEY);
  }
}


function sayHello() {
    const date = new Date();
    const hour = date.getHours();
    let hello = 'hello';
    if (hour >= 21 || hour < 6) {
        hello = 'Good night';
    } else if (hour >= 12 && hour < 18) {
        hello = 'Good afternoon';
    } else if (hour >= 6 && hour < 12) {
        hello = 'Good morning';
    } else {
        hello = 'Good evening';
    }
    checkUser(hello);
    console.log(hour);
}

sayHello();

function preventSubmit(event) {
  event.preventDefault();
  showGreeting();
  saveUserInfo();
  sayHello();
}

loginForm.addEventListener('submit', preventSubmit);
