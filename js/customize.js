// 自行加入的JS請寫在這裡
$(function() {
    var emergency_status = $('.emergency').length;
    if (emergency_status > 0) {
        $('.emergency').show();
        $('body').addClass('noscroll');
        $('.emergency').find('a.close').off().click(function(event) {
            $('.emergency').fadeOut();
            $('body').removeClass('noscroll');
        });
    }
    // choose_location
    $('.choose_location a').each(function(index, el) {
        $(this).removeClass('btn-blue');
        $(this).click(function(event) {
            $(this).siblings().removeClass('active').removeClass('btn-green').removeClass('btn-blue');
            $(this).removeClass('active').removeClass('btn-blue').addClass('active').addClass('btn-green');
        });
    });
    // check_grp
    $('.choose_room .check_grp').find('label').each(function(index, el) {
        $(this).change(function(event) {
            $(this).toggleClass('active');
        });
    });
    $('body>.check_grp').find('label').each(function(index, el) {
        $(this).change(function(event) {
            $(this).toggleClass('active');
        });
    });
    if ($('.fixed_bar').length > 0) {
        $('footer').addClass('padding-bottom');
        $('.scrollToTop').addClass('padding-bottom');
    }
    // lazyload  
    //可以指定你想要的元素做lazyload
    $('img').lazyload({ effect: "fadeIn" });
    //燈箱slick+lightBox組合
    $('.cp_slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        pauseOnFocus: true,
        focusOnSelect: true,
        accessibility: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 545,
            settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }]
    });
    $('.cp_slider').slickLightbox({
        caption: 'caption',
        useHistoryApi: 'true',
        lazy: true
    });
    // cp_photo
    $('.Slider-for').on('init reInit afterChange', function(event, slick, currentSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('.controls').html(i + '/' + slick.slideCount);
    });
    var sliderImgCount = $('.Slider-for').find("img").length;
    if (sliderImgCount < 3) {
        $('.Slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            autoplay: true,
            speed: 300,
            autoplaySpeed: 3000,
            swipe: false,
            swipeToSlide: false,
            lazyLoad: 'ondemand',
            infinite: true
        });
        $('.Slider-nav').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            asNavFor: '.Slider-for',
            dots: true,
            arrows: true,
            lazyLoad: 'ondemand',
            focusOnSelect: true,
            infinite: false
        });
    } else {
        $('.Slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            autoplay: true,
            speed: 300,
            autoplaySpeed: 3000,
            swipe: false,
            swipeToSlide: false,
            lazyLoad: 'ondemand',
            asNavFor: '.Slider-nav',
            infinite: true
        });
        $('.Slider-nav').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            asNavFor: '.Slider-for',
            dots: true,
            arrows: true,
            lazyLoad: 'ondemand',
            focusOnSelect: true,
            infinite: true
        });
    }
    //mp_slider
    $('.mp_slider .container').slick({
        dots: true,
        arrow: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        fade: true,
        cssEase: 'ease'
    });
    // ad首頁廣告輪播
    $('.link_banner .container').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        arrow: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: false,
                arrows: true
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                arrows: true
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: true
            }
        }]
    });
    // 台北院區交通
    var _taipei = $('.taipei');
    _taipei.find('.map').append('<div class="power"></div><div class="h_1"></div><div class="h_1_path"></div><div class="h_3"></div><div class="h_3_path"></div><div class="mrt"></div><div class="man"></div><div class="man_path"></div>');
    _taipei.find('.h_1').hide();
    _taipei.find('.h_1_path').hide();
    _taipei.find('.h_3').hide();
    _taipei.find('.h_3_path').hide();
    _taipei.find('.map .mrt').hide();
    _taipei.find('.map .man').hide();
    _taipei.find('.map .man_path').hide();
    _taipei.find('.drive .highway_1').hover(function() {
        $(this).addClass('focus');
        $('.h_1').stop().show();
        $('.h_1_path').stop().delay(5000).fadeIn();
    }, function() {
        $(this).removeClass('focus');
        $('.h_1').stop().hide();
        $('.h_1_path').stop().hide();
    });
    _taipei.find('.drive .highway_3').hover(function() {
        $(this).addClass('focus');
        $('.h_3').stop().show();
        $('.h_3_path').stop().delay(5000).fadeIn();
    }, function() {
        $(this).removeClass('focus');
        $('.h_3').stop().hide();
        $('.h_3_path').stop().hide();
    });
    _taipei.find('.mass_transit .mrt').hover(function() {
        $(this).addClass('focus');
        $('.map .mrt').stop().show();
        $('.map .man').stop().delay(3000).fadeIn();
        $('.map .man_path').stop().delay(7000).fadeIn();
    }, function() {
        $(this).removeClass('focus');
        $('.map .mrt').stop().hide();
        $('.map .man').stop().hide();
        $('.map .man_path').stop().hide();
    });
    var _busStop = $('.bus'),
        _stopInfo = $('.stop_info');
    _stopInfo.hide();
    _stopInfo.css('bottom', '-100%');
    _busStop.find('ul li').each(function(index, el) {
        $(this).find('a').off().click(function(e) {
            e.preventDefault();
        });
        $(this).mouseenter(function(event) {
            _stopindex = $(this).index();
            $('.map').find('ul li').eq(_stopindex).addClass('focus');
            // console.log(_stopindex);
            _stopInfo.find('div').stop(true, true).hide();
            _stopInfo.find('div').eq(_stopindex).show();
            _stopInfo.stop().show().animate({ 'bottom': 0 }, 400, 'easeOutQuint');
        });
        $(this).mouseout(function(event) {
            $('.map').find('ul li').removeClass('focus');
            _stopInfo.find('div').stop(true, true).hide();
            _stopInfo.stop().css('bottom', '-100%').hide();;
        });
    });
    $('.cp').find('.accordion').find('.accordion-content').hide();
    $('.cp').find('.accordion').each(function(index, el) {
        $(this).find('h3 a').off().click(function(e) {
            $(this).parent().siblings('.accordion-content').stop(true, false).slideToggle();
            e.preventDefault();
        });
    });
    // tablearrow arrow
    $('.scroltable-nav-left').append('<div class="tablearrow_left" style="display:none;"></div>');
    $('.scroltable-nav-right').append('<div class="tablearrow_right"  style="display:none;"></div>');
    // 固定版頭
    function arrow_function() {
        if (('.result').length > 0 && $('.scroltable-wrapper').length > 0) {
            var stickyArrowTop = Math.floor($('.scroltable-wrapper').offset().top),
                thisScroll = Math.floor($(this).scrollTop());
            // tablecroll = Math.floor($('.scroltable-wrapper').scrollTop());
            // tableHeight = Math.floor($('.scroltable-wrapper').height());
            // console.log("箭頭離上面距離：" + "＿＿＿＿___" + stickyArrowTop);
            // console.log("網頁scroll" + "＿＿＿＿___" + $(this).scrollTop());
            // console.log("網頁" + thisScroll);
            // console.log("箭頭" + stickyArrowTop);
            // console.log(thisScroll - stickyArrowTop);
            // console.log("_________________________________");
            if (thisScroll > stickyArrowTop - 230) {
                $('.result .tablearrow_left').css('display', 'block');
                $('.result .tablearrow_left').css({ "top": thisScroll - stickyArrowTop + 220 }, 100, 'easeOutQuint');
                $('.result .tablearrow_right').css('display', 'block');
                $('.result .tablearrow_right').css({ "top": thisScroll - stickyArrowTop + 220 }, 100, 'easeOutQuint');
            } else {
                $('.result .tablearrow_left').css({
                    top: '10px',
                    display: 'none'
                });
                $('.result .tablearrow_right').css({
                    top: '10px',
                    display: 'none'
                });
            }
        }
    }
    $(window).scroll(function(event) {
        arrow_function();
    });
    // 南投院區交通
    var _nantuo = $('.nantuo');
    _nantuo.find('.map').append('<div class="n_h_1"></div><div class="n_h_1_path"></div><div class="n_h_2"></div><div class="n_h_2_path"></div>')
    _nantuo.find('.n_h_1').hide();
    _nantuo.find('.n_h_1_path').hide();
    _nantuo.find('.n_h_2').hide();
    _nantuo.find('.n_h_2_path').hide();
    _nantuo.find('.drive .highway_1').hover(function() {
        $(this).addClass('focus');
        $('.n_h_1').stop().show();
        $('.n_h_1_path').stop().delay(10000).fadeIn();
    }, function() {
        $(this).removeClass('focus');
        $('.n_h_1').stop().hide();
        $('.n_h_1_path').stop().hide();
    });
    _nantuo.find('.drive .highway_3').hover(function() {
        $(this).addClass('focus');
        $('.n_h_2').stop().show();
        $('.n_h_2_path').stop().delay(6000).fadeIn();
    }, function() {
        $(this).removeClass('focus');
        $('.n_h_2').stop().hide();
        $('.n_h_2_path').stop().hide();
    });
    //設定resize 計時器
    var resizeTimer_a;
    $(window).bind("scroll", function(e) {
        clearTimeout(resizeTimer_a);
        resizeTimer_a = setTimeout(function() {
            arrow_function();
        }, 50);
    });
    // arrow_function();
    // 條件查詢
    // 進階查詢
    $('.advance_block').hide();
    $('.advance_search button').off().click(function(e) {
        $('.advance_block').stop(true, true).slideToggle();
    });
    // 南投
    var _window = $('.window');
    _window.hide();
    _N_Building = $('.floor_bg_nantuo');
    _T_Building = $('.floor_bg_taipei');
    // _T_Building.append('<span class="title_01">教學棟</span><span class="title_02">住宿棟</span><span class="title_03">集會棟</span>');
    if ($('body').find('.floor_block_taipei').length > 0 || $('body').find('.floor_block_nantuo').length > 0) {
        $('body').append('<div class="overlay"></div>');
    }
    var _overlay = $('.overlay');
    // 南投選單
    $('.menu_nantuo').find('ul li').each(function(index, el) {
        $(this).children('a').click(function(e) {
            $(this).parents('ul').find('a').removeClass('active');
            $(this).addClass('active');
            var floor_index = $(this).parent().index();
            $(this).parents('ul').find('a').removeAttr('tabindex');
            $(this).parent().next().find('a').attr('tabindex', 0);
            $('.menu_nantuo>h3').addClass('white');
            _window.hide();
            $(this).parents('.menu_nantuo').siblings(_window).eq(floor_index + 1).stop(true, true).fadeIn().find('a.close').focus();
            _N_Building.addClass('zoomin');
            _overlay.fadeIn();
            e.preventDefault();
        });
    });
    // 台北教學棟
    $('.menu_teaching').find('ul li').each(function(index, el) {
        $(this).children('a').click(function(e) {
            $(this).parents('ul').find('a').removeClass('active');
            $(this).addClass('active');
            var floor_index = $(this).parent().index();
            $(this).parents('ul').parent().siblings().find('a').removeAttr('tabindex');
            $(this).parent().next().find('a').attr('tabindex', 0);
            _window.hide();
            $('.menu_teaching').find('a').blur();
            $('.menu_resort').find('a').blur();
            $('.menu_meeting').find('a').blur();
            $(this).parents('.menu_teaching').siblings('.teaching_window').find(_window).eq(floor_index).stop(true, true).fadeIn().find('a.close').focus();
            _T_Building.addClass('zoomin_left');
            _overlay.fadeIn();
            e.preventDefault();
        });
    });
    // 台北住宿棟
    $('.menu_resort').find('ul li').each(function(index, el) {
        $(this).children('a').click(function(e) {
            $(this).parents('ul').find('a').removeClass('active');
            $(this).addClass('active');
            var floor_index = $(this).parent().index();
            $(this).parents('ul').parent().siblings().find('a').removeAttr('tabindex');
            $(this).parent().next().find('a').attr('tabindex', 0);
            _window.hide();
            $('.menu_teaching').find('a').blur();
            $('.menu_resort').find('a').blur();
            $('.menu_meeting').find('a').blur();
            $(this).parents('.menu_resort').siblings('.resort_window').find(_window).eq(floor_index).stop(true, true).fadeIn().addClass('left').find('a.close').focus();
            _T_Building.addClass('zoomin_right');
            _overlay.fadeIn();
            e.preventDefault();
        });
    });
    // 台北集會棟
    $('.menu_meeting').find('ul li').each(function(index, el) {
        $(this).children('a').click(function(e) {
            $(this).parents('ul').find('a').removeClass('active');
            $(this).addClass('active');
            var floor_index = $(this).parent().index();
            $(this).parents('ul').parent().siblings().find('a').removeAttr('tabindex');
            $(this).parent().next().find('a').attr('tabindex', 0);
            _window.hide();
            $('.menu_teaching').find('a').blur();
            $('.menu_resort').find('a').blur();
            $('.menu_meeting').find('a').blur();
            $(this).parents('.menu_meeting').siblings('.meeting_window').find(_window).eq(floor_index).stop(true, true).fadeIn().addClass('left').find('a.close').focus();
            _T_Building.addClass('zoomin_right');
            _overlay.fadeIn();
            e.preventDefault();
        });
    });
    // 關閉按鈕
    function CLOSE_W() {
        _window.hide();
        _window.removeClass('left');
        _N_Building.removeClass('zoomin');
        _T_Building.removeClass('zoomin').removeClass('zoomin_right').removeClass('zoomin_left');
        $('.menu_nantuo ul li a').removeClass('active');
        $('.menu_teaching ul li a').removeClass('active');
        $('.menu_nantuo>h3').removeClass('white');
        $('.menu_nantuo ul').find('a[tabindex=0]').focus();
        $('.menu_teaching ul').find('a[tabindex=0]').focus();
        $('.menu_resort ul').find('a[tabindex=0]').focus();
        $('.menu_meeting ul').find('a[tabindex=0]').focus();
        $('.overlay').hide();
    }
    _window.find('a.close').click(function(e) {
        CLOSE_W();
        e.preventDefault();
    });
    $(document).on('keydown', function(e) {
        if (e.keyCode == 27) {
            CLOSE_W();
        }
    });
    $(document).on('click', '.overlay', function(e) {
        CLOSE_W();
        e.preventDefault();
    });
    // 最後一個a 無障礙設定
    _window.find('a:last').focusout(function(event) {
        _window.hide();
        _N_Building.removeClass('zoomin');
        $('.menu_nantuo ul li a').removeClass('active');
        $('.menu_nantuo>h3').removeClass('white');
        $('.menu_nantuo ul').find('a[tabindex=0]').focus();
        $('.overlay').hide();
    });
    $('.teaching_window').find(_window).find('a:last').focusout(function(event) {
        CLOSE_W();
        _N_Building.removeClass('zoomin');
        $('.menu_teaching ul li a').removeClass('active');
        $('.menu_teaching ul').find('a[tabindex=0]').focus();
    });
    $('.teaching_window .window').last().find('a:last').focusout(function(event) {
        $('.menu_resort ul').find('a:first').focus();
    });
    $('.resort_window').find(_window).find('a:last').focusout(function(event) {
        CLOSE_W();
        _N_Building.removeClass('zoomin');
        $('.menu_resort ul li a').removeClass('active');
        $('.menu_resort ul').find('a[tabindex=0]').focus();
    });
    $('.resort_window .window').last().find('a:last').focusout(function(event) {
        $('.menu_meeting ul').find('a:first').focus();
    });
    $('.meeting_window').find(_window).find('a:last').focusout(function(event) {
        CLOSE_W();
        _N_Building.removeClass('zoomin');
        $('.menu_meeting ul li a').removeClass('active');
        $('.menu_meeting ul').find('a[tabindex=0]').focus();
    });
});