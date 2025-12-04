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

    // $("nav a").on("click", function (e) {
    //     var anchor = $(this);
    //     $('html, body').stop().animate({
    //         scrollTop: $(anchor.attr('href')).offset().top - 50
    //     }, 777);
    //     e.preventDefault();
    //     return false;
    // });

    // header
    $(window).on('scroll load', function () {
        if ($(this).scrollTop() > 10) {
            $('.header').addClass('scroll');
        } else {
            $('.header').removeClass('scroll');
        }
    });

    $("nav a").on("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 777);
        e.preventDefault();
    });

    // Scroll spy
    let sections = $("nav a").map(function () {
        return $($(this).attr("href"));
    });

    $(window).on("scroll", function () {
        let scrollPos = $(this).scrollTop() + 100; // +100 щоб активність мінялась трошки раніше

        sections.each(function () {
            let top = $(this).offset().top;
            let bottom = top + $(this).outerHeight();

            if (scrollPos >= top && scrollPos < bottom) {
                let id = "#" + $(this).attr("id");
                $("nav a").removeClass("active");
                $('nav a[href="' + id + '"]').addClass("active");
            }
        });
    });

    // burger
    // menu burger
    if ($('.burger2').length) {
        (function () {
            var burger2;
            burger2 = document.querySelector(".burger2");
            burger2.addEventListener("click", function () {
                return burger2.classList.toggle("on");
            });

        }).call(this);
    }

    // $('.burger').click(function () {
    //     $('body').toggleClass('hidden');
    //     $('.header__colmenu').toggleClass('show');
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'smooth'
    //     });
    // })


})