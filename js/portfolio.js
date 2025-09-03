// 스크롤바 게이지
const gauge = document.querySelector('#bar');

window.addEventListener('scroll', function () {
    const html = document.documentElement;
    const total = html.scrollHeight - html.clientHeight;
    const gaugeRatio = (html.scrollTop / total) * 100;
    gauge.style.width = gaugeRatio + '%';
})

new Swiper('.projects-swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 18,
    navigation: {
    nextEl: '.projects-swiper .swiper-button-next',
    prevEl: '.projects-swiper .swiper-button-prev',
    },
    speed: 800,
    pagination: {
        el: '.projects-swiper .swiper-pagination',
        clickable: true
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
