$(function () {
    $.ajax({
        url: "./json/best.json",
        dataType: "json",
        success: function (data) {
            if (data.length > 0) {
                for (var i in data) {
                    $('.best_product .photo').eq(i).append('<a href="sub.html" target="_self"><img src="'+data[i].image+'" alt="product"></a>');
                    $('.best_product .description').eq(i).prepend('<span>'+data[i].brand+'</span>');
                    $('.best_product .description').eq(i).append('<h6><a href="sub.html" target="_self">'+data[i].product+'</a></h6>');
                    $('.best_product .description').eq(i).append('<h7>'+data[i].price+'</h7>');
                }
            }
        }
    });
});