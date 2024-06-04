'use strict'
class Estudiante{

   constructor(name){
        this.name = name
   }
   sayHi() {
    alert(this.name);
  }
}
let user = new Estudiante("John");
Estudiante.sayhi();