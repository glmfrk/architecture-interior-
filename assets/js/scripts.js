$(document).ready(function () {
    $('a').click(function () {
        $(this).addClass('.active')
    })
    //=============================
    //Preloader Start
    //=============================

    $(window).on('load', function () {
        $('#status').fadeOut();
        $('#preloader').delay(500).fadeOut('slow');
        $('body').delay(500).css({ 'overflow': 'visible' });
    });

    //=============================
    // Sticky Start
    //=============================

    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 200) {
            $(".fixed-menu").removeClass("sticky");
        } else {
            $(".fixed-menu").addClass("sticky");
        }
    });
      //=============================
    // MOBILE Nav 
    //=============================

    $('.navbar-toggler').on("click", function () {
        $('.main-nav').slideToggle(500);
    });

    // OWL CAROUSEL SLIDER 
    $('.carosss').owlCarousel({
        loop: true,
        margin: 70,
        center: true,
        autoplay: true,
        nav: false,
        dots: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:1
            },
            1200:{
                items:2
            },
        }

    });

  // TESTIMONILA START

  $(".testimonial-carosss").owlCarousel({
    loop: true,
    margin: 30,
    autoplay: true,
    nav: false,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        768: {
            items: 1.7
        },
        1000: {
            items: 1.7
        }
    }
});

 //=============================
    // Partner slider carousel
    //=============================


    $(".partner-logo").owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            768: {
                items: 4
            },
            1000: {
                items: 5
            }
        }
    });

    //======================
    // COUNTER-UP 
    //======================

    $('.counter').countUp({
        'time': 6000,
        'delay': 10
    });
   
     //======================
    //  Back to Top JS 
    //======================


    $('body').append('<div id="toTop" class="back-to-top"><i class="fas fa-arrow-up"></i></div>');
    $(window).on('scroll', function () {
        if ($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').on('click', function () {
        $("html, body").animate({ scrollTop: 0 }, 2000);
        return false;
    });
})

for(var i=0;i<=70;i++)
{       
    setTimeout(document.querySelectorAll(".counter").innerHTML = i, 3000);
}