document.getElementById('powerSwitch').addEventListener('change', function() {
    var isChecked = this.checked;
    document.getElementById('randomBtn').disabled = !isChecked;
    document.getElementById('jamBtn').disabled = !isChecked;
});

document.getElementById('randomBtn').addEventListener('click', function() {
    if (document.getElementById('powerSwitch').checked) {
        var audioFiles = ['T02RAND0.ogg', 'T02RAND1.ogg', 'T02RAND2.ogg', 'T02RAND3.ogg', 'T02RAND4.ogg', 'T02RAND5.ogg', 'T02RAND6.ogg', 'T02RAND7.ogg', 'T02RAND8.ogg']; // replace with actual file names
        var randomFile = audioFiles[Math.floor(Math.random() * audioFiles.length)];
        var audio = new Audio("./audio/" + randomFile);
        audio.play();
    }
});

document.getElementById('jamBtn').addEventListener('click', function() {
    if (document.getElementById('powerSwitch').checked) {
        var jamAudio = new Audio('./audio/T00.ogg'); // replace with actual file name
        jamAudio.play();
    }
});
