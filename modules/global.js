const notes = [
    'E2', 'F2', 'F#2', 'G2', 'Ab2',
    'A2', 'Bb2', 'B2', 'C3', 'C#3', 'D3', 'D#3', 'E3', 'F3', 'F#3', 'G3', 'Ab3',
    'A3', 'Bb3', 'B3', 'C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'Ab4',
    'A4', 'Bb4', 'B4', 'C5', 'C#5', 'D5', 'D#5', 'E5', 'F5', 'F#5', 'G5', 'Ab5',
    'A5', 'Bb5', 'B5', 'C6', 'C#6', 'D6',
]

const sampler = new Tone.Sampler({
    urls: {
        "C5": "C5.mp3",
        "D#4": "Ds4.mp3",
        "F#4": "Fs4.mp3",
        "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
}).toDestination();

export { notes, sampler }