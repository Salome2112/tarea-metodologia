'use strict'
//Este metodo hace que simplemente una  cadena debería incluir todas las propiedades importantes.
let user = {
    name: "John",
    age: 30,
    toString() {
      return `{name: "${this.name}", age: ${this.age}}`;
    }
  };
  alert(user);