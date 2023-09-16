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

//YAHEL 34 GOD yo mero el mas perron osiosi
// Función para insertar datos en la tabla.
function InsertarDatos(data) {
    // Obtener la referencia a la tabla en el HTML.
    let table = document.getElementById("tabla").getElementsByTagName('tbody')[0];

    // Insertar una nueva fila en la tabla.
    let Fila = table.insertRow(table.length);

    // Insertar celdas en la fila con los datos.
    columna1 = Fila.insertCell(0).innerHTML = data.nom;
    columna2 = Fila.insertCell(1).innerHTML = data.des;
    columna3 = Fila.insertCell(2).innerHTML = data.precio;
    columna3 = Fila.insertCell(3).innerHTML = `<input class="submit2" type="button" onClick="Editarr(this)" value="Editar." > <br/><br/>
                                            <input class="submit2" type="button" onClick="Borrarr(this)" value="Borrar." >`;

    // Enfocar el campo "nom" del formulario.
    document.getElementById("nom").focus();

    // Vaciar el formulario después de la inserción.
    Vaciar();
}

// Función para vaciar el formulario.
function Vaciar() {
    document.getElementById("nom").value = "";
    document.getElementById("des").value = "";
    document.getElementById("precio").value = "";
    Fila = null; // Reiniciar la fila en edición.
}

