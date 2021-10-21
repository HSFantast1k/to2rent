$(function(){
    $('.slider').slick({
        prevArrow: '<button class="slick-arrow slick-left"><img src="images/arrow-left.svg" alt="left arrow"></button>',
        nextArrow: '<button class="slick-arrow slick-right"><img src="images/arrow-right.svg" alt="right arrow"></button>',
        fade: true,
        responsive: [
            {
                breakpoint: 441,
                settings: {
                    arrows: false,
                    dots: true,
                }
            }
        ]
    });
});