var random = Math.floor(Math.random() * 100);
var alertMessage = document.getElementById("alert");
var resultMessage = document.getElementById("result");
var turn;
var round;
var count = 0;
function guess() {
    var numberguess = parseInt(document.getElementById("number").value);
    if (numberguess < 1 || numberguess == null || !Number.isInteger(numberguess)) {
        alertMessage.innerHTML = "Please reenter";
    }
    else {
        if (numberguess > random) {
        alertMessage.innerHTML = "Number is too big";
    }
    else if (numberguess < random) {
        alertMessage.innerHTML = "Number is too small";
    }
    else {
        alertMessage.innerHTML = "Congrats! You guessed it!"
    }
    resultMessage.innerHTML += `Guess number ${count} is ${numberguess}`+ "</br>"
    turn++;
    round--;
}
    if (round == 0){
    button.disabled = true; //chinh lai thanh 10 lan
    }
}
