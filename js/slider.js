function prev(){
    $('#sliderimg li:last').prependTo('#sliderimg');
    $('#sliderimg').css('margin-left',-1920);
    $('#sliderimg').stop().animate({marginLeft:0},300);
}

function next(){
    $('#sliderimg').filter(':not(:animated)').stop().animate({marginLeft:-1920}, function(){
        $('#sliderimg li:first').appendTo('#sliderimg');
        $('#sliderimg').css({marginLeft:0})
    });
}

function slide(){
    $('#sliderimg').filter(':not(:animated)').stop().animate({marginLeft:-1920}, function(){
        $('#sliderimg li:first').appendTo('#sliderimg');
        $('#sliderimg').css({marginLeft:0})
    });
}





setInterval(slide, 4000);

$('.prev').click(function(){
    prev();
});

$('.next').click(function(){
    next();
});
