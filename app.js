// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista de amigos
let amigos = [];

// Función para agregar amigos a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombre = inputAmigo.value.trim();

    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    amigos.push(nombre);
    actualizarListaAmigos();
    inputAmigo.value = "";
}

// Función para actualizar la lista en la interfaz
function actualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear los amigos secretos
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos dos personas para realizar el sorteo.");
        return;
    }

    let amigosSinAsignar = [...amigos];
    let resultado = {};

    for (let i = 0; i < amigos.length; i++) {
        let amigo = amigos[i];
        let posiblesAmigos = amigosSinAsignar.filter(a => a !== amigo);

        if (posiblesAmigos.length === 0) {
            alert("No se pudo completar el sorteo. Inténtelo nuevamente.");
            return;
        }

        let amigoSecreto = posiblesAmigos[Math.floor(Math.random() * posiblesAmigos.length)];
        resultado[amigo] = amigoSecreto;

        // Eliminar al amigo seleccionado de la lista de opciones
        amigosSinAsignar = amigosSinAsignar.filter(a => a !== amigoSecreto);
    }

    mostrarResultado(resultado);
}

// Función para mostrar los resultados
function mostrarResultado(resultado) {
    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";

    for (const [amigo, secreto] of Object.entries(resultado)) {
        const li = document.createElement("li");
        li.textContent = `${amigo} → ${secreto}`;
        resultadoLista.appendChild(li);
    }
}
