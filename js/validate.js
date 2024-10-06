document.addEventListener('DOMContentLoaded', function () {
    let nombre = document.getElementById('nombre');
    let apellido_1 = document.getElementById('apellido_1');
    let apellido_2 = document.getElementById('apellido_2');
    let edad = document.getElementById('edad');
    let form = document.getElementsByTagName('form')[0];
    let lista = document.getElementsByTagName('ul')[0];
    let boton_cerrar = document.getElementById('cerrar');
    
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        let nuevo_miembro = document.createElement('li');
        if (nombre.value !== "" && apellido_1.value !== "" && apellido_2.value !== "") {
            if (edad.value > 0 && edad.value < 120) {
                nuevo_miembro.textContent = nombre.value + " " + apellido_1.value + " " + apellido_2.value + ", " + edad.value + " años";
                lista.appendChild(nuevo_miembro);
                lista.style.display = "block";
                boton_cerrar.style.display = "block";
            } else {
                alert("Ingrese una edad entre 0 y 120");
                event.stopPropagation();
            }
        } else {
            alert("Ingrese todos los campos");
            event.stopPropagation();
        }
    });

    boton_cerrar.addEventListener('click', function () {
        lista.style.display = "none";
        boton_cerrar.style.display = "none";
        nombre.value = "";
        apellido_1.value = "";
        apellido_2.value = "";
        edad.value = 0;
        nombre.focus();
    });
});