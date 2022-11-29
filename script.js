'use strict'

import { sampler } from './modules/global.js'
import { generateRandomChord, playArpeggio, playChord, chordNames } from './modules/chords.js'
import { generateRandomScale, playScale, scaleNames } from './modules/scales.js'
import { generateRandomInterval, playInterval, playArpeggioInterval, intervalNames } from './modules/intervals.js'

const playArpBtn = document.querySelector('.play-btns__chords--arp')
const playChordBtn = document.querySelector('.play-btns__chords--play')
const newChordBtn = document.querySelector('.play-btns__chords--new')
const optionBtnsChord = document.querySelectorAll('.option-btn-chord')
const optionBtnsInt = document.querySelectorAll('.option-btn-int')
const optionBtnsScale = document.querySelectorAll('.option-btn-scale')
const guessBtns = document.querySelector('.guess-btns')
const guessBtnsChord = document.querySelectorAll('.guess-btn-chord')
const guessBtnsInterval = document.querySelectorAll('.guess-btn-int')
const guessBtnsScale = document.querySelectorAll('.guess-btn-scale')
const playScaleBtn = document.querySelector('.play-btns__scales--play')
const newScaleBtn = document.querySelector('.play-btns__scales--new')
const playArpIntBtn = document.querySelector('.play-btns__intervals--arp')
const playIntervalBtn = document.querySelector('.play-btns__intervals--play')
const newIntervalBtn = document.querySelector('.play-btns__intervals--new')
const linkChordsListen = document.querySelectorAll('li:has(.link__chords--listen)')
const linkIntervalsListen = document.querySelectorAll('li:has(.link__intervals--listen)')
const linkScalesListen = document.querySelectorAll('li:has(.link__scales--listen)')
const linkChordsSing = document.querySelectorAll('li:has(.link__chords--sing)')
const linkIntervalsSing = document.querySelectorAll('li:has(.link__intervals--sing)')
const linkScalesSing = document.querySelectorAll('li:has(.link__scales--sing)')
const appChords = document.querySelector('.app__chords')
const appIntervals = document.querySelector('.app__intervals')
const appScales = document.querySelector('.app__scales')
const playBtnsChords = document.querySelector('.play-btns__chords')
const singBtnsChords = document.querySelector('.sing-btns__chords')
const playBtnsIntervals = document.querySelector('.play-btns__intervals')
const singBtnsIntervals = document.querySelector('.sing-btns__intervals')
const playBtnsScales = document.querySelector('.play-btns__scales')
const singBtnsScales = document.querySelector('.sing-btns__scales')
const newChordSingBtn = document.querySelector('.sing-btns__chords--new')
const firstChordSingBtn = document.querySelector('.sing-btns__chords--first')
const checkChordSingBtn = document.querySelector('.sing-btns__chords--check')
const newIntervalSingBtn = document.querySelector('.sing-btns__intervals--new')
const firstIntervalSingBtn = document.querySelector('.sing-btns__intervals--first')
const checkIntervalSingBtn = document.querySelector('.sing-btns__intervals--check')
const newScaleSingBtn = document.querySelector('.sing-btns__scales--new')
const firstScaleSingBtn = document.querySelector('.sing-btns__scales--first')
const checkScaleSingBtn = document.querySelector('.sing-btns__scales--check')
const descendingCheckChord = document.querySelector('#descending-chord')
const descendingCheckInterval = document.querySelector('#descending-interval')
const descendingCheckScale = document.querySelector('#descending-scale')
const autoplayCheckChord = document.querySelector('#autoplay-chord')
const autoplayCheckInterval = document.querySelector('#autoplay-interval')
const autoplayCheckScale = document.querySelector('#autoplay-scale')
const singChord = document.querySelector('.sing-chord')
const singInterval = document.querySelector('.sing-interval')
const singScale = document.querySelector('.sing-scale')
const checkAllChords = document.querySelector('.select-all__chords')
const checkAllScales = document.querySelector('.select-all__scales')
const checkAllIntervals = document.querySelector('.select-all__intervals')
const clearAllChords = document.querySelector('.clear-all__chords')
const clearAllScales = document.querySelector('.clear-all__scales')
const clearAllIntervals = document.querySelector('.clear-all__intervals')
const instructionsListen = document.querySelectorAll('.instructions-listen')
const instructionsSing = document.querySelectorAll('.instructions-sing')
const hamburgerLine1 = document.querySelector('.hamburger__line--1')
const hamburgerLine2 = document.querySelector('.hamburger__line--2')
const hamburgerLine3 = document.querySelector('.hamburger__line--3')
const hamburger = document.querySelector('.hamburger')
const menu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')



//APP DISPLAY**************************************************************

window.addEventListener('load', () => document.body.style.opacity = 1)
let sing = false
appChords.style.display = 'grid'
sing = false
playBtnsChords.style.display = 'flex'
singBtnsChords.style.display = 'none'
appIntervals.style.display = 'none'
appScales.style.display = 'none'
instructionsListen.forEach(ins => ins.style.display = 'block')
instructionsSing.forEach(ins => ins.style.display = 'none')


linkChordsListen.forEach(link => link.addEventListener('click', () => {
    sing = false
    appChords.style.display = 'grid'
    autoplayCheckChord.parentElement.style.display = 'flex'
    playBtnsChords.style.display = 'flex'
    singBtnsChords.style.display = 'none'
    appIntervals.style.display = 'none'
    appScales.style.display = 'none'
    instructionsListen.forEach(ins => ins.style.display = 'block')
    instructionsSing.forEach(ins => ins.style.display = 'none')
    singChord.style.display = 'none'
    singInterval.style.display = 'none'
    singScale.style.display = 'none'
    optionBtnsChord.forEach(option => option.classList.remove('option-checked'))
    guessBtnsChord.forEach(btn => btn.style.display = 'none')
    newChordBtn.disabled = true
    guessBtns.style.display = 'block'
    removeMobileMenu()
}))


linkIntervalsListen.forEach(link => link.addEventListener('click', () => {
    sing = false
    appIntervals.style.display = 'grid'
    autoplayCheckInterval.parentElement.style.display = 'flex'
    playBtnsIntervals.style.display = 'flex'
    singBtnsIntervals.style.display = 'none'
    appChords.style.display = 'none'
    appScales.style.display = 'none'
    instructionsListen.forEach(ins => ins.style.display = 'block')
    instructionsSing.forEach(ins => ins.style.display = 'none')
    singChord.style.display = 'none'
    singInterval.style.display = 'none'
    singScale.style.display = 'none'
    optionBtnsInt.forEach(option => option.classList.remove('option-checked'))
    guessBtnsInterval.forEach(btn => btn.style.display = 'none')
    newIntervalBtn.disabled = true
    removeMobileMenu()
}))

linkScalesListen.forEach(link => link.addEventListener('click', () => {
    sing = false
    appChords.style.display = 'none'
    autoplayCheckScale.parentElement.style.display = 'flex'
    playBtnsScales.style.display = 'flex'
    singBtnsScales.style.display = 'none'
    appIntervals.style.display = 'none'
    appScales.style.display = 'grid'
    instructionsListen.forEach(ins => ins.style.display = 'block')
    instructionsSing.forEach(ins => ins.style.display = 'none')
    singChord.style.display = 'none'
    singInterval.style.display = 'none'
    singScale.style.display = 'none'
    optionBtnsScale.forEach(option => option.classList.remove('option-checked'))
    guessBtnsScale.forEach(btn => btn.style.display = 'none')
    newScaleBtn.disabled = true
    removeMobileMenu()
}))

linkChordsSing.forEach(link => link.addEventListener('click', () => {
    sing = true
    appChords.style.display = 'grid'
    guessBtnsChord.forEach(btns => { btns.style.display = 'none'})
    optionBtnsChord.forEach(btn => {btn.classList.remove('option-checked')})
    playBtnsChords.style.display = 'none'
    singBtnsChords.style.display = 'flex'
    appIntervals.style.display = 'none'
    appScales.style.display = 'none'
    autoplayCheckChord.parentElement.style.display = 'none'
    instructionsListen.forEach(ins => ins.style.display = 'none')
    instructionsSing.forEach(ins => ins.style.display = 'block')
    singChord.style.display = 'block'
    singInterval.style.display = 'block'
    singScale.style.display = 'block'
    guessBtns.style.display = 'none'
    removeMobileMenu()
}))

linkIntervalsSing.forEach(link => link.addEventListener('click', () => {
    sing = true

    appChords.style.display = 'none'
    playBtnsIntervals.style.display = 'none'
    singBtnsIntervals.style.display = 'flex'
    appIntervals.style.display = 'grid'
    appScales.style.display = 'none'
    autoplayCheckInterval.parentElement.style.display = 'none'
    instructionsListen.forEach(ins => ins.style.display = 'none')
    instructionsSing.forEach(ins => ins.style.display = 'block')
    singChord.style.display = 'block'
    singInterval.style.display = 'block'
    singScale.style.display = 'block'
    guessBtnsInterval.forEach(btns => { btns.style.display = 'none'})
    optionBtnsInt.forEach(btn => {btn.classList.remove('option-checked')})
    guessBtns.style.display = 'none'
    removeMobileMenu()
}))

linkScalesSing.forEach(link => link.addEventListener('click', () => {
    sing = true

    appChords.style.display = 'none'
    guessBtnsScale.forEach(btns => btns.style.display = 'none')
    playBtnsScales.style.display = 'none'
    singBtnsScales.style.display = 'flex'
    appIntervals.style.display = 'none'
    appScales.style.display = 'grid'
    autoplayCheckScale.parentElement.style.display = 'none'
    instructionsListen.forEach(ins => ins.style.display = 'none')
    instructionsSing.forEach(ins => ins.style.display = 'block')
    singChord.style.display = 'block'
    singInterval.style.display = 'block'
    singScale.style.display = 'block'
    guessBtnsScale.forEach(btns => { btns.style.display = 'none'})
    optionBtnsScale.forEach(btn => {btn.classList.remove('option-checked')})
    guessBtns.style.display = 'none'
    removeMobileMenu()
}))

function removeMobileMenu(){
    hamburgerLine1.classList.remove('line-active1')
    hamburgerLine2.classList.remove('line-active2')
    hamburgerLine3.classList.remove('line-active3')
    hamburger.classList.remove('hamburger-active')
    mobileMenu.classList.remove('mobile-menu__active')
}


//APP - LISTENING*****************************************************
//CHORDS**************************************************************
let randomChord

newChordBtn.addEventListener('click', () => {
    playArpBtn.disabled = false
    playChordBtn.disabled = false
    guessBtnsChord.forEach(btn => {
        btn.classList.remove('right')
        btn.classList.remove('wrong')
    })
    randomChord = generateRandomChord(checkSelectedChords())
    playChord(randomChord)
})

playArpBtn.addEventListener('click', () => {
    playArpeggio(randomChord)
})

playChordBtn.addEventListener('click', () => {
    playChord(randomChord)
})

function selectChords() {
    optionBtnsChord.forEach(option => {
        option.addEventListener('click', (e) => {
            option.classList.toggle('option-checked')
            checkSelectedChords()
        })
    })
}
selectChords()

function checkSelectedChords() {
    guessBtnsChord.forEach(btn => {
        if (btn.classList.contains('wrong')) btn.classList.remove('wrong')
    })
    
    let selectedChords = []
    optionBtnsChord.forEach(option => {

        if (option.classList.contains('option-checked')) {
            selectedChords.push(option.value)
        }
    })
    if (selectedChords.length === 0) return
    return selectedChords
}

checkAllChords.addEventListener('click', () => {
    optionBtnsChord.forEach(option => option.classList.add('option-checked'))
    guessBtnsChord.forEach(btn => {
        if(sing === false) btn.style.display = 'flex'
    })
    checkSelectedChords()
    newChordBtn.disabled = false
    newChordSingBtn.disabled = false
})

clearAllChords.addEventListener('click', () => {
    function clearAllChords(){

        optionBtnsChord.forEach(option => option.classList.remove('option-checked'))
        guessBtnsChord.forEach(btn => btn.style.display = 'none')
        checkSelectedChords()
        newChordBtn.disabled = true
        playChordBtn.disabled = true
        playArpBtn.disabled = true
        newChordSingBtn.disabled = true
    }
    clearAllChords()
})


//SCALES**************************************************************

let randomScale

newScaleBtn.addEventListener('click', () => {
    newScaleBtn.disabled = false
    playScaleBtn.disabled = false
    guessBtnsScale.forEach(btn => {
        btn.classList.remove('right')
        btn.classList.remove('wrong')
    })
    randomScale = generateRandomScale(checkSelectedScales())
    playScale(randomScale)
})

playScaleBtn.addEventListener('click', () => {
    playScale(randomScale)
})

function selectScales() {
    optionBtnsScale.forEach(option => {
        option.addEventListener('click', (e) => {
            option.classList.toggle('option-checked')
            checkSelectedScales()
        })
    })
}
selectScales()

function checkSelectedScales() {
    guessBtnsScale.forEach(btn => {
        if (btn.classList.contains('wrong')) btn.classList.remove('wrong')
    })

    let selectedScales = []
    optionBtnsScale.forEach(option => {
        if (option.classList.contains('option-checked')) {
            selectedScales.push(option.value)
        }
    })
    if (selectedScales.length === 0) return
    return selectedScales
}

checkAllScales.addEventListener('click', () => {
    optionBtnsScale.forEach(option => option.classList.add('option-checked'))
    guessBtnsScale.forEach(btn => {
        if(sing === false) btn.style.display = 'flex'
    })
    checkSelectedScales()
    newScaleBtn.disabled = false
    newScaleSingBtn.disabled = false
})

clearAllScales.addEventListener('click', () => {
    optionBtnsScale.forEach(option => option.classList.remove('option-checked'))
    guessBtnsScale.forEach(btn => btn.style.display = 'none')
    checkSelectedScales()
    newScaleBtn.disabled = true
    playScaleBtn.disabled = true
    newScaleSingBtn.disabled = true
})


//INTERVALS**************************************************************

let randomInterval

newIntervalBtn.addEventListener('click', () => {
    playArpIntBtn.disabled = false
    playIntervalBtn.disabled = false
    guessBtnsInterval.forEach(btn => {
        btn.classList.remove('right')
        btn.classList.remove('wrong')
    })
    randomInterval = generateRandomInterval(checkSelectedIntervals())
    playInterval(randomInterval)
})

playArpIntBtn.addEventListener('click', () => {
    playArpeggioInterval(randomInterval)
})

playIntervalBtn.addEventListener('click', () => {
    playInterval(randomInterval)
})

function selectIntervals() {
    optionBtnsInt.forEach(option => {
        option.addEventListener('click', (e) => {
            option.classList.toggle('option-checked')
            checkSelectedIntervals()
        })
    })
}
selectIntervals()

function checkSelectedIntervals() {
    guessBtnsInterval.forEach(btn => {
        if (btn.classList.contains('wrong')) btn.classList.remove('wrong')
    })

    let selectedIntervals = []
    optionBtnsInt.forEach(option => {
        if (option.classList.contains('option-checked')) {
            selectedIntervals.push(option.value)
        }
    })

    if (selectedIntervals.length === 0) return
    return selectedIntervals
}

checkAllIntervals.addEventListener('click', () => {
    optionBtnsInt.forEach(option => option.classList.add('option-checked'))
    guessBtnsInterval.forEach(btn => {
        if(sing === false) btn.style.display = 'flex'
    })
    checkSelectedIntervals()
    newIntervalBtn.disabled = false
    newIntervalSingBtn.disabled = false
})

clearAllIntervals.addEventListener('click', () => {
    optionBtnsInt.forEach(option => option.classList.remove('option-checked'))
    guessBtnsInterval.forEach(btn => btn.style.display = 'none')
    checkSelectedIntervals()
    newIntervalBtn.disabled = true
    playIntervalBtn.disabled = true
    playArpIntBtn.disabled = true
    newIntervalSingBtn.disabled = true
})

//GUESS/OPTION BUTTONS***********************************************************

guessBtnsChord.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.value === randomChord.at(-1)) {
            randomChord = generateRandomChord(checkSelectedChords())
            e.target.classList.add('right')
            if (autoplayCheckChord.checked) {
                setTimeout(() => {
                    playChord(randomChord)
                    e.target.classList.remove('wrong')
                    e.target.classList.remove('right')
                }, 1000);
            }
        } else {
            e.target.classList.add('wrong')
        }
    })
})

optionBtnsChord.forEach(btn => btn.addEventListener('click', (e) => {
    newChordBtn.disabled = false
    guessBtnsChord.forEach(guess => {
        if (guess.value === e.target.value && sing === false) {
            if (e.target.classList.contains('option-checked')) {
                guess.style.display = 'flex'
            } else {
                guess.style.display = 'none'
            }
        }
        if(Array.from(optionBtnsChord).some(btn => btn.classList.contains('option-checked'))){
            newChordBtn.disabled = false 
            newChordSingBtn.disabled = false
        } else{
            newChordBtn.disabled = true
            playChordBtn.disabled = true
            playArpBtn.disabled = true
            newChordSingBtn.disabled = true
            firstChordSingBtn.disabled = true
            checkChordSingBtn.disabled = true
        }
    })
}))


guessBtnsScale.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.value === randomScale.at(-1)) {
            randomScale = generateRandomScale(checkSelectedScales())
            e.target.classList.add('right')
            if (autoplayCheckScale.checked) {
                setTimeout(() => {
                    playScale(randomScale)
                    e.target.classList.remove('wrong')
                    e.target.classList.remove('right')
                }, 1000);
            }
        } else {
            e.target.classList.add('wrong')
        }
    })
})


optionBtnsScale.forEach(btn => btn.addEventListener('click', (e) => {
    newScaleBtn.disabled = false
    guessBtnsScale.forEach(guess => {
        if (guess.value === e.target.value && sing === false) {
            if (e.target.classList.contains('option-checked')) {
                guess.style.display = 'flex'
            } else {
                guess.style.display = 'none'
            }
        }
        if(Array.from(optionBtnsScale).some(btn => btn.classList.contains('option-checked'))){
            newScaleBtn.disabled = false 
            newScaleSingBtn.disabled = false 
        } else{
            newScaleBtn.disabled = true
            playScaleBtn.disabled = true
            newScaleSingBtn.disabled = true
            firstScaleSingBtn.disabled = true
            checkScaleSingBtn.disabled = true
        }
    })
}))


guessBtnsInterval.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.value === randomInterval.at(-1)) {
            randomInterval = generateRandomInterval(checkSelectedIntervals())
            e.target.classList.add('right')
            if (autoplayCheckInterval.checked) {
                setTimeout(() => {
                    playInterval(randomInterval)
                    e.target.classList.remove('wrong')
                    e.target.classList.remove('right')
                }, 1000);
            }
        } else {
            e.target.classList.add('wrong')
        }
    })
})


optionBtnsInt.forEach(btn => btn.addEventListener('click', (e) => {
    newIntervalBtn.disabled = false
    guessBtnsInterval.forEach(guess => {
        if (guess.value === e.target.value && sing === false) {
            if (e.target.classList.contains('option-checked')) {
                guess.style.display = 'flex'
            } else {
                guess.style.display = 'none'
            }
        }
        if(Array.from(optionBtnsInt).some(btn => btn.classList.contains('option-checked'))){
            newIntervalBtn.disabled = false 
            newIntervalSingBtn.disabled = false
    
        } else{
            newIntervalBtn.disabled = true
            playIntervalBtn.disabled = true
            playArpIntBtn.disabled = true
            newIntervalSingBtn.disabled = true
            firstIntervalSingBtn.disabled = true
            checkIntervalSingBtn.disabled = true
        }
    })
}))


//APP - SINGING*******************************************************
//CHORDS**************************************************************
function playFirstNote(notes) {
    Tone.loaded().then(() => {
        sampler.triggerAttackRelease(notes[0], 4);
    })
}

newChordSingBtn.addEventListener('click', (e) => {
    firstChordSingBtn.disabled = false
    checkChordSingBtn.disabled = false
    randomChord = generateRandomChord(checkSelectedChords())
    let reversedChord
    if (descendingCheckChord.checked) {
        reversedChord = randomChord.slice(0, -1).reverse()
        playFirstNote(reversedChord)
    } else {
        playFirstNote(randomChord)
    }
    for (const name in chordNames) {
        if (name === randomChord.at(-1)) {
            singChord.textContent = `Sing: ${chordNames[name]}`
        }
    }
})

firstChordSingBtn.addEventListener('click', (e) => {
    let reversedChord
    if (descendingCheckChord.checked) {
        reversedChord = randomChord.slice(0, -1).reverse()
        playFirstNote(reversedChord)
    } else {
        playFirstNote(randomChord)
    }
})

checkChordSingBtn.addEventListener('click', (e) => {
    playArpeggio(randomChord)
})



//INTERVALS**************************************************************
newIntervalSingBtn.addEventListener('click', (e) => {
    firstIntervalSingBtn.disabled = false
    checkIntervalSingBtn.disabled = false
    randomInterval = generateRandomInterval(checkSelectedIntervals())
    let reversedInterval
    if (descendingCheckInterval.checked) {
        reversedInterval = randomInterval.slice(0, -1).reverse()
        playFirstNote(reversedInterval)
    } else {
        playFirstNote(randomInterval)
    }
    for (const name in intervalNames) {
        if (name === randomInterval.at(-1)) {
            singInterval.textContent = `Sing: ${intervalNames[name]}`
        }
    }
})


firstIntervalSingBtn.addEventListener('click', (e) => {
    let reversedInterval
    if (descendingCheckInterval.checked) {
        reversedInterval = randomInterval.slice(0, -1).reverse()
        playFirstNote(reversedInterval)
    } else {
        playFirstNote(randomInterval)
    }
})

checkIntervalSingBtn.addEventListener('click', (e) => {
    playArpeggioInterval(randomInterval)
})


//SCALES**************************************************************
newScaleSingBtn.addEventListener('click', (e) => {
    firstScaleSingBtn.disabled = false
    checkScaleSingBtn.disabled = false
    randomScale = generateRandomScale(checkSelectedScales())
    let reversedScale
    if (descendingCheckScale.checked) {
        reversedScale = randomScale.slice(0, -1).reverse()
        playFirstNote(reversedScale)
    } else {
        playFirstNote(randomScale)
    }
    for (const name in scaleNames) {
        if (name === randomScale.at(-1)) {
            singScale.textContent = `Sing: ${scaleNames[name]}`
        }
    }

})

firstScaleSingBtn.addEventListener('click', (e) => {
    let reversedScale
    if (descendingCheckScale.checked) {
        reversedScale = randomScale.slice(0, -1).reverse()
        playFirstNote(reversedScale)
    } else {
        playFirstNote(randomScale)
    }
})

checkScaleSingBtn.addEventListener('click', (e) => {
    playScale(randomScale)
})


//MOBILE MENU**************************************************************
hamburger.addEventListener('click', () => {
    hamburgerLine1.classList.toggle('line-active1')
    hamburgerLine2.classList.toggle('line-active2')
    hamburgerLine3.classList.toggle('line-active3')
    hamburger.classList.toggle('hamburger-active')
    mobileMenu.classList.toggle('mobile-menu__active')
})


