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
    if ($('.totop').length) {
        document.querySelector('.totop').addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // header
    $(window).on('scroll load', function () {
        if ($(this).scrollTop() > 10) {
            $('.header').addClass('scroll');
        } else {
            $('.header').removeClass('scroll');
        }
    });

    $(".header__main nav a").on("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 777);
        e.preventDefault();


        $('.burger2').removeClass('on');
        $('body').removeClass('openedmenu');
        $('.mobmenu ').removeClass('show');
    });

    $(".scrolllink").on("click", function (e) {
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

    if ($('.header__main').length) {
        $(window).on("scroll", function () {
            let scrollPos = $(this).scrollTop() + 100;

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
    }
    // burger
    if ($('.burger2').length) {
        (function () {
            var burger2;
            burger2 = document.querySelector(".burger2");
            burger2.addEventListener("click", function () {
                return burger2.classList.toggle("on");
            });

        }).call(this);
    }

    $('.burger').click(function () {
        $('body').toggleClass('openedmenu');
        $('.mobmenu').toggleClass('show');

    })


   $(function () {
    $(".accordeon").each(function () {
        const acc = $(this);

        // Відкрити перший елемент
        const firstItem = acc.find(".accordeon__row").first();
        firstItem.addClass("active");
        firstItem.find(".accordeon__body").slideDown(0);

        acc.find(".accordeon__header").click(function () {
            const item = $(this).parent();

            // Якщо клік по активному — toggle (закриваємо)
            if (item.hasClass("active")) {
                item.removeClass("active")
                    .find(".accordeon__body")
                    .slideUp();
            } else {
                // Закриваємо всі інші
                acc.find(".accordeon__row.active")
                    .removeClass("active")
                    .find(".accordeon__body")
                    .slideUp();

                // Відкриваємо клікнутий
                item.addClass("active")
                    .find(".accordeon__body")
                    .slideDown();
            }
        });
    });
});



})