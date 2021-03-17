console.log('Xin chào các bạn');

function sayHi(name){
  console.log('Xin chào '+name);
}
sayHi('Van')

function sayHi2(name2){
  console.log(`Xin chào "${name2}"`)
}
sayHi2('Van')
function sum(a,b){
  return a+b;
}
let result= sum(2,3);
console.log(result);

function binhphuong(b){
  return b*b;
}
let result2= binhphuong(5);
console.log(result2);


//Bai tap ve nha//
//Nhiet do//
function convertCtoF(c){
 var farenheit = (c*1.8)+ 32;
 return farenheit;
}
let temp = convertCtoF(22);
console.log(temp);

function convertFtoC(f){
    var celcius= (f-32)/1.8;
    return celcius;
}
let temp2= convertFtoC(80);
console.log(temp2);

//Doi tien///
function UStoVN(u){
    var usd = u*23184.22;
    return usd;
}
let convertUS= UStoVN(26)
console.log(convertUS)

function EUtoVN(e){
    var euro = e*27547.16;
    return euro;
}
let convertEU = EUtoVN(26)
console.log(convertEU)

function VNtoUS(vu){
    var vnu = vu* 0.0000433244;
    return vnu;
}
let convertVNUS = VNtoUS(500000)
console.log(convertVNUS)

function VNtoEU(ve){
    var vne = ve*0.0000363215;
    return vne;
}
let convertVNEU = VNtoEU(300000)
console.log(convertVNEU)
//The ky//
function theky(n){
    let nam = Math.floor(((n-1)/100)+1);
    return nam;
}
console.log(theky(2004));