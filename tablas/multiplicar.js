function generarTablas(){
    let contenedor = document.getElementById("tablas");
    let valorInput = document.getElementById("numero-tabla").value;
    let contenido = "";
    for (let i = 1; i <= 12; i++){
        let resultado = valorInput * i;
        contenido += "<tr class='fila'><td>" + valorInput + " x " + i + "</td><td>" + resultado + "</td></tr>";
    }
    contenedor.innerHTML = contenido;
}