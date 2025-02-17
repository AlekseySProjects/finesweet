import Swiper from 'swiper';
// import { Autoplay } from 'swiper/modules'
import 'swiper/css';

const controls = document.querySelector('.slider-controls');
const prevBtn = controls.querySelector('.prev');
const nextBtn = controls.querySelector('.next');
const classNameIfLastSLide = 'last-slide';
const classNameIfFirstSLide = 'first-slide';

const swiper = new Swiper('.swiper', {
    // modules: [Autoplay],
    speed: 500,
    on: {
        afterInit: (swiper) => { handleSlidePosition(swiper) },
    }
    // autoplay: {
    //     delay: 5000,
    //   },
});

prevBtn.addEventListener('click', () => {
    swiper.slidePrev();
});
nextBtn.addEventListener('click', () => {
    swiper.slideNext();
});

swiper.on('slideChange', handleSlidePosition);

function handleSlidePosition(swiper) {

    if (swiper.isEnd) {
        handleLastSlide();
    } else if (controls.classList.contains(classNameIfLastSLide)) {
        controls.classList.remove(classNameIfLastSLide);
        nextBtn.inert = false;
    }

    if (swiper.isBeginning) {
        handleFirstSlide();
    } else if (controls.classList.contains(classNameIfFirstSLide)) {
        controls.classList.remove(classNameIfFirstSLide);
        prevBtn.inert = false;
    }
}

function handleFirstSlide() {
    controls.classList.add(classNameIfFirstSLide);
    prevBtn.inert = true;
}

function handleLastSlide() {
    controls.classList.add(classNameIfLastSLide);
    nextBtn.inert = true;
}
