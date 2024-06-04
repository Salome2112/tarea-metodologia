'use strict'
class Curso{
    constructor (estudiantes, maestro, descripcion, año,videos ){
        this.maestro=maestro;
        this.descripcion=descripcion;
        this.año=año;
        this.estudiantes=estudiantes;
        this.videos=[videos];
    }
      addvideos(newvideos){
        this.videos.push(newvideos)
        }
        showInf(){
            alert(this.videos)
        }
    }
    let curso= new Curso('videoA','videoB','videoC','videoD');
   curso.addvideos('videoA')
   curso.showInf()
   
  
   
