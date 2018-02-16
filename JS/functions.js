/* Dropdown menu*/
$(document).ready(function () {

    $(".menu").on("click", function () {

        $("#Head #Nav_bar .Nav_bar_ul").toggleClass("open");

    });

});
/*....Drop down end....*/






$(window).scroll(function () {
    parallax();
})

function parallax() {

    var wScroll = $(window).scrollTop()

    $('.parallax').css('background-position', 'center ' + (wScroll * 0.1) + 'px');
    /*$('.parallax').css('top', -5 + (wScroll * .005) + 'em');*/

}
