document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');

    carousel.scrollTo({
        left: 0,
        behavior: 'smooth'
    });
});
