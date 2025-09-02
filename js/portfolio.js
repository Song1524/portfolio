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
