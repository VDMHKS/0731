$(function () {
    $.ajax({
        url: "../json/pick.json",
        dataType: "json",
        success: function (data) {
            if (data.length > 0) {
                for (var i in data) {
                    $('.box5 .imgbox').eq(i).find('img').attr('src', data[i].image)
                    $('.box5 .description').eq(i).prepend('<span>'+data[i].brand+'</span>');
                    $('.box5 .description').eq(i).append('<h6><a href="sub.html" target="_self">'+data[i].product+'</a></h6>');
                    $('.box5 .description').eq(i).append('<h7>'+data[i].price+'</h7>');
                }
            }
        }
    });
});