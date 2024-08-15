const list = document.querySelector('ul')

// Add listItem 
function newElement() {
  let input = document.getElementById('listInput');
  // Check for non empty input then add new listItem
  if (input.value) {
    list.insertAdjacentHTML(
      "afterbegin",
      `<li class="listItem">${input.value}<span class="close">&#215;</span></li>`
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
  // Toggle checkmark on listItem
  if (String(event.target.className).includes("listItem")) {
    event.target.classList.toggle('checked');
  }
  // Remove list item on X click
  if (String(event.target.className).includes("close")) {
      event.target.parentElement.remove();
  }
});
