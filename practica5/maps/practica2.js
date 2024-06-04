'use strict'
//Un Object.fromEntriesmétodo es el que hace lo contrario ya   dada una matriz de [key, value] pares, crea un objeto 
//a partir de ellos
let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
  ]);
  alert(prices.orange); 