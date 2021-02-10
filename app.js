$(document).ready(() => {
    //This detects when the burgers parent div is clicked
    $('.burger-icon').click(() => {
        //This changes the styling of the burger and the nav when the burger is clicked
        $('.burger-icon').toggleClass('active');
        $('nav').toggleClass('closed');
    });
});