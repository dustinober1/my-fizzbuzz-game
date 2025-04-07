// Wait for the HTML document to be fully loaded and parsed
document.addEventListener('DOMContentLoaded', () => {

    // Get references to the necessary HTML elements
    const limitInput = document.getElementById('limit');
    const generateBtn = document.getElementById('generateBtn');
    const outputDiv = document.getElementById('output');

    // Function to perform the FizzBuzz logic and update the DOM
    function generateFizzBuzz() {
        // Clear previous results and error messages
        outputDiv.innerHTML = '';
        outputDiv.classList.remove('error-message'); // Remove error class if present

        // Get the user-provided limit and convert it to an integer
        const limit = parseInt(limitInput.value, 10);

        // --- Input Validation ---
        if (isNaN(limit)) {
            outputDiv.textContent = 'Please enter a valid number.';
            outputDiv.classList.add('error-message');
            return; // Stop execution
        }
        if (limit <= 0) {
            outputDiv.textContent = 'Please enter a number greater than 0.';
            outputDiv.classList.add('error-message');
            return; // Stop execution
        }
        // Optional: Add a reasonable upper limit to prevent browser freezing
        if (limit > 10000) {
             outputDiv.textContent = 'Limit too high! Please enter a number up to 10,000.';
             outputDiv.classList.add('error-message');
             return; // Stop execution
        }

        // --- FizzBuzz Generation ---
        const resultsList = document.createElement('ul'); // Create an unordered list

        for (let i = 1; i <= limit; i++) {
            const listItem = document.createElement('li'); // Create a list item for each number
            let text = '';
            let className = '';

            if (i % 15 === 0) { // Check for divisibility by 15 first
                text = 'FizzBuzz';
                className = 'fizzbuzz';
            } else if (i % 3 === 0) {
                text = 'Fizz';
                className = 'fizz';
            } else if (i % 5 === 0) {
                text = 'Buzz';
                className = 'buzz';
            } else {
                text = i; // The number itself
                className = 'number';
            }

            listItem.textContent = text; // Set the text content
            listItem.classList.add(className); // Add the appropriate CSS class
            resultsList.appendChild(listItem); // Add the list item to the list
        }

        // Append the generated list to the output container
        outputDiv.appendChild(resultsList);
    }

    // --- Event Listeners ---

    // Add event listener to the button to generate FizzBuzz on click
    generateBtn.addEventListener('click', generateFizzBuzz);

    // Optional: Allow pressing Enter in the input field to trigger generation
    limitInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            generateFizzBuzz(); // Call the same function
        }
    });

    // Optional: Generate initial sequence on page load (e.g., up to the default value)
    // generateFizzBuzz(); // Uncomment this line if you want initial results

}); // End of DOMContentLoaded listener
