function toggleAudio() {
    var audio = document.getElementById("audioPlayer");
    var playButton = document.getElementById("playButton");

    if (audio.paused) {
        audio.play();
        playButton.src = "./dist/img/icons/sound-on.png"; // troca img
    } else {
        audio.pause();
        audio.currentTime = 0; // rewind
        playButton.src = "./dist/img/icons/sound-off.png"; // troca img
    }

    // listen event and update the image to sound-off when audio finishes
    audio.addEventListener('ended', function() {
        audio.play();
        playButton.src = "./dist/img/icons/sound-on.png"; // troca img
    });
}