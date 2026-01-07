const track = document.querySelector('.carousel-track');

let isDragging = false;
let startX = 0;
let currentTranslate = 0;
let previousTranslate = 0;

track.addEventListener('mousedown', startDrag);
track.addEventListener('mousemove', drag);
track.addEventListener('mouseup', endDrag);
track.addEventListener('mouseleave', endDrag);

track.addEventListener('touchstart', startDrag);
track.addEventListener('touchmove', drag);
track.addEventListener('touchend', endDrag);

function startDrag(e) {
    isDragging = true;
    startX = getX(e);
}

function drag(e) {
    if (!isDragging) return;
    const x = getX(e);
    const delta = x - startX;
    currentTranslate = previousTranslate + delta;
    track.style.transform = `translateX(${currentTranslate}px)`;
}

function endDrag() {
    isDragging = false;
    previousTranslate = currentTranslate;
}

function getX(e) {
    return e.type.includes("mouse") ? e.pageX : e.touches[0].clientX;
}
