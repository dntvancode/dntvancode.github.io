// let btn = document.querySelectorAll("number")
let outputScreen =document.getElementById("screen")
function display(key){

    if (outputScreen.innerText =="0"){
        outputScreen.innerText = " ";
    }
    outputScreen.innerText += key;
    //dung chi duoc 1 lan
    if(outputScreen.innerText =="."){
        outputScreen.innerText=""
    }
}

function AC(){
    outputScreen.innerText = "0";
}
function equal(){
    let result = outputScreen.innerText.replaceAll("÷","/").replaceAll("×","*");
    outputScreen.innerText = eval(result);

}
