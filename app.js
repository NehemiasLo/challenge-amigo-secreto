let listaAmigos = []; // Se crea un array vacío para almacenar los amigos

function refrescarBotonSortear() {
    let botonSortear = document.getElementById('button-draw'); // Se obtiene el botón de sortear
    if (listaAmigos.length < 2) { // Si la cantidad de amigos es menor a 2
        botonSortear.disabled = true; // Se deshabilita el botón de sortear
    } else { // Si la cantidad de amigos es mayor o igual a 2
        botonSortear.disabled = false; // Se habilita el botón de sortear
    }
}

function agregarAmigo() {
  let nombreAmigo = document.getElementById('amigo').value.trim(); // Se obtiene el valor del input

    let regex = /^[a-zA-Z]+$/; // Se crea una expresión regular para validar que el nombre solo contenga letras
    if (nombreAmigo=='') { // Se valida que el input no esté vacío") {
        alert('Debes ingresar un nombre');
        return;
    }
    if (!regex.test(nombreAmigo)) { // Se valida que el nombre solo contenga letras
        alert('El nombre solo debe contener letras y espacios');
        return;
    }
    let existe = listaAmigos.find(amigo => amigo.toLowerCase() === nombreAmigo.toLowerCase()); // Se busca el nombre en el array
    if (existe) { // Si el nombre ya existe en el array se muestra un mensaje de error
        alert('El amigo ya existe');
        return;
    }

    listaAmigos.push(nombreAmigo); // Se agrega el nombre al array
    document.getElementById('amigo').value = ''; // Se limpia el input
    document.getElementById('amigo').blur(); // Se quita el foco del input
    actualizarListaAmigos(); // Se llama a la función que actualiza la lista de amigos
    refrescarBotonSortear(); // Se llama a la función que refresca el estado del botón de sortear

}