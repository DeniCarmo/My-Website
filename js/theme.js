$(document).ready(() => {
    let $body = $('body'),
        $html = $('html'),
        $window = $(window),
        $document = $(document);

    // Functions
    goto_animation();
    menu_mobile();

    function goto_animation(){
        $('a[href^="#"]').on('click', function(e){
            let target = $(this.getAttribute('href'));
            console.log(target);

            if(target.length){
                e.preventDefault();
                $('html, body').stop().animate({scrollTop: target.offset().top }, 800);
            }
        });
    }

    function menu_mobile(){

        $body.on('click', '#menuOpen', () => {
            $('#menuMobile').addClass('menu-mobile__toggle');
        });

        $body.on('click', '#menuClose', () => {
            $('#menuMobile').removeClass('menu-mobile__toggle');
        });

    }
});