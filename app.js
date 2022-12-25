let cancelId
let startTime
const countdown = 25 * 60 * 1000

const millisTimer = document.querySelector(".timer__milliseconds")
const secondsTimer = document.querySelector(".timer__seconds")
const minutesTimer = document.querySelector(".timer__minutes")

function startTimer() {
  startTime = Date.now()
  cancelId = requestAnimationFrame(updateTimer)
}

function stopTimer() {
  cancelAnimationFrame(cancelId)
}

function resetTimer() {

}

function updateTimer() {
  let millisElapsed = Date.now() - startTime
  let millisLeft = countdown - millisElapsed

  let millisText = millisLeft % 1000

  millisTimer.innerHTML = millisText

  cancelId = requestAnimationFrame(updateTimer)
}