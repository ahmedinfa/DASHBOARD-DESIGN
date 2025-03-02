let hour = new Date().getHours();
const minute = new Date().getMinutes();
const second = new Date().getSeconds();
if (hour >= 12) {
  const history = document.createElement("p");
  history.classList.add("p-3", "bg-slate-200", "rounded-md");
  history.innerText = `You have Complete The Task ${title} at ${hour} : ${minute} : ${second} PM`;
  container.appendChild(history);
} else {
  const history = document.createElement("p");
  history.classList.add("p-3", "bg-slate-200", "rounded-md");
  history.innerText = `You have Complete The Task ${title} at ${hour} : ${minute} : ${second} AM`;
  container.appendChild(history);
}
