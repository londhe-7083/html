$(document).ready(function(){    

$('#menu-bar').click(function(){
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
});

 $(window).on('scroll load',function(){

    $('#menu-bar').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');
 });

 $('.menu .list .btn').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
 })
})
