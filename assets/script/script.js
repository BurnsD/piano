const WHITE_KEYS = ["z", 'x', 'c', 'v', 'b', 'n', 'm']
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j']

const keys = document.querySelectorAll('.key')


// Loop running function when key is clicked to playnote
keys.forEach(key => {
    key.addEventListener("click", () => playNote(key))
})
// function for playing the note on the piano
function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.play()
}
