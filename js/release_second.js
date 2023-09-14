$(function () {
    $.ajax({
        url: "./json/release_second.json",
        dataType: "json",
        success: function (data) {
            if (data.length > 0) {
                for (var i in data) {
                    $('#box1 #second').eq(i).prepend('<p>'+data[i].line2+'</p>');
                    $('#box1 #second').eq(i).prepend('<h5>'+data[i].line1+'</h5>');
                    $('#box1 #second').eq(i).prepend('<img src="'+data[i].image+'" alt="photo">');
                };
                
            }
        }
    });
});