const display = document.querySelector('#display')
const deleteAll = document.querySelector('#deleteAll')

function getValue(result) {
    display.value = display.value + result
}

function calculate() {
    display.value === '' ? display.value = 'Please enter a number' : display.value = eval(display.value)
}

deleteAll.addEventListener('click', () => {
    display.value = ''
})