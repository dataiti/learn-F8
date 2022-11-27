function Validator(options) {
    function validate(inputElement, errorElement, errorMessage) {
        if(errorMessage) {
            errorElement.innerText = errorMessage
            inputElement.parentElement.classList.add('invalid')
        } else {
            errorElement.innerText = ''
            inputElement.parentElement.classList.remove('invalid')
        }
    }

    var formElement = document.querySelector(options.form)
    if(formElement) {
        options.rules.forEach(function(rule) {        
            var inputElement = document.querySelector(rule.selector)
            var errorElement = inputElement.parentElement.querySelector('.form-message')
            if(inputElement) {
                inputElement.onblur = function() {
                    var errorMessage = rule.test(inputElement.value)
                    validate(inputElement, errorElement, errorMessage,)
                }

                inputElement.oninput = function() {
                    errorElement.innerText = ''
                    inputElement.parentElement.classList.remove('invalid')
                }
            }
        })
    }
}

Validator.isRequired = function(selector, message) {
    return {
        selector: selector,
        test: function(value) {
            return value.trim() ? undefined : message || 'Vui lòng nhập trường này'
        }
    }
}

Validator.isEmail = function(selector) {
    return {
        selector: selector,
        test: function(value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Trường này phải là email';
        }
    }
}

Validator.isMinLength =  function(selector, min) {
    return {
        selector: selector,
        test: function(value) {
            return value.trim().length >= min ? undefined : `Vui lòng nhập tối thiểu ${min} kí tự`;
        }
    }
}   

Validator.isConfirmed = function(selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function(value) {
            return value.trim() === getConfirmValue ? undefined : message || 'Giá trị nhập vào không chính xác';
        }
    }
}

Validator({
    form: '#form-1',
    rules: [
        Validator.isRequired('#fullname', 'Vui lòng nhập tên đầy đủ của bạn'),
        Validator.isEmail('#email'),
        Validator.isMinLength('#password', 6),
        Validator.isConfirmed('#password_confirmation', function() {
            return document.querySelector('#password').value
        }, 'Mật khẩu nhập lại không chính xác')
    ]
})