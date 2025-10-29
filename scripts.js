// Configuración de performance
const config = {
    animationDelay: 400,
    skillAnimationDelay: 100,
    observerThreshold: 0.1,
    observerRootMargin: '50px'
};

// Observer para animaciones
const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            requestAnimationFrame(() => {
                entry.target.classList.add('animacion-activa');
            });
            // Dejar de observar una vez animado
            animationObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: config.observerThreshold,
    rootMargin: config.observerRootMargin
});

// Cargar recursos no críticos de forma diferida
function loadNonCriticalResources() {
    // Esta función se puede expandir para cargar más recursos si es necesario
    console.log('Recursos no críticos cargados');
}

// Manejar la transición optimizada
function handleCurriculumTransition() {
    const pantallaInicio = document.getElementById('pantallaInicio');
    const curriculum = document.getElementById('curriculum');
    
    if (!pantallaInicio || !curriculum) return;
    
    // Agregar clase para ocultar
    pantallaInicio.classList.add('oculta');
    
    // Usar requestAnimationFrame para mejor performance
    requestAnimationFrame(() => {
        setTimeout(() => {
            curriculum.classList.add('mostrar');
            
            // Animar barras de habilidad
            animateSkillBars();
            
            // Observar elementos para animaciones
            initAnimations();
            
            // Cargar recursos no críticos
            loadNonCriticalResources();
            
        }, config.animationDelay);
    });
}

// Animar barras de habilidad optimizado
function animateSkillBars() {
    const barrasHabilidad = document.querySelectorAll('.nivel-habilidad');
    
    barrasHabilidad.forEach((barra, index) => {
        setTimeout(() => {
            const ancho = barra.style.width;
            if (ancho) {
                barra.style.width = '0';
                requestAnimationFrame(() => {
                    barra.style.width = ancho;
                });
            }
        }, index * config.skillAnimationDelay);
    });
}

// Inicializar animaciones
function initAnimations() {
    const elementosAnimados = document.querySelectorAll('.animacion-aparecer');
    
    elementosAnimados.forEach(elemento => {
        animationObserver.observe(elemento);
    });
}

// Inicializar la aplicación
function initApp() {
    const verCurriculumBtn = document.getElementById('verCurriculum');
    
    if (verCurriculumBtn) {
        // Agregar event listeners optimizados
        verCurriculumBtn.addEventListener('click', handleCurriculumTransition);
        verCurriculumBtn.addEventListener('touchstart', handleCurriculumTransition, { 
            passive: true 
        });
    }
    
    // Inicializar animaciones para elementos ya visibles
    initAnimations();
    
    // Cargar recursos no críticos después de un tiempo
    setTimeout(loadNonCriticalResources, 2000);
}

// Manejar navegación por teclado
function handleKeyboardNavigation(event) {
    if (event.key === 'Enter' || event.key === ' ') {
        const activeElement = document.activeElement;
        
        if (activeElement.id === 'verCurriculum' || activeElement === document.body) {
            event.preventDefault();
            handleCurriculumTransition();
        }
    }
}

// Prevenir zoom en input en iOS de forma segura
function preventZoom(event) {
    if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA' || event.target.isContentEditable) {
        return;
    }
    
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}

// Event listeners optimizados
document.addEventListener('keydown', handleKeyboardNavigation);
document.addEventListener('touchstart', preventZoom, { passive: false });

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    // DOM ya está listo
    initApp();
}

// Manejar errors silenciosamente
window.addEventListener('error', (e) => {
    console.warn('Error capturado:', e.error);
});

// Exportar para tests si es necesario
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        handleCurriculumTransition,
        animateSkillBars,
        initApp
    };
}
