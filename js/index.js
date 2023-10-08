// Obtener referencias a elemento HTML
const botonModal = document.getElementById("mostrarModal");
const modal = document.getElementById("miModal");
const cerrarModal = document.getElementById("cerrarModal");

// Mostrar el modal cuando se haga clic en el botón
botonModal.addEventListener("click", function() {
  modal.style.display = "block";
});

// Ocultar el modal
cerrarModal.addEventListener("click", function() {
  modal.style.display = "none";
});

// ocultar el modal si se hace clic fuera de él
window.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

