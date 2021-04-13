//question div
//question display
//3 options => onclick
//4 lives=> for loops
//3 guesses=> incorrect => disabled, return
//<= 3 guesses => correct, next question

//.innerText để in câu hỏi vào trong question box
//dùng vòng lặp để in ra các button khác nhau
//thay câu tiếp theo bằng các clear qiu==
let questionSet =[{
    q: 'What is a female donkey called?',
    a: 'Dinkie',
    b: 'Mule',
    c: 'Jenny',
    correct: 'Jenny',
},
{
    q: 'What is the rarest M&M color?',
    a: 'Blue',
    b: 'Brown',
    c: 'Orange',
    correct: 'Brown',
},
{
    q: "Jupiter's moon lo is said to resmeble what food item?",
    a: 'Cherry Pie',
    b: 'Orange',
    c: 'Pizza',
    correct: 'Pizza',
},
{
    q:"What is the name of the man who launched eBay back in 1995?",
    a:'Pierre Omidyar',
    b:'Jamie Iannone',
    c:'Devin Wenig',
    correct: 'Pierre Omidyar';

}
]
let question= document.querySelector("#question");
let answers = document.querySelectorAll(".answer");
let count = document.getElementById("score");
function choice(){
    
}
//goi cau 1, next => cau 2