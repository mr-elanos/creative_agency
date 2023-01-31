/*carousel*/
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

/*burger menu*/
$(function(){
    $('.header__burger-btn').click(function(e){
        $('.header__burger-btn').toggleClass('header__burger-btn-active');
        $('.header__burger-menu').toggleClass('header__burger-menu-active');
        $('body').toggleClass('scroll__hidden');
    });
    $('.burger__btn').each(function(){
        $(this).click(function(){
            $('.header__burger-btn').removeClass('header__burger-btn-active');
            $('.header__burger-menu').removeClass('header__burger-menu-active');
            $('body').removeClass('scroll__hidden');
        });
    });
});
