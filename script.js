const prevBtn = document.querySelector('.next-btn');
const sliderImages = document.querySelectorAll('.hero-slider img');

let activeIndex = 0;

function showImage(index) {
    sliderImages.forEach((image) => {
        image.classList.remove('active');
    });
    sliderImages[index].classList.add('active');
}

showImage(activeIndex);

prevBtn.addEventListener('click', () => {
    activeIndex = (activeIndex - 1 + sliderImages.length) % sliderImages.length;
    showImage(activeIndex);
});

nextBtn.addEventListener('click', () => {
    activeIndex = (activeIndex + 1) % sliderImages.length;
    showImage(activeIndex);
});
