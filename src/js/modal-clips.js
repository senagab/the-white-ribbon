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