// Declare variables for DOM objects
const list = document.querySelector('ul')
const input = document.getElementById('listInput');


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

function fetchData(url) {
  return fetch(url)
    .then(checkStatus)
    .then(res => res.json())
    .catch(error => console.log("uh oh", error))
}

function generateItems(data) {
  data.forEach(item => addItem(item.name));
}

function checkStatus(response) {
  if (response.ok) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
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

window.onload = () => {
  fetchData('../list.json')
    .then(data => generateItems(data))
}