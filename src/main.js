import './index.css'
import 'flowbite'

let tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let rtsOriginsVideo;
function onYouTubeIframeAPIReady() {
    rtsOriginsVideo = new YT.Player('rts-origins-video', {
        height: '390',
        width: '640',
        videoId: 'IEXKZ-dzZJI',
        playerVars: {
            'playsinline': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}

let done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
    }
}
function stopVideo() {
    player.stopVideo();
}

// let testButtonTimeline = document.getElementById('testHiddenToggle')
// let testShowcase = document.getElementById('testToggle')
//
// function toggleDisplay() {
//     let timeline = document.getElementById('timeline')
//     let showcase = document.getElementById('showcase')
//     if (timeline.classList.contains('hidden')) {
//         timeline.classList.remove('hidden')
//         console.log('timeline was hidden')
//     } else {
//         timeline.classList.add('hidden')
//         console.log('timeline was not hidden')
//     }
//     if (showcase.classList.contains('hidden')) {
//         showcase.classList.remove('hidden')
//         console.log('showcase was hidden')
//     } else {
//         showcase.classList.add('hidden')
//         console.log('showcase was not hidden')
//     }
//     console.log("if I don't see anything before me, something wrong happened")
//
// }
//
// testButtonTimeline.addEventListener('click', toggleDisplay)
// testShowcase.addEventListener('click', toggleDisplay)

