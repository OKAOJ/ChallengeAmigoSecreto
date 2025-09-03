// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
  const inputAmigo = document.getElementById("amigo");
  let nombreAmigo = inputAmigo.value.trim();

  // Validar la entrada.
  if (nombreAmigo === '') {
    alert("Por favor, ingresa un nombre válido.");
    return;
  }
  
  if (amigos.includes(nombreAmigo)) {
    alert("Ese nombre ya está registrado. Escribe otro.");
    return;
  }

  //Si el sorteo ya se hizo, reiniciarlo antes de agregar el nuevo amigo.
  const resultadoElement = document.getElementById("resultado");
  if (amigos.length > 0 && resultadoElement.innerHTML !== "") {
    amigos = []; // Limpiar el array
    document.getElementById("listaAmigos").innerHTML = "";
    resultadoElement.innerHTML = ""; 
    document.getElementById("listaAmigos").style.display = "block";
  }

  amigos.push(nombreAmigo);
  actualizarAmigos();
  inputAmigo.value = "";

  
}
document.getElementById("amigo").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        agregarAmigo();
    }
});

function actualizarAmigos() {
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";
  
  amigos.forEach(amigo => {
    const nuevoAmigo = document.createElement("li");
    nuevoAmigo.textContent = amigo;
    listaAmigos.appendChild(nuevoAmigo);
  });
}

function sortearAmigo() {
        if (amigos.length < 2) {
            alert("Necesitas al menos 2 amigos para el sorteo");
            return;
        }
    
        const listaAmigos = document.getElementById("listaAmigos");
        const resultado = document.getElementById("resultado");
    
        // Ocultar la lista de amigos
        listaAmigos.style.display = "none";
    
        // Elegir un amigo aleatorio
        const amigoIndex = Math.floor(Math.random() * amigos.length);
        const amigoSecreto = amigos[amigoIndex];
    
        // Mostrar el resultado
        resultado.innerHTML = ""; 
        const nuevoResultado = document.createElement("li");
        nuevoResultado.textContent = 'El amigo secreto es: ' + amigoSecreto;
        resultado.appendChild(nuevoResultado);

        listaAmigos.classList.add("oculto");
    }

