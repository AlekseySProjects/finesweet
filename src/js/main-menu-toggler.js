const menuBtn = document.querySelector('.mobile-menu-toggler');
const adaptiveMenuWrapper = document.querySelector('.adaptive-menu-wrapper');

menuBtn.addEventListener('click', () => {
    adaptiveMenuWrapper.classList.toggle('active');
});
