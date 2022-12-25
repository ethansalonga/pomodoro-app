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
  let secondsLeft = millisLeft / 1000
  let minutesLeft = secondsLeft / 60

  let millisText = millisLeft % 1000
  let secondsText = Math.round(secondsLeft) % 60
  let minutesText = Math.round(minutesLeft)

  millisTimer.innerHTML = millisText
  secondsTimer.innerHTML = secondsText
  minutesTimer.innerHTML = minutesText

  cancelId = requestAnimationFrame(updateTimer)
}