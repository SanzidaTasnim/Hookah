// --------------   jQuery Pluging script  -----------



// =====------  Banner text Round
$('.banner_round').arctext({
    radius: 750,
    dir: 1,
    animation: 200,
});
// =====------  Banner text Round


// =====------  Banner Slider
$('.banner_slider').slick({
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    prevArrow: '<i class="fas fa-chevron-left slid_arrow left"></i>',
    nextArrow: '<i class="fas fa-chevron-right slid_arrow right"></i>',
});
// =====------  Banner Slider


// =====------  Counter Down

// Set the date we're counting down to
var countDownDate = new Date("Jun 24, 2021").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("days").innerHTML = days
    document.getElementById("hours").innerHTML = hours
    document.getElementById("minutes").innerHTML = minutes
    document.getElementById("seconds").innerHTML = seconds

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);
// =====------  Counter Down



// =====------  team_slider
$('.team_slider').slick({
    dots: true,
    infinite: true,
    arrows: false,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        }
    ]
});
// =====------  team_slider



// =====------  gallery_slider
$('.gallery_slider').slick({
    dots: false,
    infinite: true,
    arrows: false,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        }
    ]
});
// =====------  gallery_slider


// =====------  testi-slider
$('.testi_slider').slick({
    dots: false,
    infinite: true,
    arrows: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<i class="fas fa-chevron-left slid_arrow left"></i>',
    nextArrow: '<i class="fas fa-chevron-right slid_arrow right"></i>',
    // responsive: [{
    //         breakpoint: 1024,
    //         settings: {
    //             slidesToShow: 3,
    //             slidesToScroll: 3,
    //             infinite: true,
    //             dots: true
    //         }
    //     },
    //     {
    //         breakpoint: 600,
    //         settings: {
    //             slidesToShow: 2,
    //             slidesToScroll: 2
    //         }
    //     },
    //     {
    //         breakpoint: 480,
    //         settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1
    //         }
    //     }
    // ]
});
// =====------  testi-slider


// =====------  Venubox
$(document).ready(function () {
    $('.venobox').venobox();
});
// =====------  Venubox


// =====------  pulse hover
$(function () {
    $(".pulse").hover(function () {
        $(this).removeClass("pulse");
    }, function () {
        $(this).addClass("pulse");
    });
});
// =====------  pulse hover


// =====------  Venubox
$('.counter').counterUp({
    delay: 10,
    time: 1200,
});
// =====------  Venubox

// =====------  preloader
$(window).load(function () {
    $(".loader").delay(800).fadeOut("slow");
    $("#overlayer").delay(750).fadeOut("slow");
})
// =====------  preloader