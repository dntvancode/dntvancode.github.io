function bmiRate() {
    var h = document.getElementById("height").value;
    var w = document.getElementById("weight").value;
    var result = document.getElementById("result");
    var r;
    var rate;
    if (h <= 100 || w <= 20 || h >= 200 || w >= 200) {
        result.innerHTML = "Invalid";
    }
    else {
        r= w / ((h / 100) * (h / 100));
        rate = r.toFixed(2);
        if (rate <= 18.5) {
            result.innerHTML = `Your BMI is ${rate}. You are in the underweight range`;
        }
        else if (rate <= 25) {
            result.innerHTML = `Your BMI is ${rate}. You are in the healthy range`;
        }
        // else if (rate < 29.9) {
        //     result.innerHTML = `Your BMI is ${rate}. You are in the overweight range`;
        // }
        // else if (rate < 39.9) {
        //     result.innterHTML = `Your BMI is ${rate}. You are in the obsese range`;

        // }

    }
    check.disabled = true;
}
function resetButton(){
    document.getElementById("reset").reset();
}
