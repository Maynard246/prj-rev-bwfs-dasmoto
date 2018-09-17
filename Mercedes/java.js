$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100){
            $(".navbar").css({"opacity" : "0"})
        }
 else {
        $(".navbar").css({"opacity" : "1"})
    }
 })
 })
 $(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100){
            $(".fade-in").css({"opacity" : "1"})
        }
 else {
        $(".fade-in").css({"opacity" : "0"})
    }
 })
 })
 $(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100){
            $(".fade").css({"opacity" : "0"})
        }
 else {
        $(".fade").css({"opacity" : "1"})
    }
 })
 })