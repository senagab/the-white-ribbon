// // Modals
// const thumbnailElements = document.querySelectorAll('.thumbnail');
// const videoModal = document.getElementById('videoModal');
// const modalVideo = document.getElementById('modalVideo');
// const modalTitle = document.getElementById('videoModalLabel');
// const prevBtn = document.getElementById('prevBtn');
// const nextBtn = document.getElementById('nextBtn');

// let currentVideoIndex = 0;
// let videos = [];

// thumbnailElements.forEach(function (thumbnail, index) {
//     const videoSrc = thumbnail.dataset.videoSrc;
//     const videoTitle = thumbnail.querySelector('.scene-description').innerText;

//     videos.push({
//         src: videoSrc,
//         title: videoTitle
//     });

//     thumbnail.addEventListener('click', function () {
//         currentVideoIndex = index;
//         updateModalContent();
//         $('#videoModal').modal('show');
//     });
// });

// function updateModalContent() {
//     modalVideo.src = videos[currentVideoIndex].src;
//     modalTitle.innerText = videos[currentVideoIndex].title;
// }

// $('#videoModal').on('hide.bs.modal', function () {
//     modalVideo.pause();
// });

// // Lottie
// const options = {
//     root: null,
//     rootMargin: '0px',
//     threshold: 0.5
// };

// const targetSection = document.getElementById('about');

// function handleIntersection(entries, observer) {
//     entries.forEach(function(entry) {
//         if (entry.isIntersecting) {
//             animation.play();
//             observer.unobserve(entry.target);
//         }
//     });
// }

// const observer = new IntersectionObserver(handleIntersection, options);
// observer.observe(targetSection);

// const animation_mobile = bodymovin.loadAnimation({
//     container: document.getElementById('bm'),
//     renderer: 'svg',
//     loop: false,
//     autoplay: false,
//     path: 'data/json/whiteribbon.json'
// });

// const animation_desktop = bodymovin.loadAnimation({
//     container: document.getElementById('ribbon'),
//     renderer: 'svg',
//     loop: false,
//     autoplay: false,
//     path: 'data/json/whiteribbon.json'
// });

// // Mobile Menu
// document.addEventListener("DOMContentLoaded", function() {
//     const links = document.getElementsByClassName("nav-item");
//     const menu = document.getElementById("menu-nav");
    
//     for (let i = 0; i < links.length; i++) {
//         links[i].addEventListener("click", function(event) {
//             console.log("Nav link clicked");
//             menu.classList.remove("show");
//         });
//     }
// });

// // Audio
// function toggleAudio() {
//     const audio = document.getElementById("audioPlayer");
//     const playButton = document.getElementById("playButton");

//     if (audio.paused) {
//         audio.play();
//         playButton.src = "./dist/img/icons/sound-on.png";
//     } else {
//         audio.pause();
//         audio.currentTime = 0;
//         playButton.src = "./dist/img/icons/sound-off.png";
//     }

//     audio.addEventListener('ended', function() {
//         audio.play();
//         playButton.src = "./dist/img/icons/sound-on.png";
//     });
// }

// let  frente  =  document.getElementById("frente")

// document.addEventListener('mousemove', (event) =>{
//     let  x  =  event.pageX  +  "px";
//     let  y  =  event.pageY  +  "px";
//     // frente.style.webkitMaskImage  =  radial-gradient(circle at ${x}  ${y}, transparent 55px, black 0%);
//     frente.style.maskImage = `radial-gradient(circle at ${x} ${y}, rgba(255, 255, 255, 0.7) 1px, white 10%)`;
// })