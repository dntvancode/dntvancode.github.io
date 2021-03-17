// alert("Main.js");
// // phím tắt shiff option f
// //chạy từ trên xuống trái sang phải
// //đọc debug ở trong console (dev tools)
// console.log("Hello.js");

// /*
//     1.Number
//      -so nguyen 
//      -so thuc
//      -NaN (not a real number)

//     2.String
//     -'đặt trong dấu nháy đơn
//     -"đặt trong dấu nháy kép"
//     -`Đặt trong dấu backtick ${1-

//   chỉ có phép cộng ghép đc 2 phần tử

//     3.Boolean - 2 giá trị true/false

//     4.null
//     5.undefined- chưa đc đặt tên thì mang giá trị undefined

//   ** Hàm số **/
//  function sendEmail(){
//    console.log("This is a function")
//  }

//  sendEmail();

//  function getAMessage(from, message = "Không có nội dung"){
//    console.log(from + ": " + message);

//  }
//  getAMessage ('Robin', 'hi')
//  getAMessage ("John");

//  function getABox(){
//    return "This is a box"
//  }
//  let box = getABox();
console.log('Xin chào các bạn');

function sayHi(name){
  console.log('Xin chào '+name);
}
sayHi('Van')

function sayHi2(name2){
  console.log(`Xin chào "${name2}"`)
}
sayHi2('Van')
function sum(a,b){
  return a+b;
}
let result= sum(2,3);
console.log(result);

function binhphuong(b){
  return b*b;
}
let result2= binhphuong(5);
console.log(result2);

function century(x){
  return x;
}
let time = century(2021);
console.log (time)


//Bai tap ve nha//
function convertTemp(c){
 var celcius = c*1.8;
 var farenheit = celcius + 32;
 return farenheit;
}
let temp = convertTemp(22);
console.log(temp);


