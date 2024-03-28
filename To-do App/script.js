const toDoList = document.querySelector("#toDoList");
const input = document.querySelector("#input");
const first = document.querySelector(".first")
input.addEventListener("keyup", (event) => {
  console.log(event);
  console.log(event.key);
  if (event.key == "Enter") {
   first.remove()
    console.log(input.value);
    addItem(input.value);
    input.value = "";
  }
});

const addItem = (item) => {
  let li = document.createElement("li");
  li.innerHTML = `
         ${item}
        <img src="/assests/cross.svg" alt="" width="16px">
    `;

  li.addEventListener("click", () => {
    li.classList.toggle("done");
  });
  li.querySelector("img").addEventListener("click", () => {
    li.remove();
  });
  toDoList.appendChild(li);
};
document
  .querySelector("li")
  .querySelector("img")
  .addEventListener("click", () => {
    document.querySelector("li").remove();
  });
document.querySelector("li").addEventListener("click", () => {
  document.querySelector("li").classList.toggle("done");
});
