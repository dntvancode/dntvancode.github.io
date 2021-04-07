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
// nếu a,b liên tiếp=> return
//a < b và b > a

//bài 2: chuyển chuỗi thành dạng Spinal case:HELLO world=> hello-world
function spinalCase(str) {
    return str.replace(/\s+|_+/g, '-').toLowerCase();
}
document.getElementById("spinal").innerHTML=spinalCase("HELLO world")
//dùng split và join

//bài 3: thời gian
function timeAdd(t){


}
timeAdd()
//truyền vào chuỗi theo dạng giờ phút giây - 3 biến
//giây: giờ *3600+ phút *60 + giây
//tổng giây+=x

//bài 4: ốc sên
function snail(){
    var

}
// chiều cao h, x tụt lên, y tụt xuống


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
//var random = Math.floor(Math.random()*16777215).toString(16);
document.addEventListener("click",function (){
   var letters = "0123456789ABCDEF".split('');
   var random = "#";
   for (var i = 0; i < 6; i++ ) {
       random += letters[Math.floor(Math.random() * 16)];
       document.getElementsByTagName("body")[0].style.backgroundColor = random;
    //đổi color cho tag name và classs name bằng vòng lặp for
    //else dùng querySelector{}//querySelectorAll[]erySelectorAll[]
   }
});
color.addEventListener("click", change);
change();
//colorname
//for 0->6 random 
