// function calcularAreaTriangulo(base, altura) {
//   let resultado = (base * altura) / 2;
//   return resultado;
// }
// for (let i = 1; i <= 3; i++) {
//   let base = Number(prompt("ingrese base"));
//   let altura = Number(prompt("ingrese altura"));
//   if (base > 0 && altura > 0) {
//     let area = calcularAreaTriangulo(base, altura)
//     console.log("El area es:" + area);
//   } else {
//     console.log("opcion invalida");
//   }
// }

// function ConvertirAFahrenheit(celsius){
//   return(celsius *9/5) + 32;
// }

// for (let i = 1; i <= 5; i + 1) {

// }let temperatura = prompt("Ingresa una temperatura en Celsius"); 
// let numero = Number(entrada);
// if (numero > 0 || numero <= 0) {
//   let fahrenheit = ConvertirAFahrenheit;
//   console.log(numero + "grados celsius son" + fahrenheit + "grados Fahrenheit ");

// } else {
//   console.log("error: lo que ingresaste no es valido");
// }


// function clasificarParesImpares(inicio, fin) {
//   for (let i = inicio; i <= fin; i++) {
//     if (i % 2 == 0) {
//       console.log(i + "es par");
//     } else{
//       console.log(i + "es impar");
//     }
//   }
// }

// let inicio = Number(prompt("Ingrese numero de inicio"));
// let fin = Number(prompt("Ingrese numero final"));

// clasificarParesImpares(inicio,fin);


function mayorYsuma(n1, n2, n3, n4 ,n5){
  let suma = n1 + n2 + n3 + n4 + n5;
  let mayor = n1; 

  if (n2 > mayor) { mayor = n2}
  if (n3 > mayor) { mayor = n3}
  if (n4 > mayor) { mayor = n4}
  if (n5 > mayor) { mayor = n5}

  console.log("El numero mayor es: " + mayor);
  console.log("La suma de todos los numeros es: " + suma);
  
}

let n1 = Number(prompt("ingresa el numero 1:"));
let n2 = Number(prompt("Ingresa el numero 2"));
let n3 = Number(prompt("Ingrese el numero 3"));
let n4 = Number(prompt("Ingrese el numero 4"));
let n5 = Number(prompt("Ingresa el numero 5"));

mayorYsuma(n1, n2, n3, n4, n5);