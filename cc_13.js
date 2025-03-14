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
// Example usage: Creating a new employ
ee card
// Call the function when you need to create a new employee card
createEmployeeCard('John Doe', 'Software Engineer');
createEmployeeCard('Jane Smith', 'Product Manager');
createEmployeeCard('Sam Johnson', 'Designer');

// task 3 
function highlight employeeCards () {
const employeeCards = document.querySelectAll('.employee-card');

const cardsArray = Array.from(employeeCards);

cardsArray.forEach(card => {
  card.style.backgroundColor = 'Royalblue';
  card.style.border = '2px solid #000';
});
}
updateEmployeeCards();
// task 4
function setupEventListeners() {
  const employeeContainer = document.getElementById('employeeContainer');

employeeContainer.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const cardToRemove = event.target.closest('.employee-card');
    cardToRemove.remove();
  }
  consol.log('An employee card was clicked!');
});
}
document.addEventListener('DOMContentLoaded', setupEventListeners);
// Task 5
function enableInlineEditing() {
  const employeeContainer = document.getElementById('employeeContainer');

employeeContainer.addEventListener('dblclick', (event) => {
  const card = event.target.closest('.employee-card');
  if (!card) return;
const nameElement = card.querySelector('h2');
  const positionelement = card.querySelector('p');

  const nameElement = document.createElement('input');
  nameInput.value = nameElement.textContent;
  const positionInput = document.createElement('input');
  positionInput.value = positionElement.textContent;
  const saveButton = document.createElement('button');
        saveButton.textContent = 'Save';
        card.appendChild(saveButton);

        saveButton.addEventListener('click', () => {
            nameElement.textContent = nameInput.value;
            positionElement.textContent = positionInput.value;

            card.replaceChild(nameElement, nameInput);
            card.replaceChild(positionElement, positionInput);
            saveButton.remove();
        });
    });
}
