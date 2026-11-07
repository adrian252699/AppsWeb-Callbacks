function temporizador(callback) {
    setTimeout(()=>{
        callback();
    },3000);
}

function saludar() {
    return console.log("Hola desde el callback");
}

temporizador(saludar);