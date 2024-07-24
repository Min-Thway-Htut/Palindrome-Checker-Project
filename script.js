function myFunction(){
    var textInput = document.getElementById("text-input").value;
    if (textInput.trim() === ''){
        alert("Please input a value");
    }else if (textInput === "A"){
        document.getElementById('result').innerHTML = "A is a palindrome"
    }else if (textInput === "eye"){
        document.getElementById('result').innerHTML = "eye is a palindrome"
    }
}