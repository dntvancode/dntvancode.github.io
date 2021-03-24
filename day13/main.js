//tính đối xứng của một số
function doiXung(n) {
    n = n + "";
    let revN = n.split("").reverse().join("");
    if (n === revN) {
        return true;
    }
    return false;
}

//chương trình cước taxi
function taxi(km, time) {
    var price = 0;
    var wait = time*20000;
    if (km < 0 || time < 0) {
        return "Không hợp lệ";
    }
    if (km === 1) {
        price = 9000 + wait;
    }
    else if (km >= 2 && km <= 30) {
        price = km * 11000 + 9000 + wait;
    }
    else if (km > 30) {
        price = (km * 9500) + 330000 + 9000+ wait;
    }
    console.log("Km đi được: ", km);
    console.log("Thời gian chờ theo giờ: ", time);
    console.log("Tổng số tiền: ", price);
}