function generarTablas() {
    let contenedor = document.getElementById("tablas");
    let valorInput = document.getElementById("numero-tabla").value;
    
    // Mensaje de ayuda si el usuario deja la caja vacía
    if (valorInput === "") {
        alert("SISTEMA_ERROR: Por favor, ingresa un número antes de iniciar el escaneo.");
        return; // Esto detiene la función para que no genere una tabla rota
    }
    
    let contenido = "";
    
    for (let i = 1; i <= 12; i++) {
        let resultado = valorInput * i;
        contenido += "<tr class='fila'><td>" + valorInput + " x " + i + "</td><td>" + resultado + "</td></tr>";
    }
    
    contenedor.innerHTML = contenido;
    
    // Texto intuitivo: Actualizamos el título H1 para que muestre qué tabla se generó
    document.querySelector("h1").innerText = ">_ TABLA_DEL_" + valorInput;
}