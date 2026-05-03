let contadorNo = 0;

function responderSi() {
    document.getElementById("mensaje").innerText = "¡Genial! Has aceptado 😄.";
    document.getElementById("contador").innerText = "";
}

function responderNo() {
    contadorNo++;

    let mensajes = [
        "¿Segura? 🤔",
        "Piénsalo otra vez 😅",
        "Vamos... intenta de nuevo 😆",
        "Ya van varios intentos 👀",
        "Ok... pero sabes que terminarás diciendo que sí 😏"
    ];

    let mensaje = mensajes[(contadorNo - 1) % mensajes.length];

    document.getElementById("mensaje").innerText = mensaje;
    document.getElementById("contador").innerText = "Veces que presionaste 'No': " + contadorNo;
}
