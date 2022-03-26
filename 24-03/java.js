/*
var array = [1, 2, 3, 4];
console.log(array);
let sum = 0;

for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log("La suma es de: ",sum);
*/
var num=5;
var num2=8;
var num3=0;
if(num>num2){
    console.log("Error")
}else{
    for(var j=num; j<=num2; j++){
        console.log("La tabla del",num);
        for(var i=1; i<=10; i++){
        num3=num*i;
        console.log(num+"X"+i+"="+num3);
        }
    num=num+1;
    console.log("_______________________________")
    }
}