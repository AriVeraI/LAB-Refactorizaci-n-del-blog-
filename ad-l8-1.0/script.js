// =========================================================
//Modificado para cumplir con la Tarea 6 del Blog de Terror
// 1. Seleccionamos los elementos HTML usando tus IDs exactos
const alertPlaceholder = document.getElementById("contactoAlertPlaceholder");
const contactForm = document.getElementById("formularioContacto");

/**
 * 2. Función que genera la alerta dinámicamente
 * El atributo data-bs-dismiss="alert" permite que la 'x' la cierre de forma nativa
 */
const appendAlert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible fade show mt-3" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertPlaceholder.append(wrapper);
};

// 3. Escuchamos el envío de tu formulario
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    // Evita que la página se recargue por completo
    event.preventDefault();

    // Lanza la alerta con el texto exacto requerido por tu tarea
    // Puedes cambiar 'success' (verde) por 'danger' (rojo) si prefieres la estética de terror
    appendAlert("Mensaje enviado", "success");

    // Limpia las casillas para que quede listo para otro relato
    contactForm.reset();
  });
}
// =========================================================
