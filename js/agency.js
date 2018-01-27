(function($) {
    "use strict"; // Start of use strict

    // Add scrollspy to <body>
    $('body').scrollspy({target: 'nav', offset: 50});

    // Smooth scrolling using jQuery
    $('nav a:not([href="#"])').on('click', function(e) {
        e.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 700, function() {
            window.location.hash = hash;
        });
        return false;
    });

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
