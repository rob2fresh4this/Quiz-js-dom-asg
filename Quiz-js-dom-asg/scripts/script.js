// Made by: robert grijalva
// i wrote notes on the code to help me with pseudocode / i hope it helps you too

// References to inputs and buttons
let boxNumber = document.getElementById('user-input-box-number');
let boxColor = document.getElementById('user-input-color');
let confirmButton = document.getElementById('Change-Color');
let resetButton = document.getElementById('Reset-all-Box-Colors');

// Event listener to change the color of a specific box
confirmButton.addEventListener('click', function () {
    const boxIndex = parseInt(boxNumber.value.trim()); // Get box number and convert to integer/ this .trim() is pritty cool for removing spaces
    const color = boxColor.value.trim().toLowerCase(); // Get color in lowercase 
    const boxes = document.querySelectorAll('.color'); // Select all boxes with the 'color' class

    if (boxIndex > 0 && boxIndex <= boxes.length) {
        const box = boxes[boxIndex - 1]; // Get the specific box (1-based index)
        // Valid colors list
        const validColors = ['red', 'blue', 'purple', 'brown', 'yellow'];
        if (validColors.includes(color)) {// Check if the color is valid
            box.style.backgroundColor = color; // Change the box color
        } else {
            alert('Please enter a valid color: Red, Blue, Purple, Brown, Yellow');
        }
    } else {
        alert('Please enter a valid box number.');
    }
});

// Event listener to reset all box colors
resetButton.addEventListener('click', function () {
    const boxes = document.querySelectorAll('.color'); // Select all boxes with the 'color' class
    boxes.forEach(box => {
        box.style.backgroundColor = ''; // Reset background color
    });
});
