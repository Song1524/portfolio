// 스크롤바 게이지
const gauge = document.querySelector('#bar');

window.addEventListener('scroll', function () {
    const html = document.documentElement;
    const total = html.scrollHeight - html.clientHeight;
    const gaugeRatio = (html.scrollTop / total) * 100;
    gauge.style.width = gaugeRatio + '%';
})