const searchBoxBtn = document.querySelector('.search-box-btn');

searchBoxBtn.addEventListener('click', function() {
    this.parentElement.classList.toggle('open');
    this.previousElementSibling.focus();
})