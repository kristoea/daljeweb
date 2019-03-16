$(document).ready(function() {
    $(".opacity_header").css("visibility","hidden");
    $(".opacity_header").css("opacity","0");
    $(".float_header").css("top",-$(".float_header").innerHeight());

    $("#nav_button").hide();

    if ($(window).width() < 1000){
        $("#nav_button").show();
    }
});

function scroll_down() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".story").offset().top + 10
    }, 250);
};

function nav_button(){ 
    if ($(".menu_nav").css("display") != "none"){
        var y = $(this).scrollTop();
        var lHeight = $(".locked_header").innerHeight()*0.8;
        if (y > lHeight) {
            $("#nav_button").show();
        } else {
            $("#nav_button").hide();
            if ( $("#nav_button").hasClass("f_close") ){
                $("#nav_button").toggleClass("f_show");
                $("#nav_button").toggleClass("f_close");
                $("#path1").attr("d","M 10 18 L 40 18");
                $("#path2").attr("d","M 10 25 L 30 25");
                $("#path3").attr("d","M 10 32 L 40 32");
                $(".float_header").css("top",-$(".float_header").innerHeight());
            }
        }
    }
}

$(document).scroll(function() {
    nav_button();
});

$(window).resize(function() {
    if ( $('#nav_button').hasClass('f_close') ){
        f_show();
    }
    if($(".locked_header .menu_nav").css("display") == "none"){
        $("#nav_button").show();
    } else {
        if ( $("#nav_button").hasClass("f_show") ){
            nav_button();
        }
    }
});

function f_show() {
    if ( $('#nav_button').hasClass('f_show') ){
        if ($(".menu_nav").css("display") != "none"){
            $(".float_header").css("top","0");
        } else {
            $(".opacity_header").css("opacity","100");
            $(".opacity_header").css("visibility","visible");
        }
        $("#path1").attr("d","M 15 15 L 35 35");
        $("#path2").attr("d","M 10 25 L 10 25");
        $("#path3").attr("d","M 15 35 L 35 15");
    } else {
        if ($(".menu_nav").css("display") != "none"){
            $(".float_header").css("top",-$(".float_header").innerHeight());
            $(".opacity_header").css("opacity","0");
            $(".opacity_header").css("visibility","hidden");
        } else {
            $(".float_header").css("top",-$(".float_header").innerHeight());
            $(".opacity_header").css("opacity","0");
            $(".opacity_header").css("visibility","hidden");
        }
        $("#path1").attr("d","M 10 18 L 40 18");
        $("#path2").attr("d","M 10 25 L 30 25");
        $("#path3").attr("d","M 10 32 L 40 32");
    }
    
    $('#nav_button').toggleClass('f_show');
    $('#nav_button').toggleClass('f_close');
}

function page_close() {

    fallbackUrl = "http://folk.ntnu.no/krisskul/DaljeWeb/html/index.html";
    var prevPage = window.location.href;
    window.history.go(-1);

    setTimeout(function(){ 
        if (window.location.href == prevPage) {
            window.location.href = fallbackUrl; 
        }
    }, 100);

    /*window.history.back();*/
}