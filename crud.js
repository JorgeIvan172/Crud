//IVAN
// Variable global para almacenar una fila que se está editando o actualizando.
var Fila = null;

// Función que se llama cuando se envía el formulario.
function onSubmit() {
    // Leer los datos del formulario.
    let DataForm = Leer();

    // Si no hay una fila en edición, insertar nuevos datos.
    if (Fila == null) {
        InsertarDatos(DataForm);
    } else {
        // Si hay una fila en edición, actualizar los datos.
        Actualizar(DataForm);
        Vaciar();
    }
}

// Función para leer los datos del formulario y devolverlos como un objeto.
function Leer() {
    let DataForm = {};
    DataForm["nom"] = document.getElementById("nom").value;
    DataForm["des"] = document.getElementById("des").value;
    DataForm["precio"] = document.getElementById("precio").value;
    return DataForm;
}

