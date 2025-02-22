import './index.css'
import 'flowbite'

let testButtonTimeline = document.getElementById('testHiddenToggle')
let testShowcase = document.getElementById('testToggle')

function toggleDisplay() {
    let timeline = document.getElementById('timeline')
    let showcase = document.getElementById('showcase')
    if (timeline.classList.contains('hidden')) {
        timeline.classList.remove('hidden')
        console.log('timeline was hidden')
    } else {
        timeline.classList.add('hidden')
        console.log('timeline was not hidden')
    }
    if (showcase.classList.contains('hidden')) {
        showcase.classList.remove('hidden')
        console.log('showcase was hidden')
    } else {
        showcase.classList.add('hidden')
        console.log('showcase was not hidden')
    }
    console.log("if I don't see anything before me, something wrong happened")

}

testButtonTimeline.addEventListener('click', toggleDisplay)
testShowcase.addEventListener('click', toggleDisplay)

