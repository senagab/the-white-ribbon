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

// Modals
const thumbnailElements = document.querySelectorAll('.thumbnail');
const videoModal = document.getElementById('videoModal');
const modalVideo = document.getElementById('modalVideo');
const modalTitle = document.getElementById('videoModalLabel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentVideoIndex = 0;
let videos = [];

thumbnailElements.forEach(function (thumbnail, index) {
    const videoSrc = thumbnail.dataset.videoSrc;
    const videoTitle = thumbnail.querySelector('.scene-description').innerText;

    videos.push({
        src: videoSrc,
        title: videoTitle
    });

    thumbnail.addEventListener('click', function () {
        currentVideoIndex = index;
        updateModalContent();
        $('#videoModal').modal('show');
    });
});

function updateModalContent() {
    modalVideo.src = videos[currentVideoIndex].src;
    modalTitle.innerText = videos[currentVideoIndex].title;
}

$('#videoModal').on('hide.bs.modal', function () {
    modalVideo.pause();
});
        
// // lottie
// // Set up the options for the Intersection Observer
// var options = {
//     root: null,
//     rootMargin: '0px',
//     threshold: 0.5
// };

// // Target the section you want to observe
// var targetSection = document.getElementById('about');

// // Function to handle the intersection changes
// function handleIntersection(entries, observer) {
//     entries.forEach(function(entry) {
//         if (entry.isIntersecting) {
//             // Start the Lottie animation when the section is in view
//             animation_desktop.play();
//             animation_mobile.play();
//             animation_slide.play();
//             observer.unobserve(entry.target);
//         }
//     });
// }

// // Create an Intersection Observer instance
// var observer = new IntersectionObserver(handleIntersection, options);

// // Observe the target section
// observer.observe(targetSection);

// // load animation mobile
// const animation_mobile = bodymovin.loadAnimation({
//     container: document.getElementById('bm'),
//     renderer: 'svg',
//     loop: false,
//     autoplay: false,
//     path: '../data/json/whiteribbon.json'
// });

// // Load animation desktop
// var animation_desktop = bodymovin.loadAnimation({
//     container: document.getElementById('ribbon'),
//     renderer: 'svg',
//     loop: false,
//     autoplay: false, // Set autoplay to false initially
//     path: '../data/json/whiteribbon-desktop.json'
// });

// // Load animation hero (slide down)
// var animation_slide = bodymovin.loadAnimation({
//     container: document.getElementById('slide'),
//     renderer: 'svg',
//     loop: true,
//     autoplay: true, // Set autoplay to false initially
//     path: '../data/json/sliding-down.json'
// });


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