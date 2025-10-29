document.getElementById('verCurriculum').addEventListener('click', function() {
            const pantallaInicio = document.getElementById('pantallaInicio');
            const curriculum = document.getElementById('curriculum');

            pantallaInicio.classList.add('oculta');

            setTimeout(() => {
                curriculum.classList.add('mostrar');

                const elementosAnimados = document.querySelectorAll('.animacion-aparecer');
                
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('animacion-activa');
                        }
                    });
                }, {
                    threshold: 0.1
                });
                
                elementosAnimados.forEach(elemento => {
                    observer.observe(elemento);
                });

                const barrasHabilidad = document.querySelectorAll('.nivel-habilidad');
                barrasHabilidad.forEach(barra => {
                    const ancho = barra.style.width;
                    barra.style.width = '0';
                    setTimeout(() => {
                        barra.style.width = ancho;
                    }, 500);
                });
            }, 800);
        });

        document.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                document.getElementById('verCurriculum').click();
            }
        });