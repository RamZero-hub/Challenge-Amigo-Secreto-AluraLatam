
let amigos = []

function agregarAmigo() {

    let nuevoAmigo = document.getElementById ('amigo').value.trim();

    if (nuevoAmigo === '') {
        //Verifica que el campo no este vacio
        alert('Por favor, inserte un nombre.');
        limpiarCampoTexto()

        //Verifica que el nombre no este insertado antes    
    } else if (amigos.includes(nuevoAmigo)) {
        alert(`El Nombre ${nuevoAmigo} ya fue agregado.`);
        limpiarCampoTexto()

    } else {
        
        //Incluir nuevo amigo en lista
        amigos.push(nuevoAmigo);
        //Actualiza la lista visible por el usuario
        actualizarLista()
        //console.log(`Nuevo Amigo: ${nuevoAmigo} `);
        //console.log(`amigosIngresados: ${amigos} `);
    
        //Despues de insertar dejar el campo texto vacio
        limpiarCampoTexto()
    }
}

// Detectar tecla Enter en el input
document.getElementById('amigo').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // evita recargar la página
        agregarAmigo();         // llama la función
    }
});

function limpiarCampoTexto() {
    document.getElementById ('amigo').value = '';
    document.getElementById ('amigo').focus();
}

function actualizarLista() {
    
    // Limpiar la lista existente
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    // Crear un nuevo <li> por cada amigo
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li")
        li.textContent = amigos[i]
        
        // Agregar el <li> a la lista
        lista.appendChild(li)
    }
}

function sortearAmigo() {
    
    if (amigos.length === 0) {
        console.log("La lista está vacía");
    } else {
        
        let numeroMaximo = amigos.length;
        let amigoSeleccionado = Math.floor(Math.random()*numeroMaximo)+1;
        //console.log(`numeroMaximo: ${numeroMaximo} `);  //Se comenta ya que solo se utiliza para verificar
        //console.log(`amigoSeleccionado: ${amigoSeleccionado} `);
        
        //Limpiar lista
            let lista = document.getElementById("listaAmigos");
            lista.innerHTML = "";

        //resultado
            let lista2 = document.getElementById("resultado");
            lista2.innerHTML = "";
            let li = document.createElement("li")
            li.textContent = (`El amigo secreto sorteado es:  ${amigos[amigoSeleccionado-1]} `) 
            lista2.appendChild(li)
    }


}


