
const clock = document.querySelector('#clock');

function currentTime() {
  const date = new Date();
  let hour = date.getHours();
  if (hour > 12) {
    hour = hour - 12;
  }
  hour = String(hour).padStart(2, '0');
  const minute = String(date.getMinutes()).padStart(2, '0');
  
  clock.innerText = `${hour}:${minute}`;
}

currentTime();
setInterval(currentTime, 1000);
