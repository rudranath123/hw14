$(function () {

    // JQUERY CODE

    $('.hide').click( function  () {

        $('.box').fadeOut(500)


    })


    // SHOW

    $('.show').click( function () {
        $('.box').fadeIn(500)
    })


    // TOGGLE


    $('.toggle').click(function () {

        $('.box').fadeToggle(500)
    })



}  );