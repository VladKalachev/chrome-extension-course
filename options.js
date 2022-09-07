const nameInput = document.getElementById("name-input");
const saveBtn = document.getElementById("save-btn");

saveBtn.addEventListener("click",() => {
 console.log(nameInput.value);
})