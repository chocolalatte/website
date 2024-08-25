// Declare variables for DOM objects
const list = document.querySelector('ul')
const input = document.getElementById('listInput');
const itemsXHR = new XMLHttpRequest();


// Add list item
function addItem(a) {
  let li = document.createElement("li");
  let str = document.createTextNode(String(a));
  li.appendChild(str);
  li.insertAdjacentHTML(
    "beforeend",
    `<span class="close">&#215;</span>`
  )
  list.prepend(li);
}

// Create new list item
function newItem() {
  if (input.value) {
    addItem(input.value);
    // Reset input
    input.value = '';
  
  // Prompt user if item has no name
  } else {
    alert("Enter item name");
  }
} 

// Click event listener
list.addEventListener('click', event => {
  // Toggle checkmark on list item
  if (event.target.tagName === "LI") {
    event.target.classList.toggle('checked');
  }
  // Remove list item on X click
  if (String(event.target.className).includes("close")) {
      event.target.parentElement.remove();
  }
});

// XHR for getting list items
itemsXHR.onload = () => {
  var listEnties = JSON.parse(itemsXHR.responseText);
  // Add each item to list
  listEnties.forEach(entry => addItem(entry.name));
}
// Open and send itemsXHR
itemsXHR.open('GET', '../list.json');
itemsXHR.send();