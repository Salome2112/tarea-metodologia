'use strict'
//setHours. es un  componente que no se mencionan y no se modifican.
//Almacena la fecha, la hora y proporciona métodos para la gestión de fecha/hora.
let today = new Date();
today.setHours(0);
alert(today); 
today.setHours(0, 0, 0, 0);
alert(today); 