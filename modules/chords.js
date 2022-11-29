import { notes, sampler } from './global.js'

class Chord {
    constructor(bass) {
        this.time = 5
        this.playRoot = function () {
            Tone.loaded().then(() => {
                const chord = this.root.slice(0, 3)
                sampler.triggerAttackRelease(chord, 1);
            })
        }
        this.playInv1 = function () {
            Tone.loaded().then(() => {
                const chord = this.inv1.slice(0, 3)
                sampler.triggerAttackRelease(chord, 1);
            })
        }
        this.playInv2 = function () {
            Tone.loaded().then(() => {
                const chord = this.inv2.slice(0, 3)
                sampler.triggerAttackRelease(chord, 1);
            })
        }
        this.playInv3 = function () {
            Tone.loaded().then(() => {
                const chord = this.inv3.slice(0, 3)
                sampler.triggerAttackRelease(chord, 1);
            })
        }
        this.playArpeggioRoot = function () {
            let now = Tone.now()
            let i = .5
            const chord = this.root.slice(0, 3)
            Tone.loaded().then(() => {
                chord.forEach(note => {
                    sampler.triggerAttack(note, now);
                    now = now + i
                })
            })
            sampler.triggerRelease([...chord], now + 5)
        }
        this.playArpeggioInv1 = function () {
            let now = Tone.now()
            let i = .5
            const chord = this.inv1.slice(0, 3)
            Tone.loaded().then(() => {
                chord.forEach(note => {
                    sampler.triggerAttack(note, now);
                    now = now + i
                })
            })
            sampler.triggerRelease([...this.inv1], now + 5)
        }
        this.playArpeggioInv2 = function () {
            let now = Tone.now()
            const chord = this.inv2.slice(0, 3)
            Tone.loaded().then(() => {
                let i = .5
                chord.forEach(note => {
                    sampler.triggerAttack(note, now);
                    now = now + i
                })
            })
            sampler.triggerRelease([...chord], now + 5)
        }
        this.playArpeggioInv3 = function () {
            let now = Tone.now()
            const chord = this.inv1.slice(0, 4)
            Tone.loaded().then(() => {
                let i = .5
                chord.forEach(note => {
                    sampler.triggerAttack(note, now);
                    now = now + i
                })
            })
            sampler.triggerRelease([...chord], now + 5)
        }
    }
}

class MajorTriad extends Chord {

    constructor(bass, playRoot, playInv1, playInv2, playArpeggioRoot, playArpeggioInv1, playArpeggioInv2) {
        super(playRoot, playInv1, playInv2, playArpeggioRoot, playArpeggioInv1, playArpeggioInv2)
        this.bass = bass ? bass : Math.floor(Math.random() * (notes.length - 9))
        this.root = [notes[this.bass], notes[this.bass + 4], notes[this.bass + 7], 'majorTriadRoot']
        this.inv1 = [notes[this.bass], notes[this.bass + 3], notes[this.bass + 8], 'majorTriadInv1']
        this.inv2 = [notes[this.bass], notes[this.bass + 5], notes[this.bass + 9], 'majorTriadInv2']
    }
}

class MinorTriad extends Chord {

    constructor(bass, playRoot, playInv1, playInv2, playArpeggioRoot, playArpeggioInv1, playArpeggioInv2) {
        super(playRoot, playInv1, playInv2, playArpeggioRoot, playArpeggioInv1, playArpeggioInv2)
        this.bass = bass ? bass : Math.floor(Math.random() * (notes.length - 9))
        this.root = [notes[this.bass], notes[this.bass + 3], notes[this.bass + 7], 'minorTriadRoot'],
            this.inv1 = [notes[this.bass], notes[this.bass + 4], notes[this.bass + 9], 'minorTriadInv1'],
            this.inv2 = [notes[this.bass], notes[this.bass + 5], notes[this.bass + 8], 'minorTriadInv2']
    }
}

class DiminishedTriad extends Chord {

    constructor(bass, playRoot, playArpeggioRoot) {
        super(playRoot, playArpeggioRoot)
        this.bass = bass ? bass : Math.floor(Math.random() * (notes.length - 6))
        this.root = [notes[this.bass], notes[this.bass + 3], notes[this.bass + 6], 'diminishedTriadRoot']
    }
}

class AugumentedTriad extends Chord {

    constructor(bass, playRoot, playArpeggioRoot) {
        super(playRoot, playArpeggioRoot)
        this.bass = bass ? bass : Math.floor(Math.random() * (notes.length - 8))
        this.root = [notes[this.bass], notes[this.bass + 4], notes[this.bass + 8], 'augumentedTriadRoot']
    }
}

class MajorSeventh extends Chord {

    constructor(bass, playRoot, playInv1, playInv2, playInv3, playArpeggioRoot, playArpeggioInv1, playArpeggioInv2, playArpeggioInv3) {
        super(playRoot, playInv1, playInv2, playInv3, playArpeggioRoot, playArpeggioInv1, playArpeggioInv2, playArpeggioInv3)
        this.bass = bass ? bass : Math.floor(Math.random() * (notes.length - 11))
        this.root = [notes[this.bass], notes[this.bass + 4], notes[this.bass + 7], notes[this.bass + 11], 'majorSeventhRoot'],
            this.inv1 = [notes[this.bass], notes[this.bass + 3], notes[this.bass + 7], notes[this.bass + 8], 'majorSeventhInv1'],
            this.inv2 = [notes[this.bass], notes[this.bass + 4], notes[this.bass + 5], notes[this.bass + 9], 'majorSeventhInv2'],
            this.inv3 = [notes[this.bass], notes[this.bass + 1], notes[this.bass + 5], notes[this.bass + 8], 'majorSeventhInv3']
    }
}

class MinorSeventh extends Chord {

    constructor(bass, playRoot, playArpeggioRoot, playArpeggioInv1, playArpeggioInv2, playArpeggioInv3) {
        super(playRoot, playArpeggioRoot, playArpeggioInv1, playArpeggioInv2, playArpeggioInv3)
        this.bass = bass ? bass : Math.floor(Math.random() * (notes.length - 10))
        this.root = [notes[this.bass], notes[this.bass + 3], notes[this.bass + 7], notes[this.bass + 10], 'minorSeventhRoot'],
            this.inv1 = [notes[this.bass], notes[this.bass + 4], notes[this.bass + 7], notes[this.bass + 9], 'minorSeventhInv1'],
            this.inv2 = [notes[this.bass], notes[this.bass + 3], notes[this.bass + 5], notes[this.bass + 8], 'minorSeventhInv2'],
            this.inv3 = [notes[this.bass], notes[this.bass + 2], notes[this.bass + 5], notes[this.bass + 9], 'minorSeventhInv3']
    }
}

class DominantSeventh extends Chord {

    constructor(bass, playRoot, playArpeggioRoot, playArpeggioInv1, playArpeggioInv2, playArpeggioInv3) {
        super(playRoot, playArpeggioRoot, playArpeggioInv1, playArpeggioInv2, playArpeggioInv3)
        this.bass = bass ? bass : Math.floor(Math.random() * (notes.length - 10))
        this.root = [notes[this.bass], notes[this.bass + 4], notes[this.bass + 7], notes[this.bass + 10], 'dominantSeventhRoot'],
            this.inv1 = [notes[this.bass], notes[this.bass + 3], notes[this.bass + 6], notes[this.bass + 8], 'dominantSeventhInv1'],
            this.inv2 = [notes[this.bass], notes[this.bass + 3], notes[this.bass + 5], notes[this.bass + 9], 'dominantSeventhInv2'],
            this.inv3 = [notes[this.bass], notes[this.bass + 2], notes[this.bass + 6], notes[this.bass + 9], 'dominantSeventhInv3']
    }
}

class DiminishedSeventh extends Chord {

    constructor(bass, playRoot, playArpeggioRoot) {
        super(playRoot, playArpeggioRoot)
        this.bass = bass ? bass : Math.floor(Math.random() * (notes.length - 9))
        this.root = [notes[this.bass], notes[this.bass + 3], notes[this.bass + 6], notes[this.bass + 9], 'diminishedSeventhRoot']
    }
}

class HalfDiminishedSeventh extends Chord {

    constructor(bass, playRoot, playInv1, playInv2, playInv3, playArpeggioRoot, playArpeggioInv1, playArpeggioInv2, playArpeggioInv3) {
        super(playRoot, playInv1, playInv2, playInv3, playArpeggioRoot, playArpeggioInv1, playArpeggioInv2, playArpeggioInv3)
        this.bass = bass ? bass : Math.floor(Math.random() * (notes.length - 10))
        this.root = [notes[this.bass], notes[this.bass + 3], notes[this.bass + 6], notes[this.bass + 10], 'halfDiminishedSeventhRoot'],
            this.inv1 = [notes[this.bass], notes[this.bass + 3], notes[this.bass + 7], notes[this.bass + 9], 'halfDiminishedSeventhInv1'],
            this.inv2 = [notes[this.bass], notes[this.bass + 4], notes[this.bass + 6], notes[this.bass + 9], 'halfDiminishedSeventhInv2'],
            this.inv3 = [notes[this.bass], notes[this.bass + 2], notes[this.bass + 5], notes[this.bass + 8], 'halfDiminishedSeventhInv3']
    }
}


const chordNames = {
    majorTriadRoot: 'Major Triad Root',
    majorTriadInv1: 'Major Triad 1st Inversion',
    majorTriadInv2: 'Major Triad 2nd Inversion',
    minorTriadRoot: 'Minor Triad Root',
    minorTriadInv1: 'Minor Triad 1st Inversion',
    minorTriadInv2: 'Minor Triad 2nd Inversion',
    diminishedTriadRoot: 'Diminished Triad Root',
    augumentedTriadRoot: 'Augumented Triad Root',
    majorSeventhRoot: 'Major 7th Root',
    majorSeventhInv1: 'Major 7th 1st Inversion',
    majorSeventhInv2: 'Major 7th 2nd Inversion',
    majorSeventhInv3: 'Major 7th 3rd Inversion',
    minorSeventhRoot: 'Minor 7th Root',
    minorSeventhInv1: 'Minor 7th 1st Inversion',
    minorSeventhInv2: 'Minor 7th 2nd Inversion',
    minorSeventhInv3: 'Minor 7th 3rd Inversion',
    dominantSeventhRoot: 'Dominant 7th Root',
    dominantSeventhInv1: 'Dominant 7th 1st Inversion',
    dominantSeventhInv2: 'Dominant 7th 2nd Inversion',
    dominantSeventhInv3: 'Dominant 7th 3rd Inversion',
    halfDiminishedSeventhRoot: 'Half Diminished 7th Root',
    halfDiminishedSeventhInv1: 'Half Diminished 7th 1st Inversion',
    halfDiminishedSeventhInv2: 'Half Diminished 7th 2nd Inversion',
    halfDiminishedSeventhInv3: 'Half Diminished 7th 3rd Inversion',
    diminishedSeventhRoot: 'Diminished 7th Root',
}


const generateRandomChord = function (selectedChords) {
    let randomChordName
    let randomChord
    const randomNum = Math.floor(Math.random() * selectedChords.length)
    randomChordName = selectedChords[randomNum]
    switch (randomChordName) {
        case 'majorTriadRoot': randomChord = new MajorTriad().root
            break
        case 'majorTriadInv1': randomChord = new MajorTriad().inv1
            break
        case 'majorTriadInv2': randomChord = new MajorTriad().inv2
            break
        case 'minorTriadRoot': randomChord = new MinorTriad().root
            break
        case 'minorTriadInv1': randomChord = new MinorTriad().inv1
            break
        case 'minorTriadInv2': randomChord = new MinorTriad().inv2
            break
        case 'diminishedTriadRoot': randomChord = new DiminishedTriad().root
            break
        case 'augumentedTriadRoot': randomChord = new AugumentedTriad().root
            break
        case 'majorSeventhRoot': randomChord = new MajorSeventh().root
            break
        case 'majorSeventhInv1': randomChord = new MajorSeventh().inv1
            break
        case 'majorSeventhInv2': randomChord = new MajorSeventh().inv2
            break
        case 'majorSeventhInv3': randomChord = new MajorSeventh().inv3
            break
        case 'minorSeventhRoot': randomChord = new MinorSeventh().root
            break
        case 'minorSeventhInv1': randomChord = new MinorSeventh().inv1
            break
        case 'minorSeventhInv2': randomChord = new MinorSeventh().inv2
            break
        case 'minorSeventhInv3': randomChord = new MinorSeventh().inv3
            break
        case 'dominantSeventhRoot': randomChord = new DominantSeventh().root
            break
        case 'dominantSeventhInv1': randomChord = new DominantSeventh().inv1
            break
        case 'dominantSeventhInv2': randomChord = new DominantSeventh().inv2
            break
        case 'dominantSeventhInv3': randomChord = new DominantSeventh().inv3
            break
        case 'diminishedSeventhRoot': randomChord = new DiminishedSeventh().root
            break
        case 'halfDiminishedSeventhRoot': randomChord = new HalfDiminishedSeventh().root
            break
        case 'halfDiminishedSeventhInv1': randomChord = new HalfDiminishedSeventh().inv1
            break
        case 'halfDiminishedSeventhInv2': randomChord = new HalfDiminishedSeventh().inv2
            break
        case 'halfDiminishedSeventhInv3': randomChord = new HalfDiminishedSeventh().inv3
            break
    }

    return randomChord
}

function playArpeggio(chord) {
    const descendingCheckChord = document.querySelector('#descending-chord')
    Tone.loaded().then(() => {
        let now = Tone.now()
        chord = chord.slice(0, -1)
        if (descendingCheckChord && descendingCheckChord.checked) {
            chord = chord.reverse()
        }
        sampler.triggerAttackRelease(chord[0], 4, now);
        sampler.triggerAttackRelease(chord[1], 3.5, now + 0.5);
        sampler.triggerAttackRelease(chord[2], 3, now + 1);
        if (chord.length === 3) return
        sampler.triggerAttackRelease(chord[3], 2.5, now + 1.5)
    })
}

function playChord(chord) {
    Tone.loaded().then(() => {
        sampler.triggerAttackRelease(chord[0], 4);
        sampler.triggerAttackRelease(chord[1], 4);
        sampler.triggerAttackRelease(chord[2], 4);
        chord[3].length > 3 ? null : sampler.triggerAttackRelease(chord[3], 4)
    })
}


export { MajorTriad, MinorTriad, DiminishedTriad, AugumentedTriad, MajorSeventh, MinorSeventh, DominantSeventh, DiminishedSeventh, HalfDiminishedSeventh, generateRandomChord, playArpeggio, playChord, chordNames }