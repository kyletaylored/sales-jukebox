document.getElementById('powerSwitch').addEventListener('change', function() {
    var isChecked = this.checked;
    document.getElementById('randomBtn').disabled = !isChecked;
    document.getElementById('jamBtn').disabled = !isChecked;
});

document.getElementById('randomBtn').addEventListener('click', function() {
    if (document.getElementById('powerSwitch').checked) {
        var audioFiles = ['audio1.ogg', 'audio2.ogg', 'audio3.ogg']; // replace with actual file names
        var randomFile = audioFiles[Math.floor(Math.random() * audioFiles.length)];
        var audio = new Audio(randomFile);
        audio.play();
    }
});

document.getElementById('jamBtn').addEventListener('click', function() {
    if (document.getElementById('powerSwitch').checked) {
        var jamAudio = new Audio('specificAudio.ogg'); // replace with actual file name
        jamAudio.play();
    }
});
