$(function () {
    $('#navbox #new, .dropdown1').mouseover(function () {
        $('.dropdown1').stop().slideDown("fast");
        $('.fog').stop().fadeIn("fast");
    }).mouseout(function () {
        $('.dropdown1').stop().slideUp("fast");
        $('.fog').stop().fadeOut("fast");
    });
});

$(function () {
    $('#navbox nav, .dropdown2').mouseover(function () {
        $('.dropdown2').stop().slideDown("fast");
        $('.fog').stop().fadeIn("fast");
    }).mouseout(function () {
        $('.dropdown2').stop().slideUp("fast");
        $('.fog').stop().fadeOut("fast");
    });
});