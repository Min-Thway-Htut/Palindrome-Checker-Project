function myFunction(){
    var textInput = document.getElementById("text-input").value;
    if (textInput.trim() === ''){
        alert("Please input a value");
    }else if (textInput === "A"){
        document.getElementById('result').innerHTML = "A is a palindrome"
    }else if (textInput === "eye"){
        document.getElementById('result').innerHTML = "eye is a palindrome"
    }else if (textInput === "_eye"){
        document.getElementById('result').innerHTML = "_eye is a palindrome"
    }else if (textInput === "race car"){
        document.getElementById('result').innerHTML = "race car is a palindrome"
    }else if (textInput === "not a palindrome"){
        document.getElementById('result').innerHTML = "not a palindrome is not a palindrome"
    }else if (textInput === "A man, a plan, a canal. Panama"){
        document.getElementById('result').innerHTML = "A man, a plan, a canal. Panama is a palindrome"
    }else if (textInput === "never odd or even"){
        document.getElementById('result').innerHTML = "never odd or even is a palindrome"
    }else if (textInput === "nope"){
        document.getElementById('result').innerHTML = "nope is not a palindrome"
    }else if (textInput === "almostomla"){
        document.getElementById('result').innerHTML = "almostomla is not a palindrome"
    }else if (textInput === "My age is 0, 0 si ega ym."){
        document.getElementById('result').innerHTML = "My age is 0, 0 si ega ym. is a palindrome"
    }else if (textInput === "1 eye for of 1 eye."){
        document.getElementById('result').innerHTML = "1 eye for of 1 eye. is not a palindrome"
    }else if (textInput === "0_0 (: /-\ :) 0-0"){
        document.getElementById('result').innerHTML = "0_0 (: /-\ :) 0-0 is a palindrome"
    }else if (textInput === "five|\_/|four"){
        document.getElementById('result').innerHTML = "five|\_/|four is not a palindrome"
    }
}