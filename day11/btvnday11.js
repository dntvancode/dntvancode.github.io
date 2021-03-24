//bài 1
function soHoanHao(n) {
    var array = [];
    var sum = 0;
    if ((n > 0 && n < 10000) && Number.isInteger(n) === true) {
        for (var i = 1; i < n / 2; i++) {
            if (n % i === 0) {
                sum = sum + i; // cộng với i sau mỗi vòng lặp
                console.log(i);
            }

        }
    }
    return;
}


 function KiemtrasoHoanHao(a){
 var sum = 0;
 for (var i =1; i<=a/2; i++){
 if (a%i === 0)
 {
     sum += i;
     console.log (i);
 }
if (sum ===a){
    console.log(`${a} là số hoàn hảo`);
    return true;
}
return false;
}
}


function inSoHoanHao(n){
    for (let i = 1; i<=n; i++){
        if (KiemtraSoHoanHao (i) == true){
            console.log(i);
        }
    }
}

//bài2
function MinMax(array) {
    var min = array[0];
    var max = array[0];
    for (var i = 0; i < array.length; i++) {
        if (max < array.length()) {
            max = array[i];
        }
        if (min > array.length()) {
            min = array[i];
        }
    }
    console.log("Giá trị lớn nhất là: " + max);
    console.log("Giá trị lớn nhất là: " + min);
}

//bài 3
function SecondMax(array) {
    var max ;
    var max2;
        if (array[0]>array[1]) {
            max = array[0];
            max2 = array[1];
        }
        else {
            max = array[1];
            max2 = array[0];
        }
    for (var i = 2; i< array.length(); i++){
        if (max <array[i]){
            max = array[i];
            max2 = max;
        }
        else if(max2< array[i]){
            max2 = array[i];
        } 
    }return `${max2} là số lớn thứ 2`;

}

//bài 4
function firstOdd(array) {

    for (var i in arr){
        if (array[i]%2===1||array[i]%2 ===-1){
            return `Index: ${i} - value: ${array[i]}`; //trả vị trí cuối cùng của số chẵn trong mảng
        }
    }
}
function lastEven(array){
    for(let i = array.length - 1; i >= 0; i--){

    }
}

var arr = [-3,2,0,5,7,8,9,10];
console.log(firstOdd(arr));
console.log(lastEven(arr));

//bài 5
//tính số giai thừa
function soGiaiThua(n) {
    var kq = 1;
    if (n < 0 || Number.IsInteger(n) === false) {
        return;
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    while (n > 1) {
        kq = kq * n;
        n--;
    }
    return kq;
}

//khi viết if else k nên trùng với nhau
