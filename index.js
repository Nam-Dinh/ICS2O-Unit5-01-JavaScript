// JavaScript File
function numberguess() {
    let mynumber = Math.random() * 6 + 1;
    mynumber = Math.floor(mynumber);
    
    let guessednumber;
    guessednumber = document.getElementById("textbox").value;
    
    if (guessednumber < mynumber) {
        alert ("This is not the number I'm thinking of.");
    }
    if (guessednumber > mynumber) {
        alert ("This is not the number I'm thinking of.");
    }
    if (guessednumber == mynumber){
         alert ("Congrats! This is the number I'm thinking of!!");
    }
}