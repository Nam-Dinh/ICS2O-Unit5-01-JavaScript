// JavaScript File
function numberguess() {
    let mynumber = Math.random() * 6 + 1;
    mynumber = Math.floor(mynumber);
    
    let guessednumber;
    guessednumber = document.getElementById("textbox").value;
    
    if (guessednumber < mynumber) {
        alert (guessednumber + " is not the number I'm thinking of. The number I'm thinking of is "+ mynumber);
    }
    if (guessednumber > mynumber) {
        alert (guessednumber + " is not the number I'm thinking of. The number I'm thinking of is "+ mynumber);
    }
    if (guessednumber == mynumber){
         alert ("Congrats! " + guessednumber + " is the number I'm thinking of!!");
    }
}
