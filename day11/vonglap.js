for (let i = 0; i<10;i++){
console.log (i)};

let j= 0;
console.log("Vong lap while");
while (j<10){
    console.log (j);
    j++;
}
// let k = 10;
// console.log("Vong lap do while")
// do {
//     console.log(k)
//     k--;
// }
// while (k>0);
let k = 10;
do{
    k--;
    if (k===8){
        console.log("8 chia het cho 2");
        continue; //thay the cho so 8, neu khong co se k in ra console.log
}
console.log(k);
}while (k>0)


//Cho n (n<50). Liệt kê tất cả các số chia hết cho 5 trong khoảng từ 0-n
function chiahet5(n){
if (n<0 && n>50){
    return;
}
let count = 0
for (let i=0; i<=n; i++){
    if(i%5 ===0){
        console.log(i)
        count ++;
    }
    console.log(`"Có tất cả ${count} chia hết cho 5"`)
}
}
