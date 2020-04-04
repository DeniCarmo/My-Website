$(document).ready(() => {
    console.log('Working');

    // Functions
    goto_animation();

    function goto_animation(){
        $('a[href^="#"]').on('click', function(e){
            let target = $(this.getAttribute('href'));
            console.log(target);

            if(target.length){
                e.preventDefault();
                $('html, body').stop().animate({scrollTop: target.offset().top }, 800);
            }
        });

        /* $('a[href^="#"]').on('click', function(event) {
            var target = $(this.getAttribute('href'));
            if( target.length ) {
                event.preventDefault();
                $('html, body').stop().animate({
                    scrollTop: target.offset().top
                }, 1000);
            }
        }); */
    }
});