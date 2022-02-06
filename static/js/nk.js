function initlightbox(){
    var w = $(window).width()-10;
    var h = $(window).height()-150;
    //console.log(w, h);
    var opts = {centerOnScroll: true, titlePosition: 'inside', cyclic: 'true', speedIn: 100, speedOut: 100, changeSpeed: 100, changeFade: 100, onComplete: function(){
        // fix for some rendering bug
        //$('.fancybox-title-inside').css('margin-left', 0);
    }};
    opts = {
        helpers:  {
            title: {
                type: 'outside'
            },
            buttons: {}
        },
        nextEffect: 'fade',
        prevEffect: 'fade'
    };
    $('.thumb').closest('a').addClass('fancybox');
    $('.fancybox').attr('data-fancybox-group', 'gallery').fancybox(opts);
}


$(document).ready(function(){
    initlightbox();
});
