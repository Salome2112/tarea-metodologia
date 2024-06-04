'use strict'
//A diferencia de str.split, este se basa en la naturaleza iterable de la cadena y,
// por lo tanto, al igual que for..of, este funciona correctamente con los pares sustitutos.
let numeros = '𝒳😂';
let chars = [];
for (let char of numeros) {
    chars.push(char);
  }
  
  alert(chars);