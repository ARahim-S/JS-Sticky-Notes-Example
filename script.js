const addButton = document.querySelector("#add_note");
const clearButton = document.querySelector("#clear_note");
const modal = document.querySelector("#modal");
const modalHide = document.querySelector("#hide");
const userIput = document.querySelector("#user_input");
const allNotes = document.querySelector("#all_notes");
let allNotesAll;

addButton.addEventListener("click", () => {
  modal.style.display = "block";
});

modalHide.addEventListener("click", () => {
  modal.style.display = "none";
});

clearButton.addEventListener("click", () => {
  allNotes.innerHTML = "";
});

function addNewNote(e) {
  if (e.key != "Enter") return;
  const newMessage = userIput.value;

  const html = `<div class="note" style = "margin:${randomNumber(10, -10)}px;
  background-color:rgb(${randomNumber(255, 0)},${randomNumber1(
    255,
    0
  )},${randomNumber2(255, 0)});
  transform:rotate(${randomNumber(10, -10)}deg)">
  <div class="details"><h1>${newMessage}</h1></div>
  </div>`;

  allNotes.innerHTML += html;
  allNotesAll = document.querySelectorAll(".note");
  console.log(allNotesAll);

  allNotesAll.forEach((note) =>
    note.addEventListener("dblclick", () => note.remove())
  );
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function randomNumber1(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function randomNumber2(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

userIput.addEventListener("keydown", addNewNote);
