$(function () {
    $.ajax({
        url: "./json/pick.json",
        dataType: "json",
        success: function (data) {
            if (data.length > 0) {
                for (var i in data) {
                    $('.imgbox').eq(i).find('img').attr('src', data[i].image)
                    $('.description').eq(i).prepend('<span>'+data[i].brand+'</span>');
                    $('.description').eq(i).append('<h6><a href="sub.html" target="_self">'+data[i].product+'</a></h6>');
                    $('.description').eq(i).append('<h7>'+data[i].price+'</h7>');
                }
            }
        }
    });
});