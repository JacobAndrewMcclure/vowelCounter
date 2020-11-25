let userInput;
let userArray = [];
let vowelCounter = 0;

function vowelCount() {
    //assign userinput to variable
    userInput = document.getElementById("inputField").value;
    //turn userinput into array
    userArray = userInput.split("");
    //loop through each letter in array
    for (i = 0; i < userArray.length; i++) {
        //if it's a lowercase vowel we add to vowel counter
        if (userArray[i] == "a" || userArray[i] == "e" || userArray[i] == "i" 
            || userArray[i] == "o" || userArray[i] == "u") {
            vowelCounter++;
        //if it's an uppercase vowel we add to vowel counter
        } else if (userArray[i] == "A" || userArray[i] == "E" || userArray[i] == "I" 
        || userArray[i] == "O" || userArray[i] == "U") {
            vowelCounter++;
        }
    }
    console.log("vowels = " + vowelCounter);
    //alert to display vowel count
    alert("There are " + vowelCounter + " vowels in your sentence!")
    //clear user input
    document.getElementById("inputField").value = "";
    //reset vowel counter
    vowelCounter = 0;
}