const images = document.querySelectorAll('.wrapper__image img');
const gallery = document.querySelector('.gallery');
const galleryInnerImg = document.querySelector('.gallery-inner img');
const closeButton = document.querySelector('.gallery-times.close');
const prevButton = document.querySelector('.gallery-control.prev');
const nextButton = document.querySelector('.gallery-control.next');
let currentIndex = 0;

function removeGallery() {
    gallery.classList.remove('show');
}

function showGallery() {
    currentIndex === 0 ? prevButton.classList.add('hide') : prevButton.classList.remove('hide');
    currentIndex ===  images.length-1? nextButton.classList.add('hide') : nextButton.classList.remove('hide');
    gallery.classList.add('show');
    galleryInnerImg.src = images[currentIndex].src;
}

images.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index;
        showGallery();
    })
});

closeButton.addEventListener('click', () => {
    removeGallery();
});

document.addEventListener('keyup', (e) => {
    e.keyCode === 27 ? removeGallery() : undefined;
});

prevButton.addEventListener('click', () => {
    currentIndex != 0 ? currentIndex-- : undefined;
    showGallery();
});

nextButton.addEventListener('click', () => {
    currentIndex != images.length-1 ? currentIndex++ : undefined;
    showGallery();
});

gallery.addEventListener('click', (e) => {
    e.target === e.currentTarget ? removeGallery() : undefined;
});