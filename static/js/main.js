new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 5000,
    },
    breakpoints: {
        320:{
            slidesPerView: 1,
        },
        767:{
            slidesPerView: 2,
        },
        1023:{
            slidesPerView: 3,
        },
    },
    loop: true,
    speed: 500,
    slidesPerView: 3,
    spaceBetween: 25,
    centeredSlides: true,
    grabCursor: true,
});

