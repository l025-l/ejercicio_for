function generarTablas(){
    let contenedor = document.getElementById("tablas");
    let contenido = "";
    for (let i = 1; i <= 12; i++){
        let resultado = 5 * i;
        contenido += "<tr class='fila'><td>5 x " + i + "</td><td>" + resultado + "</td></tr>";
    }
    contenedor.innerHTML = contenido;
}