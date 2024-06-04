'use strict';

//funcion suma 
let suma= function(a,b){
    suma= a + b;
    alert("el resultado de la suma es" + suma );
}

//funcion resta 
let resta =(a , b) => a - b

//funcion calc
function calc (op,fnSum, fnRest){
    let number1= parseFloat(prompt("ingrese el primer numero:"));
    let number2= parseFloat(prompt("ingrese el segundo numero:"));
    if (op === "suma") {
        fnSum(number1,number2);
    }else{
        fnRest(number1,number2);
    }
    } 

//llamado a la funcion 
calc("suma ",suma,resta);



