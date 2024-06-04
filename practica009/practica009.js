'use strict'
let premio = 7;
let num;
let intento=0;
do {
    intento++;
num= Number (prompt("Ingrese numero"));
} 
while(num != premio && intento < 3);
if(intento == 3 && num != premio ){
    alert
}
alert('Ganaste en el intento'+ intento +'!');
