(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 54)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 20
    });

    // Closes responsive menu when a link is clicked
    // $('.navbar-collapse>ul>li>a').click(function() {
    //     $('.navbar-collapse').collapse('hide');
    // });

    // Collapse the navbar when page is scrolled
    // $(window).scroll(function() {
    //     if ($("#mainNav").offset().top > 20) {
    //         $("#mainNav").addClass("navbar-shrink");
    //     } else {
    //         $("#mainNav").removeClass("navbar-shrink");
    //     }
    // });

    // Scroll Reveal calls
    window.sr = ScrollReveal();

    sr.reveal('.intro-text', {
        duration: 1500,
        origin: 'left',
        distance: '500px'
    });

    sr.reveal('.section-heading', {
        duration: 1500,
        origin: 'left',
        distance: '500px'
    });

    sr.reveal('.section-subheading', {
        duration: 1500,
        origin: 'bottom',
        distance: '50px'
    });

    sr.reveal('.sr-icons', {
        duration: 400,
        scale: 0.4,
        distance: '0px'
    }, 100);

    sr.reveal('.portfolio-item', {
        duration: 1000
    }, 100);

     sr.reveal('.timeline-left', {
        duration: 1000,
        origin: 'left',
        distance: '400px'
    }, 100);

    sr.reveal('.timeline-right', {
        duration: 1000,
        origin: 'right',
        distance: '400px'
    }, 100);

    sr.reveal('.timeline-image', {
        duration: 1000,
        origin: 'bottom',
        distance: '100px'
    }, 100);

    sr.reveal('.copyright', {
        duration: 1000,
        origin: 'bottom',
    }, 100);

    sr.reveal('.list-inline-item', {
        duration: 1000,
        origin: 'bottom'
    }, 100);

    //Modal carousel
    $('#carouselExampleIndicators').carousel({
  interval: 2000
    });

    $('a[data-slide="prev"]').click(function() {
    $('.carouselExampleIndicators').carousel('prev');
    });

    $('a[data-slide="next"]').click(function() {
    $('.carouselExampleIndicators').carousel('next');
    });

})(jQuery); // End of use strict
