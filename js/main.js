$(document).ready(function () {

    // accordeons
    $(".accordeon").each(function () {
        const acc = $(this);

        const firstItem = acc.find(".accordeon-item").first();
        firstItem.addClass("active");
        firstItem.find(".accordeon-body").slideDown(0);

        acc.find(".accordeon-header").click(function () {
            const item = $(this).parent();

            if (item.hasClass("active")) {
                item.removeClass("active").find(".accordeon-body").slideUp();
            } else {
                acc.find(".accordeon-item.active")
                    .removeClass("active")
                    .find(".accordeon-body")
                    .slideUp();

                item.addClass("active").find(".accordeon-body").slideDown();
            }
        });
    });

    // scroll to top
    document.querySelector('.totop').addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });






})