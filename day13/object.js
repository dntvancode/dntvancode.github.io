/**
 * Arrow function
 */

function sayHi(name){
    return `Hi ${name}`;
}

let hello = sayHi("Vân");

//viết rút gọn
let hello2 = (name)=>`Hi ${name}`;
console.log(hello2("A"))

//tính tổng của mạng
let sumArray = (arr)=>{
    let sum = 0;
    for (let i = 0; i<arr.length-1;i++){
        sum = sum + arr[i];
    }
    return sum;
}
console.log(sumArray([1,2,3,4]));

var binhPhuong = a => a*a; //function có 1 tham số thì k cần ngoặc

var chuoi  = ()=> "empty";

/**
 * Object
 */
let person = new Object;

//gán và thêm mới phần tử
person.name = "Vân";
console.log(person.name);

let animal = {
    name: "Fish",
    color: "Gray",
    "number feet": 2 //tên trong object nhiều hơn 1 từ phải đặt trong ngoặc kép
}
//truy cập thuộc tính của object
console.log(animal.color);
console.log(animal["number feet"]);
console.log(animal["name"]);
//key k được trùng nhau

//xoá phần tử
delete animal["number feet"];

console.log(animal);