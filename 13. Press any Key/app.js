const alertBox = document.querySelector('.alert');
const box = document.querySelector('.box');
const boxResult = document.querySelector('.box-result');
const boxDetail = document.querySelector('.box-detail');
const eKey = document.querySelector('.card.key p:last-child');
const eLocation = document.querySelector('.card.location p:last-child');
const eWhich = document.querySelector('.card.which p:last-child');
const eCode = document.querySelector('.card.code p:last-child');

document.addEventListener('keydown', (event) => {
    alertBox.classList.add('hide');
    box.classList.remove('hide');
    let keyName = event.keyCode === 32 ? 'Space' : event.key;
    boxResult.innerText = event.which;
    eKey.innerText = keyName;
    eLocation.innerText = event.location;
    eWhich.innerText = event.which;
    eCode.innerText = event.code;
});