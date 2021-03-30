var day = new Date();
var year = day.getFullYear();
function ageCount() {
    var birthyear = document.getElementById("age").value;
    if (birthyear <= 0 || birthyear > year) {
        message = "Invalid"
    }
    else {
        age = year - birthyear;
        if (age > 121) {
            message = "Too old";
        } else {
            message = `You are ${year - birthyear}.`
        }
    }
    document.getElementById("alert").innerHTML = message;
}
