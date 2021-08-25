var mainslider;
var sliding = false;

$(document).ready(function() {
    var options = {
        slides: '.slide', // Nama slide di slidecontainer
        swipe: false, // handler swipe, wajib include touchSwipe
        transition: "slide", // Transisi slide=> slide dan fade
        slideTracker: true, // menambah pelacakan slide
        slideTrackerID: 'slideposition', // Nama pelacakan slide
        slideOnInteval: false, // Interval slide
        interval: 5000, // Interval slide, jika slideOnInterval is enabled/true
        animateDuration: 1000, //Durasi animasi
        animationEasing: 'linear', // Nilai yang diterima: linear ease in out in-out snap easeOutCubic
                                // easeInOutCubic easeInCirc easeOutCirc easeInOutCirc easeInExpo easeOutExpo
                                // easeInOutExpo easeInQuad easeOutQuad easeInOutQuad easeInQuart easeOutQuart
                                // easeInOutQuart easeInQuint easeOutQuint easeInOutQuint easeInSine easeOutSine
                                // easeInOutSine easeInBack easeOutBack easeInOutBack
        pauseOnHover: false, // Pause jika user mengarahkan kursor ke slide container
        magneticSwipe: true, // efek menempel pada slide ketika swipping/dragging
        neverEnding: true // aktifkan untuk membuat efek yang tidak pernah berhenti/neverending
    }

    $(".slider").simpleSlider(options);
    mainslider = $(".slider").data("simpleslider");
    // yes, that's all!

    $(".slider").on("beforeSliding", function(event) {
        var prevSlide = event.prevslide;
        var newSlide = event.newSlide;
        $(".slider .slide[data-index='"+prevSlide+"'] .slidecontent").fadeOut();
        $(".slider .slide[data-index='"+newSlide+"'] .slidecontent").hide();
        sliding = true;
    });

    $(".slider").on("afterSliding", function(event) {
        var prevSlide = event.prevslide;
        var newSlide = event.newSlide;
        $(".slider .slide[data-index='"+newSlide+"'] .slidecontent").fadeIn();
        sliding = false;
    });

    /**
     * control the slider by scrolling
     */
    $(window).bind('mousewheel', function(event) {
        if(!sliding) {
            if(event.originalEvent.deltaY > 0) {
                mainslider.nextSlide();
            }
            else {
                mainslider.prevSlide();
            }
        }
    });

    $(".slide#satu").backstretch("images/1.jpg");
    $(".slide#dua").backstretch("images/2.jpg");
    $(".slide#tiga").backstretch("images/3.jpg");
    $(".slide#empat").backstretch("images/4.jpg");
    $(".slide#lima").backstretch("images/5.jpg");
    $(".slide#enam").backstretch("images/6.jpg");

    $('.slide .backstretch img').on('dragstart', function(event) {
        event.preventDefault();
    });

    $(".slidecontent").each(function() {
        $(this).css('margin-top', -$(this).height()/2);
    });

});