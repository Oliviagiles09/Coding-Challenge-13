// Task 2
function createEmployeeCard(name, position) {
// Create a new div for the employee card
const card = document.createElement('div');
card.setAttribute('class', 'employee-card'); // set class for styling
card.setAttribute('id', employee-${Date.now()}'); // saet a unique ID for the card using timestamp

// create employee name heading 
const nameElement = document.createElement('h2');
nameElement.textContext = name; // set the employee's name

// create the employee position paragraph 
const positionElement = document.createElement('p');
positionElement.textContent = position;

const removeButton = document.createElement('button');
removeButton.textContent = 'Remove';
removeButton.setAttribute('class', 'remove-button');

// add event listener to remove the card 
removeButton.addEventListener('click', function () {
  card.remove();
});

// append the elements to the card
card.appendChild(nameElement);
card.appendChild(positionElement);
card.appendChild(removeButton);

// find the employee container and append the card
const employeeContainer = document.getElementById('employee-container');
employeeContainer.appendChild(card);
}
// Example usage: Creating a new employee card
// Call the function when you need to create a new employee card
createEmployeeCard('John Doe', 'Software Engineer');
createEmployeeCard('Jane Smith', 'Product Manager');
createEmployeeCard('Sam Johnson', 'Designer');
