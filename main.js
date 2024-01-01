function removeWhitespaces() {
    const inputText = document.getElementById('inputText').value;
    const outputElement = document.getElementById('output');

    // Use a regular expression to replace all whitespaces with an empty string
    const result = inputText.replace(/\s/g, '');

    // Display the result in the output element
    outputElement.textContent = "Result: " + result;
}