var currentAudio = null;

document.getElementById('powerSwitch').addEventListener('change', function() {
    var isChecked = this.checked;
    document.getElementById('randomBtn').disabled = !isChecked;
    document.getElementById('jamBtn').disabled = !isChecked;

    // Stop current audio when power is turned off
    if (!isChecked && currentAudio) {
        currentAudio.pause();
        currentAudio = null;
    }
});

document.getElementById('randomBtn').addEventListener('click', function() {
    if (document.getElementById('powerSwitch').checked) {
        // Stop currently playing audio
        if (currentAudio) {
            currentAudio.pause();
        }

        var audioFiles = ['T02RAND0.mp3', 'T02RAND1.mp3', 'T02RAND2.mp3', 'T02RAND3.mp3', 'T02RAND4.mp3', 'T02RAND5.mp3', 'T02RAND6.mp3', 'T02RAND7.mp3', 'T02RAND8.mp3']; // replace with actual file names
        var randomFile = audioFiles[Math.floor(Math.random() * audioFiles.length)];
        currentAudio = new Audio("./audio/" + randomFile);
        currentAudio.play();
    }
});

document.getElementById('jamBtn').addEventListener('click', function() {
    if (document.getElementById('powerSwitch').checked) {
        // Stop currently playing audio
        if (currentAudio) {
            currentAudio.pause();
        }

        currentAudio = new Audio('./audio/T00.mp3'); // replace with actual file name
        currentAudio.play();
    }
});
