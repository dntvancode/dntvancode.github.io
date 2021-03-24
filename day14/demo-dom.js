//getElementByID(tênID) để lấy ra phần tử có id tương ứng
//innerHTML là nội dung của element
document.getElementById("demo").innerHTML = "Xin chào các bạn, tôi là DOM";

// document.getElementbyClassName();
// document.getElementsByTagName();
// document.querySelector();

var hello = document.getElementById("demo");
hello.innerHTML = "Hello world";
hello.style.color = "blue";
hello.style.textAlign = "left";
hello.style.backgroundColor = "yellow";

function pressOnClick(){
    hello.innerHTML="Hi you";
    hello.style.color = "red";
}

 