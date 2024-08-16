// Declare variables for DOM objects
const list = document.querySelector('ul')
const input = document.getElementById('listInput');

// Add listItem 
function newElement() {
  // Creates new list item
  if (input.value) {
    list.insertAdjacentHTML(
      "afterbegin",
      `<li class="">${input.value}<span class="close">&#215;</span></li>`
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
