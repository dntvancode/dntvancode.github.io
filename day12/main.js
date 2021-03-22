document.write("Lam bai tap ve hinh");
document.write("</br>");
document.writeln("Bai 1: Vẽ hình chữ nhật đặc có kích thước mxn (trong đó  m,n > 0)");
document.writeln("Bai 2");

function rectangle(m, n) {
    if (m <= 0 || n <= 0 || Number.isInteger(m) === false || Number.isInteger(n) === false) {
        document.writeln("Thông số đầu vào không hợp lệ");
        return;
    }
    var str = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            str += "*   ";
        }
        str += "<br/ >";

    }
    document.writeln(str);
}
//chữ nhật rỗng
function hollowRec(m, n) {
    var str = "";
    if (m <= 0 || n <= 0 || Number.isInteger(m) === false || Number.isInteger(n) === false) {
        document.writeln("Thông số đầu vào không hợp lệ");
        return;
    }
    // vẽ hàng 1
    for (let x = 0; x < m; x++) {
        str += "* ";
    }

    //vẽ hàng giữa
    for (let i = 1; i < n - 2; i++) {
        str += "<br>"
        for (let j = 0; j < m; j++) {
            if (j === 0 || j === m - 1) {
                str += "* ";
            }
            else {
                str += "* ".fontcolor("white");
            }
        }
    }
    //vẽ hàng cuối
    str += "<br>"
    for (let x = 0; x < m; x++) {
        str += "* ";
    }
    document.writeln(str);
}

//vẽ tam giác vuông
function RightTriangle(h) {
    var str = "*";
    
    if (h < 0 || Number.isInteger(h) === false) {
        return "Không đúng thông số";
    }
    //str = "* ";
    for (var i = 1; i <= h; i++) {
        for (var j = 1; j<=((i*2)-1); j++){
                //str += " * ";
               document.write(str);
            }
        
    document.write("<br/  >");
    }
}

//vẽ tam giác cân ngược
function RevTriangle(h){    
    if (h < 0 || Number.isInteger(h) === false) {
        return "Không đúng thông số";
    }
    for(var i = h; i >=1; i--){
        for (var j = h; j>i; j--){
            //str += "  "
            document.write("  ")
        }
        for (var k = 1; k<(i*2); k++){
            document.write(" * ")
        }
        
        document.write("</br >");
        
    }
}