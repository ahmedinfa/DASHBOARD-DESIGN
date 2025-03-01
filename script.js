// random color generator
document.querySelector("#themeBtn").addEventListener("click", function (e) {
  e.stopPropagation();
  function getRandomColor() {
    const main = document.querySelector("#main");
    const red = Math.floor(Math.random() * 255 + 1);
    const green = Math.floor(Math.random() * 255 + 1);
    const blue = Math.floor(Math.random() * 255 + 1);
    main.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  }
  getRandomColor();
});

// show current date
function showCurrentDate() {
  const currentDate = new Date();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const today = days[currentDate.getDay()];
  const thisMonth = months[currentDate.getMonth()];
  const dateToday = currentDate.getDate();
  const thisYear = currentDate.getFullYear();

  const showCurrentDay = document.querySelector("#currentDay");
  const showCurrentDate = document.querySelector("#currentDate");

  showCurrentDay.innerText = `${today},`;
  showCurrentDate.innerText = `${thisMonth} ${dateToday} ${thisYear}`;
}
showCurrentDate();

function taskFunctionalities(totalTask, completedTask) {
  const taskLength = document.getElementById(totalTask).innerText;
  const completeTask = document.getElementById(completedTask).innerText;

  // converted values
  let convertedTaskLength = parseInt(taskLength);
  let convertedCompleteTask = parseInt(completeTask);

  // update the values
  convertedTaskLength--;
  convertedCompleteTask++;
  document.getElementById(totalTask).innerText = `${convertedTaskLength}`;
  document.getElementById(completedTask).innerText = `${convertedCompleteTask}`;
}

document.querySelector("#cardOneBtn").addEventListener("click", function (e) {
  e.stopPropagation();
  taskFunctionalities("assignedTaskNumber", "completeTask");
});
