const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

function updateStorage() {
    const inputBoxes = document.querySelectorAll(".input-box");
    const notesText = [];
    inputBoxes.forEach((box) => {
        notesText.push(box.querySelector("div[contenteditable='true']").innerHTML);
    });
    localStorage.setItem("notes", JSON.stringify(notesText));
}

window.addEventListener("DOMContentLoaded", () => {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
        const notesText = JSON.parse(storedNotes);
        notesText.forEach((text) => {
            const inputBox = document.createElement("div");
            const textArea = document.createElement("div");
            const img = document.createElement("img");

            inputBox.className = "input-box";
            textArea.setAttribute("contenteditable", "true");
            textArea.innerHTML = text;

            img.src = "images/delete.png";

            inputBox.appendChild(textArea);
            inputBox.appendChild(img);
            notesContainer.insertAdjacentElement('afterbegin', inputBox); // Insert at the beginning
        });
    }
}); localStorage

createBtn.addEventListener("click", () => {
    const inputBox = document.createElement("div");
    const textArea = document.createElement("div");
    const img = document.createElement("img");

    inputBox.className = "input-box";
    textArea.setAttribute("contenteditable", "true");

    img.src = "images/delete.png";

    inputBox.appendChild(textArea);
    inputBox.appendChild(img);
    notesContainer.insertAdjacentElement('afterbegin', inputBox); // Insert at the beginning
    textArea.focus();
    updateStorage();
});

notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
});

notesContainer.addEventListener("input", function (e) {
    if (e.target.classList.contains("input-box")) {
        updateStorage();
    }
});
