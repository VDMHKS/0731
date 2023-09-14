$(function () {
    $.ajax({
        url: "./json/enterview.json",
        dataType: "json",
        success: function (data) {
            if (data.length > 0) {
                for (var i in data) {
                    $('.view_wrap .imgbox').eq(i).append('<a href="sub.html" target="_self"><img src="'+data[i].image+'" alt="product"></a>');
                    $('.view_wrap .description').eq(i).prepend('<span>'+data[i].brand+'</span>');
                    $('.view_wrap .description').eq(i).append('<h6><a href="sub.html" target="_self">'+data[i].product+'</a></h6>');
                    $('.view_wrap .description').eq(i).append('<h7>'+data[i].price+'</h7>');
                }
            }
        }
    });
});