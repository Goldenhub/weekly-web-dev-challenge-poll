import { renderSubmissions, getSubmissions } from "./submissions.js"
import { displaySubmissionCount } from "/displaySubmissionCount.js"
import {renderPreviousChallenges} from './prevChallengesList.js'
import { countdown } from "./challengeCountdown.js";
// because top level await (https://v8.dev/features/top-level-await)
// isn't supported in safari:
// https://caniuse.com/?search=top%20level%20await

(async () => {
    const submissionsJson = "./submissions.json"
    const images = '/imgs/entries/'
    const challengeName = "latest_challenge"
    const submissionText = "Submissions so far: "
   
    const subs = (await getSubmissions(submissionsJson)).latest_challenge
    // const subs = (await getSubmissions(submissionsJson))[challengeName]
    
    // let submissionCountDisplay = document.getElementById("submission-count-display")
    // let submissionCount = Object.keys(subs).length
    // submissionCountDisplay.textContent = "Submissions so far: " + submissionCount
    // displaySubmissionCount()
    displaySubmissionCount(challengeName, submissionText)
  
    renderSubmissions(subs, images)
  
    renderPreviousChallenges()
})()


//Challenge Countdown
//Date Format -> Month day, year time/hour Timezone
countdown(new Date("October 25, 2021 13:00:00 GMT+01:00"));

// Mobile Nav Opener
const navOpener = document.querySelector('.nav-opener')
const nav = document.querySelector('nav')

navOpener.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
    navOpener.classList.toggle('exit')
})



/* easter egg */

var modal = document.getElementById("pumpkinModal");

// When the user clicks on the button, open the modal after 900ms
document.getElementById("pumpkin").onclick = function() {
    setTimeout(() => modal.style.display = "block", 900)
}

// When the user clicks the title, the image closes
document.getElementById("pumpkinModalClose").onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// add confetti animation to class
document.querySelector(".confettiClicks").addEventListener("click", function (e) {
    party.confetti(this);
});

/* easter egg end */

/* Random background color on page load */
let colorOptions = [
  "#AAD1B6", // Green
  "#B5CAF9", // Blue
  "#C7B9FF", // Purple
  "#F0B9DD", // Pink
  "#F3BF99", // Orange
  "#FBF3AB", // Yellow
  "linear-gradient(to right, #c7b9ff, 50%, #f3bf99)", // Purple --> Orange gradient
];
let selectedColor = colorOptions[Math.floor(Math.random() * colorOptions.length)];
document.body.style.background = selectedColor;
