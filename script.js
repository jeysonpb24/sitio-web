// Array de imágenes para la galería con títulos
const imagenes = [
    {
        src: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a',
        titulo: 'Fade Clásico',
        descripcion: 'Corte degradado con líneas definidas'
    },
    {
        src: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c',
        titulo: 'Corte Moderno',
        descripcion: 'Estilo contemporáneo con textura'
    },
    {
        src: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486',
        titulo: 'Diseño Especial',
        descripcion: 'Diseños personalizados y únicos'
    },
    {
        src: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033',
        titulo: 'Barba Estilizada',
        descripcion: 'Perfilado y diseño de barba'
    },
    {
        src: 'https://images.unsplash.com/photo-1593702295094-ac9a678b4919',
        titulo: 'Degradado Profesional',
        descripcion: 'Técnica de degradado perfecta'
    }
];

let indiceActual = 0;
const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dotsContainer = document.querySelector('.dots-container');

// Función para cargar las imágenes iniciales
function cargarImagenes() {
    slider.innerHTML = ''; // Limpiar el slider
    imagenes.forEach((imagen, index) => {
        const img = document.createElement('img');
        img.src = imagen.src;
        img.alt = imagen.titulo;
        slider.appendChild(img);
        
        // Crear punto indicador
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => irAImagen(index));
        dotsContainer.appendChild(dot);
    });
}

// Función para actualizar los puntos indicadores
function actualizarDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === indiceActual);
    });
}

// Función para ir a una imagen específica
function irAImagen(index) {
    indiceActual = index;
    actualizarSlider();
}

// Función para actualizar la información de la imagen
function actualizarInfo() {
    const titulo = document.querySelector('.slider-titulo');
    const descripcion = document.querySelector('.slider-descripcion');
    
    titulo.textContent = imagenes[indiceActual].titulo;
    descripcion.textContent = imagenes[indiceActual].descripcion;
}

// Función para cambiar la imagen
function actualizarSlider() {
    slider.style.transform = `translateX(-${indiceActual * 100}%)`;
    actualizarDots();
    actualizarInfo();
}

// Función para ir a la siguiente imagen
function siguienteImagen() {
    indiceActual = (indiceActual + 1) % imagenes.length;
    actualizarSlider();
}

// Función para ir a la imagen anterior
function anteriorImagen() {
    indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
    actualizarSlider();
}

// Eventos de los botones
prevBtn.addEventListener('click', anteriorImagen);
nextBtn.addEventListener('click', siguienteImagen);

// Inicializar la galería
cargarImagenes();

// Cambio automático de imágenes
setInterval(siguienteImagen, 5000);

// Manejo del formulario de citas
document.getElementById('formulario-citas').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('¡Cita reservada con éxito! Te contactaremos pronto para confirmar.');
}); 