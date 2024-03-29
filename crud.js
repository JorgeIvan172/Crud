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
    DataForm["id"] = document.getElementById("id").value;
    DataForm["nom"] = document.getElementById("nom").value;
    DataForm["des"] = document.getElementById("des").value;
    DataForm["catego"] = document.getElementById("catego").value;
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
    columna1 = Fila.insertCell(0).innerHTML = data.id;
    columna2 = Fila.insertCell(1).innerHTML = data.nom;
    columna3 = Fila.insertCell(2).innerHTML = data.des;
    columna4 = Fila.insertCell(3).innerHTML = data.catego;
    columna5 = Fila.insertCell(4).innerHTML = `<input class="submit2" type="button" onClick="Editarr(this)" value="Editar." > <br/><br/>
                                            <input class="submit2" type="button" onClick="Borrarr(this)" value="Borrar." >`;

    // Enfocar el campo "nom" del formulario.
    document.getElementById("nom").focus();

    // Vaciar el formulario después de la inserción.
    Vaciar();
}

// Función para vaciar el formulario.
function Vaciar() {
    document.getElementById("id").value = "";
    document.getElementById("nom").value = "";
    document.getElementById("des").value = "";
    document.getElementById("catego").value = "";
    Fila = null; // Reiniciar la fila en edición.
}



//LEONg--------
// Función para editar una fila existente.
function Editarr(td) {
    // Obtener la fila que se va a editar.
    Fila = td.parentElement.parentElement;

    // Llenar el formulario con los datos de la fila.
    document.getElementById("id").value = Fila.cells[0].innerHTML;
    document.getElementById("nom").value = Fila.cells[1].innerHTML;
    document.getElementById("des").value = Fila.cells[2].innerHTML;
    document.getElementById("catego").value = Fila.cells[3].innerHTML;
}

//IVAN
// Función para actualizar una fila en edición.
function Actualizar(DataForm) {
    // Actualizar los valores de las celdas en la fila en edición.
    Fila.cells[0].innerHTML = DataForm.id;
    Fila.cells[1].innerHTML = DataForm.nom;
    Fila.cells[2].innerHTML = DataForm.des;
    Fila.cells[3].innerHTML = DataForm.catego;

    // Enfocar el campo "nom" del formulario.
    document.getElementById("nom").focus();
}



// Función para borrar una fila.
function Borrarr(td) {
    if (confirm('¿Seguro de borrar este registro?')) {
        // Obtener la fila que se va a borrar y eliminarla de la tabla.
        row = td.parentElement.parentElement;
        document.getElementById("tabla").deleteRow(row.rowIndex);

        // Vaciar el formulario después de la eliminación.
        Vaciar();
    }
}