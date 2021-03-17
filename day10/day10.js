//bài 1

function ngaythang() {
    var date = new Date();
    var m = date.getMonth() + 1;
    console.log(`"Hôm nay là ngày + ${date}"`)
    if (m < 1 || m > 12) {
        return;
    }
    if (m <= 4) {
        return `Tháng mùa xuân là tháng +${m}`;
    }
    else if (m <= 7) {
        return `Tháng mùa hè là tháng +${m}`;
    }
    else if (m <= 9) {
        return `Tháng mùa thu là tháng +${m}`;
    }
    else if (m <= 12) {
        return `Tháng mùa đông là tháng +${m}`;
    }
}

//bài 2
// function leapyear(y) {
//     if ((y % 4 === 0 && y % 100 !== 0) || y % 400 === 0) {
//         return true;
//     }
//     return false;
// }
function numberofdays(m, y) {
    if (m < 1 || m > 12 || y < 1) {
        return;
    }
    if (m === 4 || m === 6 || m === 9 || m === 11) {
        return `Tháng có 30 ngày`;
    }
    else if (m ===1||m ===3 ||m ===5||m ===7||m===8||m===12){
        return `Tháng có 31 ngày`;
    }
    else if (m === 2 && ((y % 4 === 0 && y % 100 != 0) || y % 400 === 0)) {
        return `Tháng 2 có 29 ngày`;
    }
    return `Tháng 2 có 28 ngày`;
}

//bài 3

function sumInteger(i) {
    var n = Math.floor(Math.random() * 101);
    var l = i.length();
    
}

//bài 4
function sublength(c) {
 var cau = c.length;
 var sub = c.string(0,10);
 if (cau <10)
 {
    return cau;
 }
 return sub;
}

//bài 5
function translate(country){
switch (country){
    case "French": return "Bonjour!";
    case "Hawaiian": return "Aloha!";
    case"Germany": return "Hallo12";
    case "Italy": return "Ciao!";
    case "Croatia": return "Zdravo";
    default: return "Xin chào!"
}
}

