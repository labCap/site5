$(function () {

    $('.pets__items').slick({
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipe: true,
        autoplay: true,
        prevArrow: '<button type="button"><img src="img/left.png"></button>',
        nextArrow: '<button type="button"><img src="img/right.png"></button>',
        responsive: [
            {
                breakpoint: 500,
                settings: { slidesToShow: 1, slidesToScroll: 1, }
            }
        ]
    });
});
$('.btn__menu').on('click', function () {
    $('.menu__list').slideToggle();
});

