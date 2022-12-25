let cancelId
let startTime
const countdown = 25 * 60 * 1000

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

  cancelId = requestAnimationFrame(updateTimer)
}