const input = document.getElementById("todo_input");
const btn = document.getElementById("todo_btn");
const list = document.getElementById("list");

btn.addEventListener("click", () => {
  let element = document.createElement("li");
  element.textContent = input.value;
  element.setAttribute("onClick", "satyam(this)");
  list.appendChild(element);
});

function satyam(e) {
  e.className = "abc";
}
