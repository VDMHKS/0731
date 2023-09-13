$(function () {
    $.ajax({
        url: "./json/exclusive.json",
        dataType: "json",
        success: function (data) {
            if (data.length > 0) {
                for (var i in data) {
                    $('.exbox .imgbox').eq(i).append('<a href="sub.html" target="_self"><img src="'+data[i].image+'" alt="product"></a>');
                    $('.exbox .description').eq(i).prepend('<span>'+data[i].brand+'</span>');
                    $('.exbox .description').eq(i).append('<h6><a href="sub.html" target="_self">'+data[i].product+'</a></h6>');
                    $('.exbox .description').eq(i).append('<h7>'+data[i].price+'</h7>');
                }
            }
        }
    });
});