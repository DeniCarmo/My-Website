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
    modal_lang();

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

    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }

    function deleteCookie(name) {   
        document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }

    function modal_lang(){

        if(getCookie('modal_lang') == null){

            $('.modal-lang').addClass('modal-lang-show');
            $body.addClass('mask-active');

            $('.modal-lang-item__title').click(function(){
    
                let lang = $(this).data('lang'),
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
                $('#works-item1 .works-subtitle').text(text_lang.jobs_item1_subtitle);
                $('#works-item1 .works-screenshot img').attr('alt', text_lang.jobs_item1_title);
                $('#works-item1 .works-screenshot img').attr('title', text_lang.jobs_item1_title);
                $('#works-item1 .works-type').text(text_lang.jobs_item1_type);
                $('#works-item1 .works-text').text(text_lang.jobs_item1_description);
                $('#works-item1 .works-link').text(text_lang.jobs_item_link);
    
                $('.contact-title').text(text_lang.contact_title);
    
                $('.madeby-item__text').text(text_lang.developed_by);
    
                $('.modal-lang').removeClass('modal-lang-show');
                $body.removeClass('mask-active');
    
                setCookie('modalLang', lang, 1);
            });
        }


    }
});