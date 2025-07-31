document.addEventListener('DOMContentLoaded', () => {
    const articles = [
        {
            title: 'Los 5 Pilares de una Alimentación Saludable',
            description: 'Descubre cómo una dieta equilibrada puede transformar tu energía y bienestar general. Te damos los pasos clave para empezar hoy mismo.',
            image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg', // Unsplash: Alimentación Saludable
            link: '/articulos/articulo1.html'
        },
        {
            title: 'Rutinas de Ejercicio para Principiantes en Casa',
            description: 'No necesitas un gimnasio para mantenerte activo. Aprende rutinas sencillas y efectivas para empezar tu camino fitness desde la comodidad de tu hogar.',
            image: 'https://images.pexels.com/photos/4037803/pexels-photo-4037803.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=400', // Pexels: Ejercicio en Casa
            link: '/articulos/articulo2.html'
        },
        {
            title: 'Manejo del Estrés: Técnicas para una Mente Tranquila',
            description: 'El estrés es parte de la vida, pero no tiene que controlarte. Explora técnicas de relajación y mindfulness para cultivar la paz interior.',
            image: 'https://images.pexels.com/photos/2128817/pexels-photo-2128817.jpeg', // Unsplash: Manejo del Estrés
            link: '/articulos/articulo3.html'
        },
        {
            title: 'Hábitos Saludables para Prevenir Enfermedades Crónicas',
            description: 'Pequeños cambios en tu rutina diaria pueden tener un gran impacto en tu salud a largo plazo. Conoce los hábitos clave para una vida más larga y sana.',
            image: 'https://images.pexels.com/photos/8436589/pexels-photo-8436589.jpeg', // Pexels: Prevención Enfermedades
            link: '/articulos/articulo4.html'
        }
    ];

    const articleGrid = document.querySelector('.article-grid');

    if (articleGrid) {
        articles.forEach(article => {
            const articleCard = document.createElement('div');
            articleCard.classList.add('article-card');

            articleCard.innerHTML = `
                <img src="${article.image}" alt="${article.title}">
                <div class="article-card-content">
                    <h4>${article.title}</h4>
                    <p>${article.description}</p>
                    <a href="${article.link}" class="read-more">Leer Artículo Completo</a>
                </div>
            `;
            articleGrid.appendChild(articleCard);
        });
    }
});