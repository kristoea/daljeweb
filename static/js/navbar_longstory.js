$(document).ready(function() {
    $(".opacity_header").css("visibility","hidden");
    $(".opacity_header").css("opacity","0");
    $(".float_header").css("top",-$(".float_header").innerHeight());
    $("#nav_button").show();
});

$(window).resize(function() {
    if ( $('#nav_button').hasClass('f_close') ){
        f_show();
    }
});

function f_show() {
    if ( $('#nav_button').hasClass('f_show') ){
        if ($(window).width() > 1000){
            $(".float_header").css("top","0");
        } else {
            $(".opacity_header").css("opacity","100");
            $(".opacity_header").css("visibility","visible");
        }
        $("#path1").attr("d","M 15 15 L 35 35");
        $("#path2").attr("d","M 10 25 L 10 25");
        $("#path3").attr("d","M 15 35 L 35 15");
    } else {
        if ($(window).width() > 1000){
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

function dropdown() {
    if (!$(".dropdown-content").is(":visible")){
        $("#pathd1").attr("d","M 4 18 L 11 8 L 18 18");
    } else {
        $("#pathd1").attr("d","M 4 8 L 11 18 L 18 8");
    }
    $(".dropdown-content").toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if ((!event.target.matches('#button')) && ($(".dropdown-content").css("display") != "none")) {
      $(".dropdown-content").toggle("show");
      $("#pathd1").attr("d","M 4 8 L 11 18 L 18 8");
    }
}

function drop(drop,p,href) {
    if (drop.css("display") == "none"){

        if ($(".utgaver").css("display") != "none"){
            $(".utgaver").toggle("show");
        } if ($(".moteguide").css("display") != "none"){
            $(".moteguide").toggle("show");
        } if ($(".portfolio").css("display") != "none"){
            $(".portfolio").toggle("show");
        } if ($(".ekspertise").css("display") != "none"){
            $(".ekspertise").toggle("show");
        } if ($(".team").css("display") != "none"){
            $(".team").toggle("show");
        } if ($(".karriere").css("display") != "none"){
            $(".karriere").toggle("show");
        }
        
        drop.toggle("show");
        $("#button_text").text(p);
        window.location.href = href;
    }
    if ($('#nav_button').hasClass('f_close') ){
        f_show();
    }

    $([document.documentElement, document.body]).animate({
        scrollTop: $(".dropdown").offset().top
    }, 100);
}

function scroll_down(id) {
    $([document.documentElement, document.body]).animate({
        scrollTop: id.offset().top + 10
    }, 250);
};
