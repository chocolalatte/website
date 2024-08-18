// Declare variables for DOM objects
const list = document.querySelector('ul')
const input = document.getElementById('listInput');
var itemsRQ = new XMLHttpRequest();
let checked;

// Add listItem 
function newItem() {
  // Creates new list item
  if (input.value) {
    list.insertAdjacentHTML(
      "afterbegin",
      `<li class="">${String(input.value)}<span class="close">&#215;</span></li>`
    );
  // Prompt user if item has no name
  } else {
    alert("Enter item name");
  }
  // Reset input
  input.value = '';
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
      listEnties.forEach(entry => {
        console.log(entry)
        item = list.insertAdjacentHTML(
          "afterbegin",
          `<li class="">${entry.name}<span class="close">&#215;</span></li>`
        );
        if (entry.isChecked) {
          item.classList.toggle('checked');
        }
      });
      // Log error message
    } else {alert(`XMLHttpRequest error: ${itemsRQ.status}`)}
  }
}
// Open and send itemsRQ
itemsRQ.open('GET', '../list.json');
itemsRQ.send();