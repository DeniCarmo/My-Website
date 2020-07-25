$(document).ready(() => {
    let $body = $('body'),
        $html = $('html'),
        $window = $(window),
        $document = $(document);

    // Functions
    goto_animation();
    menu_mobile();
    banner_icon();
    header();

    function goto_animation(){
        $body.on('click', 'a[href^="#"]', function(e){
            let target = $(this.getAttribute('href'));

            if(target.length){
                e.preventDefault();
                $('html, body').stop().animate({scrollTop: target.offset().top }, 800);
            }
        });
    }

    function banner_icon(){
        $window.width() >= 1200 ? $('.banner-icon').attr('href', '#header') : $('.banner-icon').attr('href', '#about').addClass('banner-icon--mobile');
    }

    function menu_mobile(){

        $body.on('click', '#menuOpen', () => {
            $('#menuMobile').addClass('menu-mobile__toggle');
            $html.removeClass('mask-active');
            $html.addClass('mask-active');
        });

        $body.on('click', '#menuClose', () => {
            $('#menuMobile').removeClass('menu-mobile__toggle');
            $html.removeClass('mask-active');
        });

        $body.on('click', '.menu-mobile__item .menu-link', () => {
            $('#menuClose').trigger('click');
        });

    }

    function header(){

        $window.scroll(() => {

            if($window.scrollTop() >= $('#main_content').offset().top){
                $('#header').removeClass('header-sticky');
                $('#header').addClass('header-sticky');
                console.log('Header is fixed.');
            }else{
                $('#header').removeClass('header-sticky');
                console.log('Header is relative.');
            }
        });
    }
});