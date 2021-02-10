$(document).ready(function() {
    //This detects when the burgers parent div is clicked
    $('.burger-icon').click(function() {
        //This changes the styling of the burger and the nav when the burger is clicked
        $('.burger-icon').toggleClass('active');
        $('nav').toggleClass('closed')
    });
})