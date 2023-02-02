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

const animItems = document.querySelectorAll('.anim-item');

if (animItems.length > 0){
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params){
        for (let index=0; index<animItems.length; index++){
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 3; // 1/3 of height element or window

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {animItemPoint = window.innerHeight - window.innerHeight / animStart};
            if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset +animItemHeight)) {animItem.classList.add('show-anim')};
        };
    };
    function offset(el){
        const rect = el.getBoundingClientRect();
        scrollLeft = window.scrollX || document.documentElement.scrollLeft;
        scrollTop = window.scrollY || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft};
    };
    animOnScroll();
};


