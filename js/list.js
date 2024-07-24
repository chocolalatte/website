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
const list = document.getElementById("groceryList");
list.addEventListener('click', handleClick, false);

function handleClick(e) {
  if (e.target.matches('li')) {
    e.target.classList.toggle('checked');
  }
}

// AddButton
function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("listInput").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Enter item name");
  } else {
    document.getElementById("groceryList").appendChild(li);
  }
  document.getElementById("listInput").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
} 