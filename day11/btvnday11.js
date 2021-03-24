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

/**
 * function KiemtrasoHoanHao(a){
 * var sum = 0;
 * for (var i =1; i<=a/2; i++){
 * if (a%i === 0)
 *{
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
 * 
 * 
 */

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
function MaxThuHai(array) {
    var max = array[0];
    var max2 = array[0];
    for (var i = 0; i < array.length; i++) {
        if (max < array.length()) {
            max = array[i];
        }

    }
    for (var i = 0)

}

//bài 4
function firstOdd(array) {
    var odd = array[0];
    for (var i; )


}


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
