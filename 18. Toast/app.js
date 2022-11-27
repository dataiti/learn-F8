const main = document.querySelector('#toast')
const successBtn = document.querySelector('.control.control--success')
const errorBtn = document.querySelector('.control.control--error')
function toast({title, message, type, duration}) {
    if(main) {
        const toast = document.createElement('div') 
        const autoRemoveToast = setTimeout(function() {
            main.removeChild(toast)
        }, duration + 1000)
        
        toast.onclick = function(e) {
            if(e.target.closets('.toast__close')) {
                main.removeChild(toast)
                clearTimeout(autoRemoveToast)
            }
        }
        const icons = {
            'toast--success': 'checkmark-circle',
            'toast--error': 'alert-circle',
        }
        toast.classList.add('toast', `${type}`)
        toast.style.animation = `SlideInLeft ease 1s, fadeOut linear 1s ${duration/1000}s forwards`
        const html = `
            <ion-icon class="toast__icon ${type}-icon" name="${icons[type]}"></ion-icon>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__message">${message}</p>
            </div>
            <div class="close">
            <ion-icon class="toast__close" name="close"></ion-icon>
        `
        toast.innerHTML = html
        main.appendChild(toast)
    }
}

successBtn.addEventListener('click', function() {
    toast({
        title: 'Thành công!',
        message: 'Bạn đã đăng ký thành công tài khoản tại F9.',
        type: 'toast--success',
        duration: 3000
    })
})
errorBtn.addEventListener('click', function() {
    toast({
        title: 'Thất bại!',
        message: 'Có lỗi xảy ra, vui lòng liên hệ quản trị viên.',
        type: 'toast--error',
        duration: 3000
    })
})
