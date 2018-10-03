$(document).ready(function() {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
        $(".navbar").css("background-color","rgb(250, 247, 244)");


    } else {
        $(".navbar").css("background-color","transparent");



        }
})
})
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 500){
            $(".fade-in").css({"opacity" : "1"})
        }
 else {
        $(".fade-in").css({"opacity" : "0"})
    }
 })
 })
