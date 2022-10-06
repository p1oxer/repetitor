$(document).ready(function ($) {
    $('.home_offers').slick({
        arrows: false,
        dots: false,
        fade: false,
        infinite: false,
        autoplay: false,
        nextArrow: '.reviews_button_next',
        prevArrow: '.reviews_button_prev',
        autoplaySpeed: 12000,
        speed: 500,
        adaptiveHeight: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 992,
            settings: {
                dots: true,
                slidesToShow: 2
            }
        }, {
            breakpoint: 550,
            settings: {
                dots: true,
                slidesToShow: 1
            }
        }]
    });
    $('.slider_listing').slick({
        arrows: true,
        nextArrow: '<span class="slick-next2"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">    <g>        <path d="M2.07983 1.28003L8.47984 7.68003L2.07983 14.08" stroke="#1A1A1A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />    </g>    <defs>        <clipPath>            <rect width="8.8" height="15.2" fill="white" transform="translate(0.799805)" />        </clipPath>    </defs></svg></span>',
        prevArrow: '<span class="slick-prev2"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M7.92041 14.72L1.52041 8.31997L7.92041 1.91997" stroke="#1A1A1A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" /></g><defs><clipPath><rect width="8.8" height="15.2" fill="white" transform="translate(9.2002 16) rotate(180)" /></clipPath></defs></svg></span>',
        dots: false,
        fade: false,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 12000,
        speed: 500,
        variableWidth: true,
        adaptiveHeight: true,
        slidesToShow: 7,
        slidesToScroll: 1
    });
    $('.popup_slider').slick({
        arrows: true,
        dots: false,
        fade: true,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 12000,
        speed: 500,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $('.reviews_slider').slick({
        arrows: true,
        dots: false,
        fade: false,
        infinite: false,
        autoplay: false,
        nextArrow: '.reviews_button_next',
        prevArrow: '.reviews_button_prev',
        autoplaySpeed: 12000,
        speed: 500,
        adaptiveHeight: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 1
            }
        }, {
            breakpoint: 500,
            settings: {
                slidesToShow: 1
            }
        }]
    });



    $('.show_more_li').click(function (e) {
        $('.master_choice li').show('');
    });


    $('.open_city').click(function (e) {
        e.preventDefault();
        $('.city_popup').addClass('active');
        $('body').addClass('no_scroll');
    });
    $('.close').click(function () {
        $(this).parent().parent().removeClass('active');
        $('body').removeClass('no_scroll');
    });
    $('.open_menu').click(function () {
        $('.mobile_menu').toggleClass('active');
        $('body').addClass('no_scroll');
    });
    $('.mobile_menu_close').click(function () {
        $('.mobile_menu').removeClass('active');
        $('body').removeClass('no_scroll');
    });
    $('.open_search').click(function () {
        $('.header_search').slideToggle('fast');
    });
    $('.open_filter').click(function () {
        $('.filter').addClass('active');
    });



    $('.listing_image a').click(function (e) {
        e.preventDefault();
        $('.popup_thumb').toggleClass('active');
        $('body').addClass('no_scroll');
    });
    $('.close_popup').click(function () {
        $('.popup_thumb').removeClass('active');
        $('.popup').removeClass('active');
        $('body').removeClass('no_scroll');
    });
    $('.close_popup').click(function () {
        $('.popup_thumb').removeClass('active');
        $('body').removeClass('no_scroll');
    });



    $('.filter_value').click(function () {
        $(this).next('.filter_mobile_window').addClass('active');
    });
    $('.back').click(function () {
        $(this).parent().parent().removeClass('active');
    });
    $('.f_head .close').click(function () {
        $(this).parent().parent().removeClass('active');
    });



    $('.js_triger_1').click(function () {
        $(this).parent().find('.filter_box').slideToggle('');
        $('.raion').hide('.raion');
        $('.me').hide('.raion');
    });
    $('.js_triger_2').click(function () {
        $(this).parent().find('.filter_box').slideToggle('');
        $('.service').hide('.raion');
        $('.me').hide('.raion');
    });
    $('.js_triger_3').click(function () {
        $(this).parent().find('.filter_box').slideToggle('');
        $('.raion').hide('.raion');
        $('.service').hide('.raion');
    });

    $(".js_application_mobile_form").click(function () {
        $('html, body').animate({
            scrollTop: $("#application_mobile_form").offset().top - 90
        }, 500);
    });





    if ($('div.hide_list').find('.hide_list_item').length > 4) {
        $('.show_hide_list').click(function () {
            $(this).parent().find('div.hide_list .hide_list_item:nth-child(n+5)').slideToggle('');
            $(this).toggleClass('opnd_g');
            if ($(this).hasClass('opnd_g')) {
                $(this).html('Скрыть');
            } else {
                $(this).html('Смотреть все');
            }
        });
    } else {
        $('.show_hide_list').hide();
    }
});
! function (i) {
    var o, n;
    i(".title_block").on("click", function () {
        o = i(this).parents(".accordion_item"), n = o.find(".info"),
            o.hasClass("active_block") ? (o.removeClass("active_block"),
                n.slideUp()) : (o.addClass("active_block"), n.stop(!0, !0).slideDown(),
                o.siblings(".active_block").removeClass("active_block").children(
                    ".info").stop(!0, !0).slideUp())
    })
}(jQuery);

$(window).on('load resize', function () {
    if ($(window).width() < 640) {
        $('.list-diplom:not(.slick-initialized)').slick({
            arrows: false,
            dots: true,
            fade: false,
            infinite: false,
            autoplay: false,
            nextArrow: '.reviews_button_next',
            prevArrow: '.reviews_button_prev',
            autoplaySpeed: 12000,
            speed: 500,
            adaptiveHeight: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            }, {
                    breakpoint: 760,
                    settings: {
                        slidesToShow: 2
                    }
            }, {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1
                    }
            }]
        });
    } else {
        $(".list-diplom.slick-initialized").slick("unslick");
    }
});

$(window).on('load resize', function () {
    if ($(window).width() < 992) {
        $('.home_offers2:not(.slick-initialized)').slick({
            arrows: false,
            dots: true,
            fade: false,
            infinite: false,
            autoplay: false,
            nextArrow: '.reviews_button_next',
            prevArrow: '.reviews_button_prev',
            autoplaySpeed: 12000,
            speed: 500,
            adaptiveHeight: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 1
                }
            }]
        });
    } else {
        $(".home_offers2.slick-initialized").slick("unslick");
    }
});
