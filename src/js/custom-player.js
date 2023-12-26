// variables
const player = document.querySelector('.modal-body');
const video = player.querySelector('.modal-video');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');

// functions
function togglePlay() {
    const toggle = video.paused ? 'play' : 'pause';
    video[toggle]();
    // if(video.paused) {
    //     video.play();
    // } else {
    //     video.pause()
    // }
}

// event listeners
video.addEventListener('click', togglePlay);