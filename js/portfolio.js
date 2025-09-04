// 스크롤바 게이지
const gauge = document.querySelector('#bar');

window.addEventListener('scroll', function () {
    const html = document.documentElement;
    const total = html.scrollHeight - html.clientHeight;
    const gaugeRatio = (html.scrollTop / total) * 100;
    gauge.style.width = gaugeRatio + '%';
})

const swiper = new Swiper('.projects-swiper', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 18,
    speed: 800,
    centeredSlides: true,
    watchSlidesProgress: true,

    effect: 'creative',
    creativeEffect: {
    limitProgress: 2,
    perspective: false,
    prev: { translate: ['-105%', 0, 0], opacity: 0.5, scale: 0.9 },
    next: { translate: ['105%', 0, 0],  opacity: 0.5, scale: 0.9 },
    },

    navigation: {
        nextEl: '.projects-swiper .swiper-button-next',
        prevEl: '.projects-swiper .swiper-button-prev',
    },

    pagination: {
        el: '.projects-swiper .swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            centeredSlides: true,
            spaceBetween: 14
        },
        768: {
            slidesPerView: 2,
            slidesPerGroup: 1
        },
        1024: {
            slidesPerView: 3,
            slidesPerGroup: 1
        }
    }
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();

// 페이지 최상단으로 이동
const toTopEl = document.querySelector('.to-top');

window.addEventListener('scroll', function () {
    const goTop = document.querySelector('.to-top');

    if (window.scrollY > 400) {
    goTop.style.opacity = 1;
    goTop.style.transform = 'translateX(0)';
    } else {
    goTop.style.opacity = 0;
    goTop.style.transform = 'translateX(100px)';
    }
});
