// modal
    document.addEventListener("DOMContentLoaded", function () {
        // Seleciona todas as miniaturas que têm o atributo 'data-toggle' e 'data-target'
        const thumbnails = document.querySelectorAll('.thumbnail[data-toggle="modal"]');

        thumbnails.forEach(function (thumbnail) {
            thumbnail.addEventListener('click', function () {
                // Obtém o caminho do vídeo a partir do atributo 'data-video-src'
                const videoSrc = this.getAttribute('data-video-src');
                
                // Obtém a descrição da cena
                const sceneDescription = this.querySelector('.scene-description').textContent;
                
                // Seleciona o elemento <video> na modal
                const modalVideo = document.getElementById('modalVideo');
                
                // Atualiza o atributo 'src' da tag <source> dentro do <video>
                modalVideo.querySelector('source').src = videoSrc;
                
                // Carrega o vídeo para que o navegador entenda que o src foi atualizado
                modalVideo.load();
                
                // Reproduz o vídeo automaticamente
                modalVideo.play();
                
                // Atualiza o título da modal com a descrição da cena
                const videoModalLabel = document.getElementById('videoModalLabel');
                videoModalLabel.textContent = sceneDescription;
            });
        });

        // Pausa o vídeo e reseta o tempo quando a modal é fechada
        $('#videoModal').on('hidden.bs.modal', function () {
            const modalVideo = document.getElementById('modalVideo');
            
            // Pausa o vídeo
            modalVideo.pause();
            
            // Reseta o tempo do vídeo para o início
            modalVideo.currentTime = 0;
        });
    });

    // comportamento botão roll up         
        $(document).ready(function() {
            $(window).scroll(function() {
                // check if the scroll position has passed the section with id "hero"
                if ($(this).scrollTop() > $('#hero').offset().top + $('#hero').outerHeight()) {
                    // show the roll div with slide up animation
                    $('.roll').slideDown();
                } else {
                    // hide the roll div if not in the desired position
                    $('.roll').slideUp();
                }
            });
        });

// efeito seção 'revelador de background' | concept
    $(document).ready(function() {
        $('#concept').mousemove(function(event) {
            var mouseX = event.pageX - $(this).offset().left;
            var mouseY = event.pageY - $(this).offset().top;
            
            // Adjust the size and position of the lighting effect
            var lightSize = 100; // adjust the size of the lighting effect
            var lightX = mouseX - lightSize / 2;
            var lightY = mouseY - lightSize / 2;
            
            // Apply the lighting effect to the overlay
            $('#overlay').css({
                '-webkit-mask-image': '-webkit-gradient(radial, ' + mouseX + ' ' + mouseY + ', 10, ' + lightX + ' ' + lightY + ', ' + lightSize + ', from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))',
                'mask-image': 'radial-gradient(circle at ' + mouseX + 'px ' + mouseY + 'px, rgba(255,255,255,.01) 0%, rgba(255,255,255,1) ' + lightSize + 'px)'
            });
        });
    });


    // Mobile Menu
    document.addEventListener("DOMContentLoaded", function() {
        const links = document.getElementsByClassName("nav-item");
        const menu = document.getElementById("menu-nav");
        
        for (let i = 0; i < links.length; i++) {
            links[i].addEventListener("click", function(event) {
                console.log("Nav link clicked");
                menu.classList.remove("show");
            });
        }
    });

    // Audio
    function toggleAudio() {
        const audio = document.getElementById("audioPlayer");
        const playButton = document.getElementById("playButton");

        if (audio.paused) {
            audio.play();
            playButton.src = "./dist/img/icons/sound-on.png";
        } else {
            audio.pause();
            audio.currentTime = 0;
            playButton.src = "./dist/img/icons/sound-off.png";
        }

        audio.addEventListener('ended', function() {
            audio.play();
            playButton.src = "./dist/img/icons/sound-on.png";
        });
    }