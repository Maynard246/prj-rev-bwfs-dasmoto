$(document).ready(function() {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
        $(".navbar").css("background-color","#141618");


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

// When the user clicks on the button, scroll to the top of the document
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



