$(function () {
    $.ajax({
        url: "./json/release.json",
        dataType: "json",
        success: function (data) {
            if (data.length > 0) {
                for (var i in data) {
                    $('#box1 article').eq(i).prepend('<p>'+data[i].line2+'</p>');
                    $('#box1 article').eq(i).prepend('<h5>'+data[i].line1+'</h5>');
                    $('#box1 article').eq(i).prepend('<img src="'+data[i].head_image+'" alt="photo">');

                    $('#box1 article').eq(i).find('.product .photo').append('<a href="sub.html" target="_self"><img src="'+data[i].first_image+'" alt="product"></a>');
                    $('#box1 article').eq(i).find('.product .description').prepend('<span>'+data[i].first_brand+'</span>');
                    $('#box1 article').eq(i).find('.product .description').append('<h6><a href="sub.html" target="_self">'+data[i].first_product+'</a></h6>');
                    $('#box1 article').eq(i).find('.product .description').append('<h7>'+data[i].first_price+'</h7>');

                    $('#box1 article').eq(i).find('.product:eq(1) .photo').append('<a href="sub.html" target="_self"><img src="'+data[i].second_image+'" alt="product"></a>');
                    $('#box1 article').eq(i).find('.product:eq(1) .description').prepend('<span>'+data[i].second_brand+'</span>');
                    $('#box1 article').eq(i).find('.product:eq(1) .description').append('<h6><a href="sub.html" target="_self">'+data[i].second_product+'</a></h6>');
                    $('#box1 article').eq(i).find('.product:eq(1) .description').append('<h7>'+data[i].second_price+'</h7>');

                    $('#box1 article').eq(i).find('.product:eq(2) .photo').append('<a href="sub.html" target="_self"><img src="'+data[i].third_image+'" alt="product"></a>');
                    $('#box1 article').eq(i).find('.product:eq(2) .description').prepend('<span>'+data[i].third_brand+'</span>');
                    $('#box1 article').eq(i).find('.product:eq(2) .description').append('<h6><a href="sub.html" target="_self">'+data[i].third_product+'</a></h6>');
                    $('#box1 article').eq(i).find('.product:eq(2) .description').append('<h7>'+data[i].third_price+'</h7>');
                };
            }
        }
    });
});