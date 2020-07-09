document.getElementById("addnote").addEventListener("click", (e) => {
  let addtxt = document.getElementById("addtxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  let nott = addtxt.value;
  notesObj.push(addtxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addtxt.value = "";
  localStorage;
  showNotes();
});

function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesOBJ = [];
  } else {
    notesOBJ = JSON.parse(notes);
  }
  let html = "";
  notesOBJ.forEach(function (element, index) {
    html += `
                <div class="noteCard card my-3 mx-3" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Note no. ${index + 1}</h5>
                        <p class="card-text">${element}.</p>
                        <button id="${index}" onclick="deleteNotes(this.id)" class="btn btn-primary">Delete</button>
                    </div>
                </div>`;
    notesElement = document.getElementById("notes");
    if (notes.length != 0) {
      notesElement.innerHTML = html;
    }
  });
}
document.addEventListener("DOMContentLoaded", () => {
  showNotes();
});

function deleteNotes(index) {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesOBJ = [];
  } else {
    notesOBJ = JSON.parse(notes);
  }
  notesOBJ.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesOBJ));
  showNotes();
}

let search = document.getElementById("searchTxt");
search.addEventListener("input", () => {
  let inputVal = search.value.toLowerCase();
  let notesCard = document.getElementsByClassName("noteCard");
  Array.from(notesCard).forEach((element) => {
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    if (cardTxt.includes(inputVal)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});
