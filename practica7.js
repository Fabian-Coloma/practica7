
function calcularAreaTriangulo(base, altura) {
    let area = (base * altura) / 2;
    return area;
}

for (let i = 1; i <= 3; i++) {
    let base = Number(prompt("Triángulo " + i + ": Ingresa la base"));
    let altura = Number(prompt("Triángulo " + i + ": Ingresa la altura"));

    if (base > 0 && altura > 0) {
        let resultado = calcularAreaTriangulo(base, altura);
        console.log("El área del triángulo es: " + resultado);
    } else {
        console.log("Error: Los números deben ser mayores que 0");
    }
}
