'use strict'
//En el uso del Object.valuespara se recorrer los valores de una propiedad
let user = {
    name: "John",
    age: 30
  };
  for (let value of Object.values(user)) {
    alert(value); 
  }