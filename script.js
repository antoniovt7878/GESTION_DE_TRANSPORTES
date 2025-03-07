document.addEventListener("DOMContentLoaded", function () {
  document.getElementById('contactForm')?.addEventListener('submit', function (event) {
    event.preventDefault();
    let nombre = document.getElementById('nombre').value.trim();
    let email = document.getElementById('email').value.trim();
    let mensaje = document.getElementById('mensaje').value.trim();

    if (!nombre || !email || !mensaje) {
      event.preventDefault();
      alert('Por favor, complete todos los campos antes de enviar el formulario.');
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

  document.getElementById('reservaForm')?.addEventListener('submit', function (event) {
    event.preventDefault();
    let fecha = document.getElementById('fecha').value;
    let origen = document.getElementById('origen').value;
    let destino = document.getElementById('destino').value;
    let cantidad = document.getElementById('cantidadSeleccionada').innerText;

    if (!fecha || !origen || !destino || !cantidad) {
      event.preventDefault();
      alert('Por favor, complete todos los campos antes de enviar el formulario.');
      return;
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
