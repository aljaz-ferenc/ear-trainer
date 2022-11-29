# Ear Trainer

Ear Trainer is an app designed for my fellow musicians, helping them to practice the most common type of ear training exercises used in formal music education.

The app has two types of exercises: listening and singing. The user can choose chords, intervals or scales they want to practice. In the listening section the app will play a chord/interval/scale and the users job is to recognize what is being played. In the singing section the user gets a starting note and has to correctly sing the requested chord, interval, or scale.
The program is given an array of notes. Classes are used to define distances between notes of every chord, interval and scale so the program can build any of them from any note. The app chooses a random chord, interval or scale and builds it on a randomly selected note. I used the Tone.js library to play the notes either all together or one by one. The app is built as a single page application by dispalying only the neccessary parts and hiding the rest. I also used JavaScript modules to make code more organized and reusable.

Try it live: https://ear-trainer-af.netlify.app
