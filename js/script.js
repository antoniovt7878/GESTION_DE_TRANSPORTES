document.addEventListener("DOMContentLoaded", function () {
  document.getElementById('contactForm')?.addEventListener('submit', function (event) {
      event.preventDefault();
      let nombre = document.getElementById('nombre').value.trim();
      let email = document.getElementById('email').value.trim();
      let mensaje = document.getElementById('mensaje').value.trim();

      if (!nombre || !email || !mensaje) {
          alert('Por favor, complete todos los campos antes de enviar el formulario.');
          return;
      }

      let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
          alert('Ingrese un correo electrónico válido.');
          return;
      }

      document.getElementById('alerta-exito').classList.remove('d-none');
      this.reset();
  });

  document.getElementById('reservaForm')?.addEventListener('submit', function (event) {
      event.preventDefault();

      let fecha = document.getElementById('fecha').value;
      let origen = document.getElementById('origen').value.trim();
      let destino = document.getElementById('destino').value.trim();
      let cantidad = document.getElementById('cantidadCaballos').value;

      if (!fecha || !origen || !destino || !cantidad) {
          alert('Por favor, complete todos los campos antes de enviar el formulario.');
          return;
      }

      document.getElementById('alerta-exito').classList.remove('d-none');
      this.reset();
      document.getElementById('cantidadSeleccionada').innerText = ""; 
      document.getElementById('cantidadCaballos').value = ""; 
  });

  document.querySelectorAll('.dropdown-item').forEach(item => {
      item.addEventListener('click', function (event) {
          event.preventDefault();
          let cantidad = this.innerText;
          document.getElementById('cantidadSeleccionada').innerText = cantidad;
          document.getElementById('cantidadCaballos').value = cantidad; 
      });
  });
});
