const body = document.querySelector('body')
const range = document.querySelector('.range')
const process = document.querySelector('.process')
const value = document.querySelector('.value')

function updateProcess(percent) {
    process.style.width = `${percent}%`
    value.innerHTML = `${percent}%`
    body.style.backgroundColor = `rgba(0, 0, 0, ${percent / 100})`
}
updateProcess(20)
range.addEventListener('mousedown', function(e) {
    var processWidth = e.pageX - this.offsetLeft
    var percent = Math.ceil(processWidth * 100 / this.offsetWidth)
    updateProcess(percent)
})