var random = Math.floor(Math.random() * 100);
var alertMessage = document.getElementById("alert");
var resultMessage = document.getElementById("result");
var button = document.getElementById("button");
var button2 = document.getElementById("button");
var turn = 1;
var round = 10;
var count = 0;
var remain = document.getElementById("remain");
function guess() {
    var numberguess = parseInt(document.getElementById("number").value);
    if (numberguess < 1 || numberguess == null || !Number.isInteger(numberguess)) {
        alertMessage.innerHTML = "Please reenter";
        alerttMessage.style.color = "red";
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
        resultMessage.innerHTML += `Guess number ${count} is ${numberguess}` + "</br>"
        turn++;
        round--;
    } remain.innerHTML = `You have ${round} left.`
    if (round == 0) {
        button.disabled = true; //chinh lai thanh 10 lan

    }
}
function reset(){
    location.reload();
}
