let cancelId
let startTime
let savedTime = 0
const countdown = 65 * 1000

const millisTimer = document.querySelector(".timer__milliseconds")
const secondsTimer = document.querySelector(".timer__seconds")
const minutesTimer = document.querySelector(".timer__minutes")

function startTimer() {
  startTime = Date.now()
  cancelId = requestAnimationFrame(updateTimer)
}

function stopTimer() {
  savedTime += (Date.now() - startTime)
  cancelAnimationFrame(cancelId)
}

function resetTimer() {
  startTime = Date.now()
  savedTime = 0

  millisTimer.innerHTML = "000"
  secondsTimer.innerHTML = "05"
  minutesTimer.innerHTML = "01"
}

function updateTimer() {
  let millisElapsed = savedTime + (Date.now() - startTime)
  let millisLeft = countdown - millisElapsed
  let secondsLeft = millisLeft / 1000
  let minutesLeft = secondsLeft / 60

  let millisText = millisLeft % 1000
  let secondsText = Math.floor(secondsLeft) % 60
  let minutesText = Math.floor(minutesLeft)

  if (millisText.toString().length < 3) {
    millisText = millisText.toString().padStart(3, "0")
  }
  if (secondsText.toString().length < 2) {
    secondsText = secondsText.toString().padStart(2, "0")
  }
  if (minutesText.toString().length < 2) {
    minutesText = minutesText.toString().padStart(2, "0")
  }

  millisTimer.innerHTML = millisText
  secondsTimer.innerHTML = secondsText
  minutesTimer.innerHTML = minutesText

  cancelId = requestAnimationFrame(updateTimer)
}