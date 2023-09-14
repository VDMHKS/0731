$(function () {
    $.ajax({
        url: "./json/release_head.json",
        dataType: "json",
        success: function (data) {
            if (data.length > 0) {
                for (var i in data) {
                    $('#box1 article').eq(i).prepend('<p>'+data[i].line2+'</p>');
                    $('#box1 article').eq(i).prepend('<h5>'+data[i].line1+'</h5>');
                    $('#box1 article').eq(i).prepend('<img src="'+data[i].head_image+'" alt="photo">');
                };
            }
        }
    });
});