const notesContainer = document.querySelector(".Note-container");
const createbtn = document.querySelector("button");

function shownnotes() {
    notesContainer.innerHTML = localStorage.getItem("notes") || "";
}
shownnotes();

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createbtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.classList.add("input");
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
    updateStorage(); // Update storage after adding new note
});

notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    } else if (e.target.tagName === "p") {
        updateStorage();
    }
});
