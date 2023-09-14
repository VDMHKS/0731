$(function () {
    $.ajax({
        url: "./json/release_second.json",
        dataType: "json",
        success: function (data) {
            if (data.length > 0) {
                for (var i=1; i<2; i++) {
                    $('#box1 #second').eq(i).prepend('<p>'+data[i].line2+'</p>');
                    $('#box1 #second').eq(i).prepend('<h5>'+data[i].line1+'</h5>');
                    $('#box1 #second').eq(i).prepend('<img src="'+data[i].image+'" alt="photo">');
                };
                for (var j=2; j<4; j++) {
                    $('#box1 #second .product .photo').eq(j).append('<a href="sub.html" target="_self"><img src="'+data[j].image+'" alt="product"></a>');
                    $('#box1 #second .product .description').eq(j).prepend('<span>'+data[j].brand+'</span>');
                    $('#box1 #second .product .description').eq(j).append('<h6><a href="sub.html" target="_self">'+data[j].product+'</a></h6>');
                    $('#box1 #second .product .description').eq(j).append('<h7>'+data[j].price+'</h7>');
                };
                for (var k=4; k<5; k++) {
                    $('#box1 #second .product2 .photo').eq(k).append('<a href="sub.html" target="_self"><img src="'+data[k].image+'" alt="product"></a>');
                    $('#box1 #second .product2 .description').eq(k).prepend('<span>'+data[k].brand+'</span>');
                    $('#box1 #second .product2 .description').eq(k).append('<h6><a href="sub.html" target="_self">'+data[k].product+'</a></h6>');
                    $('#box1 #second .product2 .description').eq(k).append('<h7>'+data[k].price+'</h7>');
                }
            }
        }
    });
});