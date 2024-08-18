// Declare variables for DOM objects
const list = document.querySelector('ul')
const input = document.getElementById('listInput');
var itemsRQ = new XMLHttpRequest();
let checked;


// Add list item
function addItem(a) {
  let li = document.createElement("li");
  let str = document.createTextNode(String(a));
  li.appendChild(str);
  li.insertAdjacentHTML(
    "beforeend",
    `<span class="close">&#215;</span>`
  )
  console.log(li.outerHTML)
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

// itemsRQ for getting list items
itemsRQ.onreadystatechange = function() {
  if (itemsRQ.readyState === 4) {
    // Check for errors
    if (itemsRQ.status === 200) {
      var listEnties = JSON.parse(itemsRQ.responseText);
      // Add items to list from list.json
      listEnties.forEach(entry => addItem(entry.name));
    // Log error message
    } else {alert(`XMLHttpRequest error: ${itemsRQ.status}`)}
  }
}
// Open and send itemsRQ
itemsRQ.open('GET', '../list.json');
itemsRQ.send();