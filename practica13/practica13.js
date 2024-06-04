'use strict'
/* Utilizando una exprecion de funcion crea un algoritmo q reciba
el año de nacimiento y devuelva la edad */
let year = Number (prompt('Ingrese año de nacimiento'));
let calcularFechaNacimiento= funtion (year)

       

/* crea un a exprecion de funcion que reciba un numero y muestre la tabla de multiplicar
 del numero ingresado */
 let  mostrarTablaMultiplicar = function(numero) {
    let resultado = '';
    for (let i = 1; i <= 10; i++) {
        resultado += `${numero} x ${i} = ${numero * i}\n`;
    }
    alert(resultado);
};
let numero = 5;  
mostrarTablaMultiplicar(numero);

 /* Crea una funcion flecha que convierta unidades de temperatura Celcius a Farenheit*/
let  celsiusToFahrenheit = celsius => (celsius * 9/5) + 32
;
let temperaturaCelsius = 10;
let temperaturaFahrenheit = celsiusToFahrenheit(temperaturaCelsius);
alert (`La temperatura en Fahrenheit es: ${temperaturaFahrenheit}`);
