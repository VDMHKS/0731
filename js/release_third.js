$(function () {
    $.ajax({
        url: "./json/release_third.json",
        dataType: "json",
        success: function (data) {
            if (data.length > 0) {
                for (var i in data) {
                    $('#release_wrap3 .product .photo').eq(i).append('<a href="sub.html" target="_self"><img src="'+data[i].image+'" alt="product"></a>');
                    $('#release_wrap3 .product .description').eq(i).prepend('<span>'+data[i].brand+'</span>');
                    $('#release_wrap3 .product .description').eq(i).append('<h6><a href="sub.html" target="_self">'+data[i].product+'</a></h6>');
                    $('#release_wrap3 .product .description').eq(i).append('<h7>'+data[i].price+'</h7>');
                };
            }
        }
    });
});