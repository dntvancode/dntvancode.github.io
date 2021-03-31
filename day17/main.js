//bai 1: Tong giua 2 so nguyen 

function sumBetween(a, b) {
    var sum = 0;
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return 'Invalid';
    }
    if (a > b) {
        console.log(`There are ${num} in between`)
        for (var i = a - 1; i < a; i++) {
            for (var j = (b + 1); j > b; j++) {
                sum = i + j;
                document.getElementById("sumb").innerHTML= sum;
                return `Sum of numbers between = ${sum}.`
            }
        }
    } 
    else if (b > a) {
        for (var k = b - 1; i < b; k++) {
            for (var h = (a + 1); j > a; h++) {
                sum = k + h;
                document.getElementById("sumb").innerHTML= sum;
                return `Sum of numbers between = ${sum}.`
            }
        }
    }
}

//bài 2: chuyển chuỗi thành dạng Spinal case:HELLO world=> hello-world
function spinalCase(str) {
    return str.replace(/\s+|_+/g, '-').toLowerCase();
}
document.getElementById("spinal").innerHTML=spinalCase("HELLO world")

//bài 3: thời gian
function timeAdd(){

}
//bài 4: ốc sên
function snail(){
    var

}

//bài 5: sắp xếp để có số nhỏ nhất
function smallestNumber(x){
if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return 'Invalid';
}
else{
    var arr = Array.from(x)
    console.log(arr);
    var secondbiggest = arr.sort()[arr.length-2];
    if(arr[0]===0){
        arr[0]= secondbiggest;
        console.log(arr);
        document.getElementById("smallest").innerHTML = arr;
    }
    else{
        console.log(arr);
        document.getElementById("smallest").innerHTML = arr;
    }
    }
}

//bài 6: đổi màu nền
function change(){}
document.addEventListener("click",function change(){
    var random = Math.floor(Math.random()*16777215).toString(16);
    document.getElementsByTagName("body")[0].style.backgroundColor = "#" + random;
});
