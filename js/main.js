$(document).ready(() => {

    $('.js--features-section').waypoint((direction) => {
        if(direction === 'down'){
            $('nav').addClass('sticky');
            $('nav').addClass('animated fadeInDown');
        } else {
            $('nav').removeClass('sticky');
            $('nav').removeClass('animated fadeInDown');
        }
    },{
        offset: '60px'
    });

    $('.js--features-link').click(() => {
        $('html, body').animate({
            scrollTop: 
                $('.js--features-section')
                    .offset()
                    .top
        }, 1000);
    });

    $('.js--we-link').click(() => {
        $('html, body').animate({
            scrollTop: 
                $('.js--we-section')
                    .offset()
                    .top
        }, 1000);
    });

    $('.js--testimonials-link').click(() => {
        $('html, body').animate({
            scrollTop: 
                $('.js--testimonials-section')
                    .offset()
                    .top
        }, 1000);
    });

    $('.js--footer-link').click(() => {
        $('html, body').animate({
            scrollTop: 
                $('.js--footer')
                    .offset()
                    .top
        }, 1000);
    });

    $('.js--features-research').waypoint(() => {
        $('.js--features-research').addClass('animated fadeIn');
        $('.js--features-qa').addClass('animated fadeIn');
        $('.js--features-warehouse').addClass('animated fadeIn');
        $('.js--features-delivery').addClass('animated fadeIn');
    },{
        offset: '60%'
    });

    $('.js--we-image').waypoint(() => {
        $('.js--we-image').addClass('animated slideInUp');
    },{
        offset: '70%'
    });

    
});