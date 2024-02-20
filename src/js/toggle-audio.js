function toggleAudio() {
    var audio = document.getElementById("audioPlayer");
    var playButton = document.getElementById("playButton");

    if (audio.paused) {
        audio.play();
        playButton.src = "./dist/img/icons/sound-on.png"; // Change to sound-on image
    } else {
        audio.pause();
        playButton.src = "./dist/img/icons/sound-off.png"; // Change to sound-off image
    }
}