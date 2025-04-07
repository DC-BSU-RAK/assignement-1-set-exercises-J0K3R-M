const audioSamples = [
    { name: "Sample 1", file: "sample1.mp3" },
    { name: "Sample 2", file: "sample2.mp3" },
    { name: "Sample 3", file: "sample3.mp3" },
    { name: "Sample 4", file: "sample4.mp3" },
    { name: "Sample 5", file: "sample5.mp3" },
    { name: "Sample 6", file: "sample6.mp3" },
    { name: "Sample 7", file: "sample7.mp3" },
    { name: "Sample 8", file: "sample8.mp3" },
    { name: "Sample 9", file: "sample9.mp3" },
];

const soundboard = document.querySelector('.soundboard');

audioSamples.forEach(sample => {
    const button = document.createElement('button');
    button.classList.add('button');
    button.textContent = sample.name;
    button.addEventListener('click', () => playAudio(sample.file));
    soundboard.appendChild(button);
});

function playAudio(file) {
    const audio = new Audio(`../Audio Sampler/${file}`);
    audio.play();
}