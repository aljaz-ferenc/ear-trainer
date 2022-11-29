import { notes, sampler } from './global.js'

class Scale {
    constructor(bass) {
        this.time = 5
        this.playSpecificScale = function () {
            const scale = this.scale.slice(0, -1)
            const now = Tone.now()
            Tone.loaded().then(() => {
                sampler.triggerAttackRelease(scale[0], .5, now);
                sampler.triggerAttackRelease(scale[1], .5, now + 0.5);
                sampler.triggerAttackRelease(scale[2], .5, now + 1);
                sampler.triggerAttackRelease(scale[3], .5, now + 1.5);
                sampler.triggerAttackRelease(scale[4], .5, now + 2);
                sampler.triggerAttackRelease(scale[5], .5, now + 2.5);
                if (scale.length === 6) return
                sampler.triggerAttackRelease(scale[6], .5, now + 3);
                if (scale.length === 7) return
                sampler.triggerAttackRelease(scale[7], .5, now + 3.5);
                if (scale.length === 8) return
                sampler.triggerAttackRelease(scale[8], .5, now + 4);

            })
        }
        this.playSpecificScaleDescending = function () {
            const reversed = this.scale.slice(0, -1).reverse()
            const now = Tone.now()
            Tone.loaded().then(() => {
                sampler.triggerAttackRelease(reversed[0], .5, now);
                sampler.triggerAttackRelease(reversed[1], .5, now + 0.5);
                sampler.triggerAttackRelease(reversed[2], .5, now + 1);
                sampler.triggerAttackRelease(reversed[3], .5, now + 1.5);
                sampler.triggerAttackRelease(reversed[4], .5, now + 2);
                sampler.triggerAttackRelease(reversed[5], .5, now + 2.5);
                if (reversed.length === 6) return
                sampler.triggerAttackRelease(reversed[6], .5, now + 3);
                if (reversed.length === 7) return
                sampler.triggerAttackRelease(reversed[7], .5, now + 3.5);
                if (reversed.length === 8) return
                sampler.triggerAttackRelease(reversed[8], .5, now + 4);

            })
        }
    }
}

class Major extends Scale {

    constructor(bass) {
        super(bass)
        this.bass = bass ? bass : Math.floor(Math.random() * (notes.length - 12))
        this.scale = [notes[this.bass], notes[this.bass + 2], notes[this.bass + 4], notes[this.bass + 5], notes[this.bass + 7], notes[this.bass + 9], notes[this.bass + 11], notes[this.bass + 12], 'majorScale']
    }
}

class Dorian extends Scale {

    constructor(bass) {
        super(bass)
        this.bass = bass ? bass : Math.floor(Math.random() * (notes.length - 12))
        this.scale = [notes[this.bass], notes[this.bass + 2], notes[this.bass + 3], notes[this.bass + 5], notes[this.bass + 7], notes[this.bass + 9], notes[this.bass + 10], notes[this.bass + 12], 'dorianScale']
    }
}

class Phrygian extends Scale {

    constructor(bass) {
        super(bass)
        this.bass = bass ? bass : Math.floor(Math.random() * (notes.length - 12))
        this.scale = [notes[this.bass], notes[this.bass + 1], notes[this.bass + 3], notes[this.bass + 5], notes[this.bass + 7], notes[this.bass + 8], notes[this.bass + 10], notes[this.bass + 12], 'phrygianScale']
    }
}

class Lydian extends Scale {

    constructor(bass) {
        super(bass)
        this.bass = bass ? bass : Math.floor(Math.random() * (notes.length - 12))
        this.scale = [notes[this.bass], notes[this.bass + 2], notes[this.bass + 4], notes[this.bass + 6], notes[this.bass + 7], notes[this.bass + 9], notes[this.bass + 11], notes[this.bass + 12], 'lydianScale']
    }
}

class Mixolydian extends Scale {

    constructor(bass) {
        super(bass)
        this.bass = bass ? bass : Math.floor(Math.random() * (notes.length - 12))
        this.scale = [notes[this.bass], notes[this.bass + 2], notes[this.bass + 4], notes[this.bass + 5], notes[this.bass + 7], notes[this.bass + 9], notes[this.bass + 10], notes[this.bass + 12], 'mixolydianScale']
    }
}

class Minor extends Scale {

    constructor(bass) {
        super(bass)
        this.bass = bass ? bass : Math.floor(Math.random() * (notes.length - 12))
        this.scale = [notes[this.bass], notes[this.bass + 2], notes[this.bass + 3], notes[this.bass + 5], notes[this.bass + 7], notes[this.bass + 8], notes[this.bass + 10], notes[this.bass + 12], 'minorScale']
    }
}

class Locrian extends Scale {

    constructor(bass){
        super(bass)
        this.bass = bass ? bass : Math.floor(Math.random() * (notes.length - 12))
        this.scale = [notes[this.bass], notes[this.bass + 1], notes[this.bass + 3], notes[this.bass + 5], notes[this.bass + 6], notes[this.bass + 8], notes[this.bass + 10], notes[this.bass + 12], 'locrianScale']
    }
}

class HarmonicMinor extends Scale {

    constructor(bass) {
        super(bass)
        this.bass = bass ? bass : Math.floor(Math.random() * (notes.length - 12))
        this.scale = [notes[this.bass], notes[this.bass + 2], notes[this.bass + 3], notes[this.bass + 5], notes[this.bass + 7], notes[this.bass + 8], notes[this.bass + 11], notes[this.bass + 12], 'harmonicMinor']
    }
}

class MelodicMinor extends Scale {

    constructor(bass){
        super(bass)
        this.bass = bass ? bass : Math.floor(Math.random() * (notes.length - 12))
        this.scale = [notes[this.bass], notes[this.bass + 2], notes[this.bass + 3], notes[this.bass + 5], notes[this.bass + 7], notes[this.bass + 9], notes[this.bass + 11], notes[this.bass + 12], 'melodicMinor']
    }
}

class Diminished extends Scale {

    constructor(bass){
        super(bass)
        this.bass = bass ? bass : Math.floor(Math.random() * (notes.length - 12))
        this.scale = [notes[this.bass], notes[this.bass + 2], notes[this.bass + 3], notes[this.bass + 5], notes[this.bass + 6], notes[this.bass + 8], notes[this.bass + 9], notes[this.bass + 11], notes[this.bass + 12], 'diminishedScale']
    }
}

class WholeTone extends Scale {

    constructor(bass){
        super(bass)
        this.bass = bass ? bass : Math.floor(Math.random() * (notes.length - 12))
        this.scale = [notes[this.bass], notes[this.bass + 2], notes[this.bass + 4], notes[this.bass + 6], notes[this.bass + 8], notes[this.bass + 10], notes[this.bass + 12], 'wholeToneScale']
    }
}

class MinorPentatonic extends Scale {

    constructor(bass) {
        super(bass)
        this.bass = bass ? bass : Math.floor(Math.random() * (notes.length - 12))
        this.scale = [notes[this.bass], notes[this.bass + 3], notes[this.bass + 5], notes[this.bass + 7], notes[this.bass + 10], notes[this.bass + 12], 'minorPentatonic']
    }
}

class MajorPentatonic extends Scale {

    constructor(bass) {
        super(bass)
        this.bass = bass ? bass : Math.floor(Math.random() * (notes.length - 12))
        this.scale = [notes[this.bass], notes[this.bass + 2], notes[this.bass + 4], notes[this.bass + 7], notes[this.bass + 9], notes[this.bass + 12], 'majorPentatonic']
    }
}

const scaleNames = {
    majorScale: 'Major Scale',
    dorianScale: 'Dorian Mode',
    phrygianScale: 'Phrygian Mode',
    lydianScale: 'Lydian Mode',
    mixolydianScale: 'Mixolydian Mode',
    minorScale: 'Natural Minor',
    harmonicMinor: 'Harmonic Minor',
    melodicMinor: 'Melodic Minor',
    diminishedScale: 'Diminished Scale',
    wholeToneScale: 'Whole Tone Scale',
    minorPentatonic: 'Minor Pentatonic',
    majorPentatonic: 'Major Pentatonic',
}


const generateRandomScale = function (selectedScales) {
    let randomScaleName
    let randomScale
    const randomNum = Math.floor(Math.random() * selectedScales.length)
    randomScaleName = selectedScales[randomNum]
    switch (randomScaleName) {
        case 'majorScale': randomScale = new Major().scale
            break
        case 'dorianScale': randomScale = new Dorian().scale
            break
        case 'phrygianScale': randomScale = new Phrygian().scale
            break
        case 'lydianScale': randomScale = new Lydian().scale
            break
        case 'mixolydianScale': randomScale = new Mixolydian().scale
            break
        case 'locrianScale': randomScale = new Locrian().scale
            break
        case 'minorScale': randomScale = new Minor().scale
            break
        case 'harmonicMinor': randomScale = new HarmonicMinor().scale
            break
        case 'melodicMinor': randomScale = new MelodicMinor().scale
            break
        case 'diminishedScale': randomScale = new Diminished().scale
            break
        case 'wholeToneScale': randomScale = new WholeTone().scale
            break
        case 'minorPentatonic': randomScale = new MinorPentatonic().scale
            break
        case 'majorPentatonic': randomScale = new MajorPentatonic().scale
            break

    }
    return randomScale
}


function playScale(scale) {
    const descendingCheckScale = document.querySelector('#descending-scale')

    Tone.loaded().then(() => {
        let now = Tone.now()
        scale = scale.slice(0, - 1)
        if (descendingCheckScale.checked) {
            scale = scale.reverse()
        }
        sampler.triggerAttackRelease(scale[0], .5, now);
        sampler.triggerAttackRelease(scale[1], .5, now + 0.5);
        sampler.triggerAttackRelease(scale[2], .5, now + 1);
        sampler.triggerAttackRelease(scale[3], .5, now + 1.5);
        sampler.triggerAttackRelease(scale[4], .5, now + 2);
        sampler.triggerAttackRelease(scale[5], .5, now + 2.5);
        if (scale.length === 6) return
        sampler.triggerAttackRelease(scale[6], .5, now + 3);
        if (scale.length === 7) return
        sampler.triggerAttackRelease(scale[7], .5, now + 3.5);
        if (scale.length === 8) return
        sampler.triggerAttackRelease(scale[8], .5, now + 4);

    })
}

export { Major, Dorian, Phrygian, Lydian, Mixolydian, Minor, Locrian, HarmonicMinor, MelodicMinor, Diminished, WholeTone, MinorPentatonic, MajorPentatonic, generateRandomScale, playScale, scaleNames }