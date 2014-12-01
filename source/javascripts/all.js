//= require_tree .
//= require "jquery"

$(document).ready(function() {

//    console.log($('#lightbox').length);

    $('.js-open').on('click', function(){
        var picture = this.src;
//        console.log($('#lightbox').find('img').attr('src'));
        document.getElementById('lightboxImage').src = picture;
        $('#lightbox').show();
    });


    $('#lightbox').on('click', function(){
        $('#lightbox').hide();
    });

});