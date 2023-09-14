$(function () {
    $.ajax({
        url: "./json/knock.json",
        dataType: "json",
        success: function (data) {
            if (data.length > 0) {
                for (var i in data) {
                    $('.seventbox a .eventimg').eq(i).append('<img src="'+data[i].image+'" alt="이벤트">');
                    $('.seventbox a .eventinfo').eq(i).append('<p> <span>'+data[i].line1+'</span>');
                    $('.seventbox a .eventinfo').eq(i).append(data[i].line2+'</p>');
                }
            }
        }
    });
});