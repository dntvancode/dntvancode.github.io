//bài 1
// tạo list tên tuổi
let student = [{
    name: "A",
    age: 20,
},
{
    name: "B",
    age: 24,
},
{
    name: "C",
    age: 27,
},
{
    name: "D",
    age: 22,
},
{
    name: "E",
    age: 32,
}]
function AvgAge(array){
    var sum =0;
    for (let i of array) {
     sum = sum +i.age;
    }
    return `Độ tuổi trung bình của các sinh viên là: `+ sum/array.length;
}


//bài 2 lọc tuổi theo thứ tự tăng dần
student.sort(function (a,b){
    return `Tuổi học sinh theo thứ tự: `+ a.age-b.age;
});
//hàm không dùng sort
function sortAge(array2){
    let min = array2[0];
    for (i = 0; i<array2.length; i++){
        for (k = i+1; k<array2.length; k++){
            if(array2[i].age> array2[i].age){
                min = array2[k];
                array2[k]= array2[i];
                array2[i] = min;
            }
        }
    }  
    console.log(array2)  
}
sortAge(student)

//bài 3 lọc dữ liệu sai
let values = [ false, NaN, 24,0, " ", undefined, null, "abc", true]
function cleanArray(array3){
    var clean = [];
    for (var i = 0; i< array3.length; i ++){
        if (array3[i]) clean.push(array3[i]);
    }
    return clean;
}
console.log(cleanArray(values))

//bài 4
function testSymmetry(str){
    var reverse = "";
    //đảo ngược từ
    for (var i = str.length-1;i>=0; i --){
        reverse = reverse+str[i];
    } 
    console.log(reverse)
    //so sánh bằng cách tách chữ, gộp và chuyển thành chữ thường
    reverse = reverse.split(" ").join("").toLowerCase();
    var newStr = newStr.split(" ").join("").toLowerCase();
    if (newStr === reverse){
        return true;
    }
    return false;
}

//bài 5

function LongestStr(array5){
    var long = array5[0].length;
    for (var i =0; i< array5.length; i++)
        {
            if (long < array5[i].length){
                long = array5[i].length;
            }
        }
        let arr = [];
        for (i=0; i<array5.length; i++){
            if (array5[i].length ===max){
                arr.push(array5[i])
            }
        }
        return arr;
    }
