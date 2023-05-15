$(document).ready(function ()
{
    $('.dropdown').hover(
        function ()
        {
            $(this).children('.box__open').slideDown('fast');
        },
        function ()
        {
            $(this).children('.box__open').slideUp('fast');
        });
});

$(document).ready(function ()
{
    $('.dropdown').hover(
        function ()
        {
            $(this).children('.box__open-2').slideDown('fast');
        },
        function ()
        {
            $(this).children('.box__open-2').slideUp('fast');
        });
});
$(document).ready(function ()
{
    $('.dropdown').hover(
        function ()
        {
            $(this).children('.box__open-3').slideDown('fast');
        },
        function ()
        {
            $(this).children('.box__open-3').slideUp('fast');
        });
});


$(document).ready(function ()
{
    var scroll_pos = 0;
    $(document).scroll(function ()
    {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos < 540) {
            $("nav").css('background-color', 'transparent');
            $("nav").removeClass("shadow-sm");
        } else {
            $("nav").css('background-color', '#fff');
            $("nav").css("height", "80px");
            $("nav").addClass("shadow-sm");




        }
    });
});

$("#carouselExampleIndicators").ready(function ()
{
    $(".text__caption--1").hide()
    $(".text__caption--1").slideToggle(1000, function ()
    {
        $(".text__caption--1").show();

    });

});

$("#firstimage").click(function ()
{
    $(".text__caption--1").hide()
    $(".text__caption--1").slideToggle(1000, function ()
    {
        $(".text__caption--1").show();

    });

});



$("#secondimage").click(function ()
{
    $(".text__caption--2").hide()
    $(".text__caption--2").slideToggle(1000, function ()
    {
        $(".text__caption--2").show();

    });

});

$("#thirdimage").click(function ()
{
    $(".text__caption--3").hide()
    $(".text__caption--3").slideToggle(1000, function ()
    {
        $(".text__caption--3").show();

    });

});

$(document).ready(function ()
{
    $(".owl-carousel").owlCarousel();

});



