let cancelId
let startTime
let savedTime = 0
const countdown = 25 * 60 * 1000

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
  secondsTimer.innerHTML = "00"
  minutesTimer.innerHTML = "25"
}

function updateTimer() {
  let millisElapsed = savedTime + (Date.now() - startTime)
  let millisLeft = countdown - millisElapsed
  if (millisLeft < 0) {
    millisLeft = 0
    cancelId = null
  }
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

  if (cancelId) {
    cancelId = requestAnimationFrame(updateTimer)
  }
}