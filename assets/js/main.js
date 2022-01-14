window.onload = function () {

    $(".preloader").fadeOut();

    // Include Navbar In All Pages
    $('#mainnavbar').load('includes/mainnavbar.html');

    // Include res_navbar In All Pages
    $('#res_navbar').load('includes/res-navbar.html');

    // Include Footer In All Pages
    $('#footer').load('includes/footer.html');

    $('body').on('click' , '[data-trigger="trigger--sidebar"]', function(){
        $('[data-drop="res--sidebar"]').addClass('active');
        $('[data-drop="res--sidebar--overlay"]').addClass('active');
    });
    
    $('body').on('click', '[data-drop="res--sidebar--overlay"]' , function(){
        $(this).removeClass('active');
        $('[data-drop="res--sidebar"]').removeClass('active');
    });
    
    $('body').on('click', '[data-trigger="close--sidebar"]' , function(){
        $('[data-drop="res--sidebar--overlay"]').removeClass('active');
        $('[data-drop="res--sidebar"]').removeClass('active');
    });

    // Recent Products Home Slider
    $("#recent--products , #featured--company , #sale--products , #top--company").owlCarousel({
        loop: true,
        margin: 20,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 650,
        nav:true,
        dots:false,
        responsive: {
            0: {
                items: 1,
                nav: true,
            },
            700: {
                items:2
            },
            1100: {
                items: 3,
            },
            1250: {
                items: 4,
                nav: true,
            },
        },
    });

};
