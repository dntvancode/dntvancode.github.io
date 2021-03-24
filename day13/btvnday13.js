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
function AvgAge(){
    let a = (student.age[0]+ student.age[1]+student.age[2]+student.age[3]+student.age[4])/5;
    return `Độ tuổi trung bình của các sinh viên là: `+ a;
}



//bài 2 lọc tuổi theo thứ tự tăng dần
student.sort(function (a,b){
    return a.age-b.age;
});

//bài 3

