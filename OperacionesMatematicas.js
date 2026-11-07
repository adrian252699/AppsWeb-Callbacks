function calculadora(x,y,callback) {
    return callback(x,y);
}

function sumar(x,y) {
    return x+y;
}

function restar(x,y){
    return x-y;
}

function multiplicar(x,y) {
    return x*y;
}

function dividir(x,y) {
    if (y===0) {
        console.log("El divisor no puede ser 0");
        return "Error";
    }

    return x/y;
}

let x = 10;
let y = 5;

console.log(`Operaciones con los valores x=${x} y y=${y}`);

console.log(`\nSuma: ${calculadora(10,5,sumar)}`);

console.log(`\nResta: ${calculadora(10,5,restar)}`);

console.log(`\nMultiplicacion: ${calculadora(10,5,multiplicar)}`);

console.log(`\nDivision: ${calculadora(10,5,dividir)}`);

console.log("\nDivision entre 0")
console.log(`Division: ${calculadora(10,0,dividir)}`);