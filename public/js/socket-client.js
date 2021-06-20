const lblOnline = document.getElementById('lblOnline');
const lblOffline = document.getElementById('lblOffline');
const txtMensaje = document.getElementById('txtMensaje');
const btnEnviar = document.getElementById('btnEnviar');

const socket = io();

socket.on('connect', () => {
    lblOnline.style.display = '';
    lblOffline.style.display = 'none';
});

socket.on('disconnect', () => {
    lblOffline.style.display = '';
    lblOnline.style.display = 'none';
});

socket.on('enviar-mensaje', (data) => {
    console.log(data);
});

btnEnviar.addEventListener('click', () => {
    const mensaje = txtMensaje.value;
    const payload = {
        id: '6566dfsdf30096fAGFSD08',
        fecha: new Date().getTime(),
        msj: mensaje
    }
    socket.emit('enviar-mensaje', payload, (id) => {
        console.log('Server ID: ', id);
    });
    txtMensaje.value = '';
});
