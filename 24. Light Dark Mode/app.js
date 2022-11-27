const toggleSwitch = document.querySelector('.toggle-switch')
const body = document.querySelector('body')
const modeText = document.querySelector('.mode .text')
toggleSwitch.addEventListener('click', (e) => {
    body.classList.toggle('dark')
    toggleSwitch.querySelector('.switch').style.transition = `all 0.3s`
    if(body.classList.contains('dark')) {
        modeText.innerText = 'Dark mode'
    } else {
        modeText.innerText = 'Light mode'
    }
})