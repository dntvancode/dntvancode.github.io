var random = Math.floor(Math.random() * 100);
var alertMessage = document.getElementById("alert");
var resultMessage = document.getElementById("result");

var count = 0;
function guess() {
    var numberguess = parseInt(document.getElementById("number").value);
    console.log(random, numberguess);

    if (!Number.isInteger(numberguess)) {
        alertMessage.innerHTML = "Enter a number!";
        alertMessage.style.color = "red";
    }
    else {
        count++;
        if (numberguess > random) {
            alertMessage.innerHTML = "Number is too big";
        }
        else if (numberguess < random) {
            alertMessage.innerHTML = "Number is too small";
        }
        else {
            alertMessage.innerHTML = "Congrats! You guessed it!"
        }
        resultMessage.innerHTML += `Guess number ${count} is ${numberguess} </br>`;
        button.disabled = true; //chinh lai thanh 10 lan
    }
}