//Add a keyup listener on the first input field, so that once you type a letter in this field, it goes into the <span id="display-firstname">. The content of the field and the span should always remain the same.
const firstInput = document.querySelector('#firstname');
const firstDisplay = document.querySelector('#display-firstname');
function cpFirstName(event) {
    event.preventDefault();
    const newFirstName = event.target.value;
    const firstDisplay = document.querySelector('#display-firstname');
    firstDisplay.innerHTML = newFirstName;

}
firstInput.addEventListener('keyup', cpFirstName);