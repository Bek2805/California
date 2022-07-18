$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        nav: true,
        items: 1,
        loop: true,
        autoplay: false,
        navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
        dots: false,

        responsive: { //Адаптация в зависимости от разрешения экрана
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    });




$('.menu_mobile').on('click', function(e) {
    e.preventDefault();
    $('.menu_btn').toggleClass('menu_active');
    $('.menu_wrap').toggleClass('menu_active');
    $('body').toggleClass('hidden')

});


$('.menu a').on('click', function(e) {
    console.log(123);

    $('.menu_btn').removeClass('menu_active');
    $('.menu_wrap').removeClass('menu_active');
    $('body').removeClass('hidden')

});