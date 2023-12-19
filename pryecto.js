document.log(proyecto2.html);

function validarFormulario() {
    // Obtén los valores de los campos del formulario
    var nombres = document.getElementById('nombres').value;
    var apellidos = document.getElementById('apellidos').value;
    var correo = document.getElementById('correo').value;
    var contraseña = document.getElementById('contraseña').value;


    // Realiza la validación, por ejemplo, verifica que no estén vacíos
    if (nombres === '' || correo === '' || contraseña === '' || apellidos === '') {
      alert('Por favor, completa todos los campos.');
      return false; // Evita que se envíe el formulario
    }

    // Si todo está bien, puedes permitir que se envíe el formulario
    return true;
  };

  