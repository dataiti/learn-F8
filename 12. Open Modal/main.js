const openModal = document.querySelector('.modal-open-btn');
const modal = document.querySelector('.modal');
const iconBtn = document.querySelector('.modal__inner-header-icon');
const closeBtn = document.querySelector('.modal__inner-footer-btn');
function toggleModal() {
    modal.classList.toggle('hide');
}

iconBtn.addEventListener('click', toggleModal);
closeBtn.addEventListener('click', toggleModal);
openModal.addEventListener('click', toggleModal);
modal.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
        toggleModal();
    }
});