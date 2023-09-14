$(function () {
    $.ajax({
        url: "./json/release_second.json",
        dataType: "json",
        success: function (data) {
            if (data.length > 0) {
                for (var i in data) {
                    $('#box1 #release_wrap2 .product .photo').eq(i).append('<a href="sub.html" target="_self"><img src="'+data[i].image+'" alt="product"></a>');
                    $('#box1 #release_wrap2 .product .description').eq(i).prepend('<span>'+data[i].brand+'</span>');
                    $('#box1 #release_wrap2 .product .description').eq(i).append('<h6><a href="sub.html" target="_self">'+data[i].product+'</a></h6>');
                    $('#box1 #release_wrap2 .product .description').eq(i).append('<h7>'+data[i].price+'</h7>');
                };
            }
        }
    });
});