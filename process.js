const serviceId = 'service_ciko23h'; // conectar con email
const templateId = 'template_fpwwyOd'; // configurado
const apyky = 'EfPu6mEYsMOKgiiit'; // proceso

function sendEmail() {
    emailjs.init(apyky); // Inicializar con el ID de usuario

    const datos = {
        from_name: document.getElementById('name').value,
        email_id: document.getElementById('correo').value,
        message: document.getElementById('mensaje').value
    };

    emailjs.send(serviceId, templateId, datos)
    .then(() => {
        Swal.fire({
            icon: 'success',
            title: '¡Su mensaje ha sido enviado con éxito!'
        });
    })
    .catch(error => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: '¡No ha sido posible enviar el mensaje!'
        });
        console.error('Error al enviar el email:', error);
    });
}
