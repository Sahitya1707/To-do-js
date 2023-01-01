let inputName = document.querySelector(".add-task");
const submit = document.querySelector(".submit");
let deleteBtn = Array.from(document.querySelectorAll(".delete"));
let showInputedToDoList = document.querySelector(".todo-list-name");
let getInputedData;
let nameDelete;
let maximumItem = document.querySelector(".maximum-item");
const reset = document.querySelector(".reset");
let allToDo;
// console.log(nameDelete);

function toDoList() {
  //   console.log(inputName);
  getInputedData = inputName.value.toUpperCase();
  //   console.log(getInputedData);
  //   console.log(inputName.placeholder);
  inputName.value = "";
  showInputedToDoList.innerHTML += `  
   <div class="name-delete">
                    <div class="todo-name">${getInputedData} </div><button class="delete">Delete</button>
                </div>`;
  nameDelete = Array.from(document.querySelectorAll(".name-delete"));
  //   inputName.placeholder = "Add The Task";
  //   console.log(getInputedData);
  //   console.log(nameDelete);
  //   console.log(showInputedToDoList);
  if (nameDelete.length === 6) {
    inputName.disabled = true;
    reset.classList.remove("hidden");
    // inputName.keydown(function (event) {
    //   event.preventDefault();
    //   // return false;
    // });
    showInputedToDoList.innerHTML += ` `;
    maximumItem.classList.remove("hidden");
  }
  deleteBtn = Array.from(document.querySelectorAll(".delete"));
  //   console.log(deleteBtn);
  deleteBtn.forEach(function (e, i) {
    // console.log(e, i);
    e.addEventListener("click", function () {
      //   console.log(i);
      nameDelete[i].remove();
    });
  });
}
reset.addEventListener("click", function () {
  nameDelete = Array.from(document.querySelectorAll(".name-delete"));
  inputName.disabled = false;
  maximumItem.classList.add("hidden");
  nameDelete.forEach(function (e) {
    // console.log(nameDelete);
    e.remove();
  });
  reset.classList.add("hidden");
  //   console.log(nameDelete);
});
// console.log(deleteBtn);
submit.addEventListener("click", toDoList);
document.addEventListener("keydown", function (e) {
  //   if (e.key === "Enter") {
  //     // toDoList();
  //   }
});
