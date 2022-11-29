import { notes, sampler } from './global.js'

class Interval {
    constructor(bass) {
        this.playPerfect = function () {
            Tone.loaded().then(() => {
                sampler.triggerAttackRelease(this.perfect, 3);
            })
        }
        this.playMajor = function () {
            Tone.loaded().then(() => {
                sampler.triggerAttackRelease(this.major, 3);
            })
        }
        this.playMinor = function () {
            Tone.loaded().then(() => {
                sampler.triggerAttackRelease(this.minor, 3);
            })
        }
        this.playDiminished = function () {
            Tone.loaded().then(() => {
                sampler.triggerAttackRelease(this.diminished, 3);
            })
        }
        this.playAugumented = function () {
            Tone.loaded().then(() => {
                sampler.triggerAttackRelease(this.augumented, 3);
            })
        }
    }
}

class Unison extends Interval {
    constructor(bass, playPerfect, playAugumented) {
        super(playPerfect, playAugumented)
        this.bass = bass ? bass : Math.floor(Math.random() * notes.length)
        this.perfect = [notes[this.bass], notes[this.bass], 'perfectUnison']
    }
}

class Second extends Interval {
    constructor(bass, playMajor, playMinor) {
        super(playMajor, playMinor)
        this.bass = bass ? bass : Math.floor(Math.random() * (notes.length - 2))
        this.minor = [notes[this.bass], notes[this.bass + 1], 'minorSecond']
        this.major = [notes[this.bass], notes[this.bass + 2], 'majorSecond']
    }
}

class Third extends Interval {
    constructor(bass, playMajor, playMinor) {
        super(playMajor, playMinor)
        this.bass = bass ? bass : Math.floor(Math.random() * (notes.length - 4))
        this.minor = [notes[this.bass], notes[this.bass + 3], 'minorThird']
        this.major = [notes[this.bass], notes[this.bass + 4], 'majorThird']
    }
}

class Fourth extends Interval {
    constructor(bass, playPerfect, playAugumented) {
        super(playPerfect, playAugumented)
        this.bass = bass ? bass : Math.floor(Math.random() * (notes.length - 6))
        this.perfect = [notes[this.bass], notes[this.bass + 5], 'perfectFourth']
        this.augumented = [notes[this.bass], notes[this.bass + 6], 'augumentedFourth']
    }
}

class Fifth extends Interval {
    constructor(bass, playPerfect, playDiminished) {
        super(playPerfect, playDiminished)
        this.bass = bass ? bass : Math.floor(Math.random() * (notes.length - 7))
        this.perfect = [notes[this.bass], notes[this.bass + 7], 'perfectFifth']
    }
}

class Sixth extends Interval {
    constructor(bass, playMajor, playMinor) {
        super(playMajor, playMinor)
        this.bass = bass ? bass : Math.floor(Math.random() * (notes.length - 9))
        this.minor = [notes[this.bass], notes[this.bass + 8], 'minorSixth']
        this.major = [notes[this.bass], notes[this.bass + 9], 'majorSixth']
    }
}

class Seventh extends Interval {
    constructor(bass, playMajor, playMinor) {
        super(playMajor, playMinor)
        this.bass = bass ? bass : Math.floor(Math.random() * (notes.length - 11))
        this.minor = [notes[this.bass], notes[this.bass + 10], 'minorSeventh']
        this.major = [notes[this.bass], notes[this.bass + 11], 'majorSeventh']
    }
}

class Octave extends Interval {
    constructor(bass, playPerfect) {
        super(playPerfect)
        this.bass = bass ? bass : Math.floor(Math.random() * (notes.length - 12))
        this.perfect = [notes[this.bass], notes[this.bass + 12], 'perfectOctave']
    }
}

class Ninth extends Interval {
    constructor(bass, playMajor, playMinor) {
        super(playMajor, playMinor)
        this.bass = bass ? bass : Math.floor(Math.random() * (notes.length - 14))
        this.minor = [notes[this.bass], notes[this.bass + 13], 'minorNinth']
        this.major = [notes[this.bass], notes[this.bass + 14], 'majorNinth']
    }
}

class Tenth extends Interval {
    constructor(bass, playMajor, playMinor) {
        super(playMajor, playMinor)
        this.bass = bass ? bass : Math.floor(Math.random() * (notes.length - 16))
        this.minor = [notes[this.bass], notes[this.bass + 15], 'minorTenth']
        this.major = [notes[this.bass], notes[this.bass + 16], 'majorTenth']
    }
}

class Eleventh extends Interval {
    constructor(bass, playPerfect, playAugumented) {
        super(playPerfect, playAugumented)
        this.bass = bass ? bass : Math.floor(Math.random() * (notes.length - 18))
        this.perfect = [notes[this.bass], notes[this.bass + 17], 'perfectEleventh']
        this.augumented = [notes[this.bass], notes[this.bass + 18], 'augumentedEleventh']
    }
}

class Twelveth extends Interval {
    constructor(bass, playPerfect, playDiminished) {
        super(playPerfect, playDiminished)
        this.bass = bass ? bass : Math.floor(Math.random() * (notes.length - 20))
        this.perfect = [notes[this.bass], notes[this.bass + 19], 'perfectTwelveth']
    }
}

class Thirteenth extends Interval {
    constructor(bass, playMajor, playMinor) {
        super(playMajor, playMinor)
        this.bass = bass ? bass : Math.floor(Math.random() * (notes.length - 21))
        this.minor = [notes[this.bass], notes[this.bass + 20], 'minorThirteenth']
        this.major = [notes[this.bass], notes[this.bass + 21], 'majorThirteenth']
    }
}

class Fourteenth extends Interval {
    constructor(bass, playMajor, playMinor) {
        super(playMajor, playMinor)
        this.bass = bass ? bass : Math.floor(Math.random() * (notes.length - 23))
        this.minor = [notes[this.bass], notes[this.bass + 22], 'minorFourteenth']
        this.major = [notes[this.bass], notes[this.bass + 23], 'majorFourteenth']
    }
}

class Fifteenth extends Interval {
    constructor(bass, playPerfect) {
        super(playPerfect)
        this.bass = bass ? bass : Math.floor(Math.random() * (notes.length - 24))
        this.perfect = [notes[this.bass], notes[this.bass + 24], 'perfectFifteenth']

    }
}

const intervalNames = {
    perfectUnison: 'P1',
    minorSecond: 'm2',
    majorSecond: 'M2',
    minorThird: 'm3',
    majorThird: 'M3',
    perfectFourth: 'P4',
    augumentedFourth: 'Aug4',
    perfectFifth: 'P5',
    minorSixth: 'm6',
    majorSixth: 'M6',
    minorSeventh: 'm7',
    majorSeventh: 'M7',
    perfectOctave: 'P8',
    minorNinth: 'm9',
    majorNinth: 'M9',
    minorTenth: 'm10',
    majorTenth: 'M10',
    perfectEleventh: 'P11',
    augumentedEleventh: 'Aug11',
    perfectTwelveth: 'P12',
    augumentedTwelveth: 'Aug12',
    minorThirteenth: 'm13',
    majorThirteenth: 'M13',
    minorFourteenth: 'm14',
    majorFourteenth: 'M14',
    perfectFifteenth: 'P15',
}


const generateRandomInterval = function (selectedIntervals) {
    let randomIntervalName
    let randomInterval
    const randomNum = Math.floor(Math.random() * selectedIntervals.length)
    randomIntervalName = selectedIntervals[randomNum]
    switch (randomIntervalName) {
        case 'perfectUnison': randomInterval = new Unison().perfect
            break
        case 'minorSecond': randomInterval = new Second().minor
            break
        case 'majorSecond': randomInterval = new Second().major
            break
        case 'minorThird': randomInterval = new Third().minor
            break
        case 'majorThird': randomInterval = new Third().major
            break
        case 'perfectFourth': randomInterval = new Fourth().perfect
            break
        case 'augumentedFourth': randomInterval = new Fourth().augumented
            break
        case 'perfectFifth': randomInterval = new Fifth().perfect
            break
        case 'minorSixth': randomInterval = new Sixth().minor
            break
        case 'majorSixth': randomInterval = new Sixth().major
            break
        case 'minorSeventh': randomInterval = new Seventh().minor
            break
        case 'majorSeventh': randomInterval = new Seventh().major
            break
        case 'perfectOctave': randomInterval = new Octave().perfect
            break
        case 'minorNinth': randomInterval = new Ninth().minor
            break
        case 'majorNinth': randomInterval = new Ninth().major
            break
        case 'minorTenth': randomInterval = new Tenth().minor
            break
        case 'majorTenth': randomInterval = new Tenth().major
            break
        case 'perfectEleventh': randomInterval = new Eleventh().perfect
            break
        case 'augumentedEleventh': randomInterval = new Eleventh().augumented
            break
        case 'perfectTwelveth': randomInterval = new Twelveth().perfect
            break
        case 'minorThirteenth': randomInterval = new Thirteenth().minor
            break
        case 'majorThirteenth': randomInterval = new Thirteenth().major
            break
        case 'minorFourteenth': randomInterval = new Fourteenth().minor
            break
        case 'majorFourteenth': randomInterval = new Fourteenth().major
            break
        case 'perfectFifteenth': randomInterval = new Fifteenth().perfect
            break
    }
    return randomInterval
}

function playInterval(interval) {
    Tone.loaded().then(() => {
        sampler.triggerAttackRelease(interval[0], 4);
        sampler.triggerAttackRelease(interval[1], 4);
    })
}

function playArpeggioInterval(interval) {
    const descendingCheckInterval = document.querySelector('#descending-interval')
    Tone.loaded().then(() => {
        let now = Tone.now()
        interval = interval.slice(0, -1)
        if (descendingCheckInterval.checked) {
            interval = interval.reverse()
        }
        sampler.triggerAttackRelease(interval[0], 4, now);
        sampler.triggerAttackRelease(interval[1], 3.5, now + 0.5);
    })
}
export { Unison, Second, Third, Fourth, Fifth, Sixth, Seventh, Octave, Ninth, Tenth, Eleventh, Twelveth, Thirteenth, Fourteenth, Fifteenth, generateRandomInterval, playInterval, playArpeggioInterval, intervalNames }