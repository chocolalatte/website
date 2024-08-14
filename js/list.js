// Close button
let nodeList = document.getElementsByName("LI");
let a;
for (a = 0; a < nodeList.length; a++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[a].appendChild(span);
}

let close = document.getElementsByClassName("close");
let b;
for (b = 0; b < close.length; b++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

// Add check
const list = document.querySelector('ul')
list.addEventListener('click', event => {
  if (String(event.target.className).includes("listItem")) {
    event.target.classList.toggle('checked');
  }
});

// AddButton
function newElement() {
  let input = document.getElementById('listInput');
  if (input.value === '') {
    alert("Enter item name");
  } else {
    list.insertAdjacentHTML(
      "afterbegin",
      `<li class="listItem">${input.value}<span class="close">&#215;</span></li>`
    );
  }
  input.value = '';

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
} 