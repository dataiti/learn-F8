const form = document.querySelector('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

function showError(selector, message) {
    selector.parentElement.className = 'form-control error'
    selector.parentElement.querySelector('small').innerText = `${getFieldeName(selector)} ${message}`
}

function showSuccess(selector) {
    selector.parentElement.className = 'form-control scuccess'
    selector.parentElement.querySelector('small').innerText = ''
} 

function isRequired(listInput) {
    listInput.forEach(function(input) {
        if(input.value.trim() == '') {
            showError(input, 'is required')
        } else {
            showSuccess(input)
        }
    })
}

function isEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (re.test(input.value.trim())) {
        showSuccess(input)
    } else {
        showError(input, 'is not valid')
    }
}

function istyping(listInput) {
    listInput.forEach(function(input) {
        input.addEventListener('input', function() {
            showSuccess(input)
        })
    })
}

function isCheckLength(input, min, max) {
    if(input.value.trim().length > max) {
        showError(input, `must be less than ${max} characters`)
    } else if(input.value.trim().length < min) {
        showError(input, `must be at least ${min} characters`)
    } else showSuccess(input)
}

function isConfirmPassword(inputPassword, inputConfirmPassword) {
    if(inputPassword.value.trim() !== inputConfirmPassword.value.trim()) {
        showError(inputConfirmPassword, 'Passwords do not match')
    }
}
 
istyping([username, email, password, password2])

function getFieldeName(selector) {
    return selector.id.charAt(0).toUpperCase() + selector.id.slice(1, selector.id.length)
}

form.addEventListener('submit', function(e) {
    e.preventDefault()
    isRequired([username, email, password, password2])
    isEmail(email)
    isCheckLength(password, 6, 10)
    isConfirmPassword(password, password2)
})