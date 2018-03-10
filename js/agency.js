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


})(jQuery); // End of use strict
