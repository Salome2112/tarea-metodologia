'use strict';

//Declaracion de  funcion
function valideteField (isVisible, show , hibe) {
 if(isVisible){
    show();
 }else{
    hibe();

 }
} 
//Exprecion de funcion
let showField = function (){
    alert("campo visible");
}

//funcion flecha
let hibefield = () => alert ("campo oculto");

valideteField(false, showField ,hibefield);

