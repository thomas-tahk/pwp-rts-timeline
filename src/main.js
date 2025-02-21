import './index.css'
import 'flowbite'

let testButtonTimeline = document.getElementById('testHiddenToggle')
let testShowcase = document.getElementById('testToggle')

function toggleDisplay() {
    let timeline = document.getElementById('timeline')
    let showcase = document.getElementById('showcase')
    timeline.classList.toggle('hidden')
    showcase.classList.toggle('hidden')
}

testButtonTimeline.addEventListener('click', toggleDisplay)
testShowcase.addEventListener('click', toggleDisplay)

