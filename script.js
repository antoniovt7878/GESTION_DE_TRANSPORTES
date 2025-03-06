document.addEventListener("DOMContentLoaded", function () {
  document.getElementById('contactForm')?.addEventListener('submit', function (event) {
    event.preventDefault();
    let nombre = document.getElementById('nombre').value.trim();
    let email = document.getElementById('email').value.trim();
    let mensaje = document.getElementById('mensaje').value.trim();

    if (nombre === '' || email === '' || mensaje === '') {
      alert('Todos los campos son obligatorios.');
      return;
    }

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Ingrese un correo electrónico válido.');
      return;
    }

    document.getElementById('alerta-exito').classList.remove('d-none');
    document.getElementById('contactForm').reset();
  });

  document.querySelector("form[onsubmit='validarFormulario(event)']")?.addEventListener("submit", function (event) {
    const fecha = document.getElementById('fecha').value;
    const origen = document.getElementById('origen').value;
    const destino = document.getElementById('destino').value;
    const cantidad = document.getElementById('cantidadSeleccionada').innerText;

    if (!fecha || !origen || !destino || !cantidad) {
      event.preventDefault();
      alert('Por favor, complete todos los campos antes de enviar el formulario.');
    }

    document.getElementById('alerta-exito').classList.remove('d-none');
    document.getElementById('reservaForm').reset();
  });

  document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', function () {
      document.getElementById('cantidadSeleccionada').innerText = this.innerText;
    });
  });
});
