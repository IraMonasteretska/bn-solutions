$(document).ready(function () {

    $(".accordeon-item").first().addClass("active").find(".accordeon-body").slideDown();

    $(".accordeon-header").click(function () {
        const item = $(this).parent();

        if (item.hasClass("active")) {
            item.removeClass("active");
            item.find(".accordeon-body").slideUp();
        } else {
            $(".accordeon-item.active").removeClass("active").find(".accordeon-body").slideUp();

            item.addClass("active");
            item.find(".accordeon-body").slideDown();
        }
    });










})