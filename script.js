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

  // get current day and date
  const today = days[currentDate.getDay()];
  const thisMonth = months[currentDate.getMonth()];
  const dateToday = currentDate.getDate();
  const thisYear = currentDate.getFullYear();

  // get element
  const showCurrentDay = document.querySelector("#currentDay");
  const showCurrentDate = document.querySelector("#currentDate");

  // show date and day
  showCurrentDay.innerText = `${today},`;
  showCurrentDate.innerText = `${thisMonth} ${dateToday} ${thisYear}`;
}
showCurrentDate();

// task functionalities
function taskFunctionalities(totalTask, completedTask) {
  // get data
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
  if (convertedTaskLength === 0) {
    alert(`Congrats!! You have complete all the current task`);
  }
}

// add history and btn disable function
function addHistoryFunctionalities(historyContainer, cardTitle, cardBtn) {
  // get data
  const container = document.getElementById(historyContainer);
  const title = document.getElementById(cardTitle).innerText;
  const btn = document.getElementById(cardBtn);
  const presentTime = new Date();
  const formattedTime = presentTime.toLocaleString("en-us", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  btn.disabled = true;
  btn.classList.remove("bg-blue-600");
  btn.classList.add("bg-blue-300");

  const history = document.createElement("p");
  history.classList.add("p-3", "bg-slate-200", "rounded-md");
  history.innerText = `You have Complete The Task ${title} at ${formattedTime}`;
  container.appendChild(history);
}

document.querySelector("#cardOneBtn").addEventListener("click", function (e) {
  e.stopPropagation();
  alert("Board update successfully");
  taskFunctionalities("assignedTaskNumber", "completeTask");
  addHistoryFunctionalities("historyContainer", "cardOneTitle", "cardOneBtn");
});

document.querySelector("#cardTwoBtn").addEventListener("click", function (e) {
  e.stopPropagation();
  alert("Board update successfully");
  taskFunctionalities("assignedTaskNumber", "completeTask");
  addHistoryFunctionalities("historyContainer", "cardTwoTitle", "cardTwoBtn");
});

document.querySelector("#cardThreeBtn").addEventListener("click", function (e) {
  e.stopPropagation();
  alert("Board update successfully");
  taskFunctionalities("assignedTaskNumber", "completeTask");
  addHistoryFunctionalities(
    "historyContainer",
    "cardThreeTitle",
    "cardThreeBtn"
  );
});

document.querySelector("#cardFourBtn").addEventListener("click", function (e) {
  e.stopPropagation();
  alert("Board update successfully");
  taskFunctionalities("assignedTaskNumber", "completeTask");
  addHistoryFunctionalities("historyContainer", "cardFourTitle", "cardFourBtn");
});

document.querySelector("#cardFiveBtn").addEventListener("click", function (e) {
  e.stopPropagation();
  alert("Board update successfully");
  taskFunctionalities("assignedTaskNumber", "completeTask");
  addHistoryFunctionalities("historyContainer", "cardFiveTitle", "cardFiveBtn");
});

document.querySelector("#cardSixBtn").addEventListener("click", function (e) {
  e.stopPropagation();
  alert("Board update successfully");
  taskFunctionalities("assignedTaskNumber", "completeTask");
  addHistoryFunctionalities("historyContainer", "cardSixTitle", "cardSixBtn");
});

// clear history
function clearHistory() {
  document
    .getElementById("clearHistoryBtn")
    .addEventListener("click", function (e) {
      e.stopPropagation();
      document.getElementById("historyContainer").innerHTML = "";
    });
}
clearHistory();

// navigate to blog.html

document
  .getElementById("blogQuestions")
  .addEventListener("click", function (e) {
    e.stopPropagation;
    window.location.href = "./blog.html";
  });
