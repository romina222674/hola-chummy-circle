// Smooth scroll para navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animación al scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar elementos
document.querySelectorAll('.info-card, .listen-live-overlay, .about-overlay, .contact-overlay').forEach(el => {
    observer.observe(el);
});

// Agregar animación CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Funcionalidad de botones
document.querySelectorAll('.btn-primary, .btn-play, .btn-whatsapp').forEach(btn => {
    btn.addEventListener('click', function() {
        if (this.textContent.includes('WhatsApp') || this.textContent.includes('Pedir')) {
            // Reemplaza con tu número de WhatsApp
            window.open('https://wa.me/543794960802', '_blank');
        } else if (this.textContent.includes('Escuchar')) {
            // Reemplaza con tu link de reproducción
            window.open('https://zeno.fm/radio/', '_blank');
        } else if (this.textContent.includes('Zeno')) {
            window.open('https://zeno.fm/radio/', '_blank');
        }
    });
});

// Efecto hover en cards
document.querySelectorAll('.info-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 10px 30px rgba(212, 175, 55, 0.3)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.boxShadow = 'none';
    });
});

console.log('Ñande Reko Radio - Script cargado correctamente');