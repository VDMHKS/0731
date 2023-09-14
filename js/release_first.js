$(function () {
    $.ajax({
        url: "./json/release_first.json",
        dataType: "json",
        success: function (data) {
            if (data.length > 0) {
                for (var i in data) {
                    $('#box1 #first').eq(i).prepend('<p>'+data[i].line2+'</p>');
                    $('#box1 #first').eq(i).prepend('<h5>'+data[i].line1+'</h5>');
                    $('#box1 #first').eq(i).prepend('<img src="'+data[i].image+'" alt="photo">');
                };
                for (var j=2; j<4; j++) {
                    $('#box1 #first .product .photo').eq(j).append('<a href="sub.html" target="_self"><img src="'+data[j].image+'" alt="product"></a>');
                    $('#box1 #first .product .description').eq(j).prepend('<span>'+data[j].brand+'</span>');
                    $('#box1 #first .product .description').eq(j).append('<h6><a href="sub.html" target="_self">'+data[j].product+'</a></h6>');
                    $('#box1 #first .product .description').eq(j).append('<h7>'+data[j].price+'</h7>');
                };
            }
        }
    });
});
