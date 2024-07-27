// Función para agregar conocimiento
function agregarAreaDeConocimiento(nombre, descripcion,detalle, imagen, enlace) {
    const listaAreaDeConocimientos = document.getElementById('lista-area-de-conocimientos');
    const nuevaAreaDeConocimiento = document.createElement('div');
    nuevaAreaDeConocimiento.className = 'col-lg-6  mb-4';
    nuevaAreaDeConocimiento.innerHTML = `
        <div class="card h-100 proyecto-card ">
            <img src="${imagen}" class="card-img-top" alt="${nombre}">
            <div class="card-body">
                <h5 class="card-title">${nombre}</h5>
                <p class="card-text">${descripcion}</p>
                <p class="card-text"><small class="text-muted"> ${detalle}</small></p>
            </div>
            <div class="card-footer">
                <a href="${enlace}" class="btn btn-primary" target="_blank">Ver proyecto</a>
            </div>
        </div>
    `;
    listaAreaDeConocimientos.appendChild(nuevaAreaDeConocimiento);
}


agregarAreaDeConocimiento(
    'Area Química',
    'Manejo de equipos e instrumentación de laboratorio',
    'Experiencia en el uso de espectrofotometros, HPLC, agitadores, autoclaves, estufas, desecadores, reactores. Experencia en material de laboratorio como balanzas, material volumetrico,etc. ',
    'assets/img/laboratorio.jpg',
    '#'
);

agregarAreaDeConocimiento(
    'Area Certificación',
    'Certificación de productos eléctricos y a gas ante SEC',
    'Conocimiento e implementación de protocolos de certificación. Ejemplo: PC N°7, PCN° 04/2, PC N° 04/3, PC N° 49, PC N° 49/2. <br>Conocimiento e implementación de sistemas de certificación de productos combustibles y eléctricos.<br>Manejo de plataforma e-declarador de la SEC (Superintendencia de Electricidad y Combustibles).',
    'assets/img/certificacion.jpg',
    '#'
);

agregarAreaDeConocimiento(
    'TI',
    'Estudio y Aplicación de Curso Desarrollo de Aplicaciones Full Stack Javascript Trainee V2.0',
    'JavaScript, CSS',
    'assets/img/javascript.jpg',
    '#'
);
agregarAreaDeConocimiento (
    'Música',
    'Baterista de forma autodidacta',
    'Conocimiento y aplicación tocando el instrumento de percusión batería eléctrica y acústica de forma autodidacta y estudiando un curso breve, lectura de partituras.',
    'assets/img/baterista.jpeg',
    '#'
);

// Validar formulario
document.getElementById('formulario-contacto').addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre && email && asunto && mensaje) {
        alert('Formulario enviado correctamente');
        this.reset();
    } else {
        alert('Por favor, completa todos los campos');
    }

    window.location.href = 'redirección.html'
});



