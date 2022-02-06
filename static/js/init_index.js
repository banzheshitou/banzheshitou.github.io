function set_email() {
    coded = "FIa@F6.FGxN1WCi.hsN"
    key = "1WeCJxB2zP6EGuy8tkUcwhL3IRMaSHvgNrdnpfFAK5TmbjiOlQZq9sDoX074VY"
    shift=coded.length; link="";
    for (i=0; i<coded.length; i++) { if (key.indexOf(coded.charAt(i))==-1) {
        ltr = coded.charAt(i); link += (ltr);
      } else {     
        ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length
        link += (key.charAt(ltr))
      } }
    $('#email').html('<img src="img/emailicon.png" alt="email:" width="20px" style="float: left;"/> &nbsp; <a href="mailto:'+link+'">'+link+'</a>');
}

// see https://dimentech.com/assets/obfuscator.html
function set_phone_num() {
    coded = "mem-sLV-sMLY"
    key = "QEYX9zniDeLgUPkoNqtfGAjdBuJIWhx84OC3F2yp6HZsMvbV7mRw0KaSlTr15c"
    shift=coded.length; link="";
    for (i=0; i<coded.length; i++) { if (key.indexOf(coded.charAt(i))==-1) {
        ltr = coded.charAt(i); link += (ltr);
      } else {     
        ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length
        link += (key.charAt(ltr))
      } }
    $('#phone_num').html('<img src="img/phoneicon.png" alt="phone:" width="20px" style="float: left;"/> &nbsp; '+link);
}

$(document).ready(function() {
    set_phone_num();
    set_email();
});


$.fn.showFeatureText = function() {
    return this.each(function(){    
        var box = $(this);
        var text = $('p',this);
        box.hover(function(){ text.slideDown(400); },
                  function(){ text.slideUp(400); });
    });
}

$(function(){
    $('.pubImgBox').showFeatureText();
    //$('.pubImgBox').BlackAndWhite({
    //    hoverEffect : true
    //});
});

