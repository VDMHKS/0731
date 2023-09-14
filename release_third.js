$(function () {
    $.ajax({
        url: "./json/release_third.json",
        dataType: "json",
        success: function (data) {
            if (data.length > 0) {
                for (var i=1; i<2; i++) {
                    $('#box1 #third').eq(i).prepend('<p>'+data[i].line2+'</p>');
                    $('#box1 #third').eq(i).prepend('<h5>'+data[i].line1+'</h5>');
                    $('#box1 #third').eq(i).prepend('<img src="'+data[i].image+'" alt="photo">');
                };
                for (var i=2; i<4; i++) {
                    $('#box1 #third .product .photo').eq(i).append('<a href="sub.html" target="_self"><img src="'+data[i].image+'" alt="product"></a>');
                    $('#box1 #third .product .description').eq(i).prepend('<span>'+data[i].brand+'</span>');
                    $('#box1 #third .product .description').eq(i).append('<h6><a href="sub.html" target="_self">'+data[i].product+'</a></h6>');
                    $('#box1 #third .product .description').eq(i).append('<h7>'+data[i].price+'</h7>');
                };
            }
        }
    });
});