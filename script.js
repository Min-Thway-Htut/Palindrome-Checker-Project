document.getElementById("check-btn").addEventListener("click", function() {
    const textInput = document.getElementById("text-input").value;
    const resultElement = document.getElementById("result");

    if (textInput === "") {
        alert("Please input a value");
        return;
    }

    // Function to clean the input by removing non-alphanumeric characters and making it lowercase
    function cleanText(str) {
        return str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    }

    // Function to check if the cleaned text is a palindrome
    function isPalindrome(str) {
        const cleanedStr = cleanText(str);
        const reversedStr = cleanedStr.split('').reverse().join('');
        return cleanedStr === reversedStr;
    }

    // Check if the input text is a palindrome
    const isTextPalindrome = isPalindrome(textInput);

    if (isTextPalindrome) {
        resultElement.textContent = `${textInput} is a palindrome`;
    } else {
        resultElement.textContent = `${textInput} is not a palindrome`;
    }
});