$(document).ready(() => {
    let $body = $('body'),
        $html = $('html'),
        $window = $(window),
        $document = $(document),
        workCounter = 1;

    // Functions
    goto_animation();
    menu_mobile();
    banner_icon();
    header();
    lang_switcher();

    $('.works-carousel-js').not('.slick-initialized').slick({
        arrows: true,
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        nextArrow: `<i class="works-carousel-icon works-carousel-icon-next"><svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" enable-background="new 0 0 551.13 551.13" height="512" viewBox="0 0 551.13 551.13" width="512"><path d="m361.679 275.565-223.896 223.897v51.668l275.565-275.565-275.565-275.565v51.668z"/></svg></i>`,
        prevArrow: `<i class="works-carousel-icon works-carousel-icon-prev"><svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" enable-background="new 0 0 551.13 551.13" height="512" viewBox="0 0 551.13 551.13" width="512"><path d="m189.451 275.565 223.897-223.897v-51.668l-275.565 275.565 275.565 275.565v-51.668z"/></svg></i>`,
        pauseOnHover: true
    });

    function goto_animation(){
        $body.on('click', 'a[href^="#"]', function(e){
            let target = $(this.getAttribute('href'));

            if(target.length){
                e.preventDefault();
                $('html, body').stop().animate({scrollTop: target.offset().top - 80 }, 800);
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
            }else{
                $('#header').removeClass('header-sticky');
            }
        });
    }

    function lang_switcher(){

        $('.lang-switcher').click(function(){

            if($(this).find('.lang-switcher-item').data('lang') == 'pt'){
                $(this).find('.lang-switcher-item').removeClass('lang-switcher-pt');
                $(this).find('.lang-switcher-item').addClass('lang-switcher-en');
                $(this).find('.lang-switcher-item').text('EN-US');
                $(this).find('.lang-switcher-item').data('lang', 'en');
            }else{
                $(this).find('.lang-switcher-item').addClass('lang-switcher-pt');
                $(this).find('.lang-switcher-item').removeClass('lang-switcher-en');
                $(this).find('.lang-switcher-item').text('PT-BR');
                $(this).find('.lang-switcher-item').data('lang', 'pt');
            }

            let lang = $(this).find('.lang-switcher-item').data('lang'),
                text_lang = new Lang();

            if(lang == 'pt'){
                text_lang = text_lang.portugueseLang;
            }else{
                text_lang = text_lang.englishLang;
            }

            $('.banner-title').text(text_lang.banner_title);
            $('.banner-subtitle').text(text_lang.banner_text);

            $('.menu-link-about').text(text_lang.menu_item_about);
            $('.menu-link-skills').text(text_lang.menu_item_skills);
            $('.menu-link-tools').text(text_lang.menu_item_tools);
            $('.menu-link-works').text(text_lang.menu_item_works);
            $('.menu-link-contact').text(text_lang.menu_item_contact);

            $('.about-title').text(text_lang.about_title);
            $('.about-text').text(text_lang.about_text);
            $('.about-link').text(text_lang.about_link);

            $('.skills-title').text(text_lang.skills_title);
            $('.skills-subtitle').text(text_lang.skills_subtitle);
            $('.skills-item-title').text(text_lang.skills_item1_title);
            $('.skills-item-text').text(text_lang.skills_item1_subtitle);

            $('.tools-title').text(text_lang.tools_title);

            $('.works-title').text(text_lang.jobs_title);
            $('.works-platform').text(text_lang.jobs_platform);
            $('.works-platform').append(text_lang.jobs_platform_tray_content);
            $('.works-platform-logo').attr('title', text_lang.jobs_platform_tray_link_title);

            $('#works-item1 .works-subtitle').text(text_lang.jobs_item1_subtitle);
            $('#works-item1 .works-screenshot img').attr('title', text_lang.jobs_item1_title);
            $('#works-item1 .works-screenshot img').attr('alt', text_lang.jobs_item1_title);
            $('#works-item1 .works-text').text(text_lang.jobs_item1_text);
            $('#works-item1 .works-link').text(text_lang.jobs_button_text);
            $('#works-item1 .works-link-js').attr('href', text_lang.jobs_item1_link);
            $('#works-item1 .works-link-js').attr('title', text_lang.jobs_item1_link_title);
            $('#works-item1 .works-description').text(text_lang.jobs_item1_description);

            $('#works-item2 .works-subtitle').text(text_lang.jobs_item2_subtitle);
            $('#works-item2 .works-screenshot img').attr('alt', text_lang.jobs_item2_title);
            $('#works-item2 .works-screenshot img').attr('title', text_lang.jobs_item2_title);
            $('#works-item2 .works-text').text(text_lang.jobs_item2_text);
            $('#works-item2 .works-link').text(text_lang.jobs_button_text);
            $('#works-item2 .works-link-js').attr('href', text_lang.jobs_item2_link);
            $('#works-item2 .works-link-js').attr('title', text_lang.jobs_item2_link_title);
            $('#works-item2 .works-description').text(text_lang.jobs_item2_description);

            $('#works-item3 .works-subtitle').text(text_lang.jobs_item3_subtitle);
            $('#works-item3 .works-screenshot img').attr('alt', text_lang.jobs_item3_title);
            $('#works-item3 .works-screenshot img').attr('title', text_lang.jobs_item3_title);
            $('#works-item3 .works-text').text(text_lang.jobs_item3_text);
            $('#works-item3 .works-link').text(text_lang.jobs_button_text);
            $('#works-item3 .works-link-js').attr('href', text_lang.jobs_item3_link);
            $('#works-item3 .works-link-js').attr('title', text_lang.jobs_item3_link_title);
            $('#works-item3 .works-description').text(text_lang.jobs_item3_description);

            $('.contact-title').text(text_lang.contact_title);

            $('.madeby-item__text').text(text_lang.developed_by);
        });
    }
});