'use strict'
// Al tener un objeto existente en el lado derecho, que queremos dividir en variables. 
//El lado izquierdo contiene un "patrón" similar a un objeto para las propiedades correspondientes.
 //En el caso más simple, es una lista de nombres de variables
let options = {
    title: "Menu",
    width: 100,
    height: 200
  };
  
  let {title, width, height} = options;
  
  alert(title);  
  alert(width);  
  alert(height); 