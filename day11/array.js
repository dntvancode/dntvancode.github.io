let array=[1,2,3];
let names;
names = ["An", "Anh", "Van"];
names.length; //dem so phần tử của mảng

//lấy phần tử theo index;
names[3];
console.log(names[1]);

//duyệt mảng - chủ yếu dùng for loop
for (let i = 0; i<names.length; i ++){

    console.log(`Tôi tên là ${names[1]}`);
}
for (let index in names){
    console.log(` Index là ${[index]} và item là ${names[index]}`);
}

for (let item of names){
    console.log(item)
}

//muốn thêm mới 1 phần tử
names.push("Quynh") //dùng hàm push để thêm một phần tử vào mảng
console.log(names)

array.pop()// dùnhghàm pop để lấy ra/xoá 1 phần tử ở cuối
console.log(array);

//Cho 1 bảng số nguyên. nếu số nào nhỏ hơn 0 thì thay thế nó thành 0
function checkArray(arr)
{
    for (let i in arr){
        if (arr[i]<0){
        arr[i] = 0}
    }
    return arr;
}

function drawSqr(){
    for (let i = 0; i <=n; i++){
        for (let j= 0; j<=n;j++){
            console.log("*");
        }
    }
}