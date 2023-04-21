/* Clase 12 y 13 suma de 2 arreglos (sin funciones) ahora con funciones*/
/* sumar los elementos de cada una de las posiciones de 2 arreglos y guardar el resultado en otro arreglo.
El arreglo tiene dimensión 6 y los numeros de los 2 vectores los carga el usuario.*/
import * as r from "readline-sync";
let arr1: number [] = new Array(6);
let arr2: number [] = new Array(6);
let arr3: number [] = new Array(6);

function cargarArrNum(arr: number []): void {
    for (let i: number =0; i < arr1.length; i++) {
        arr[i] - r.questionInt(`Input number in position ${1+1}: `);
    }
}

cargarArrNum(arr1);
cargarArrNum(arr2);
console.log(arr1, arr2);