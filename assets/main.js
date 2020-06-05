$(document).ready(function () {
    var $element = $('.element');
    if ($element.length) {
        var options = {
            strings: $element.attr('data-elements').split(','),
            typeSpeed: 100,
            backDelay: 3000,
            backSpeed: 50,
            loop: true,
        };
        var typed = new Typed('.element', options);
    }

    $('#pagepiling').pagepiling({
        menu: null,
        direction: 'vertical',
        verticalCentered: true,
        sectionsColor: [],
        anchors: ['home', 'about', 'resume', 'project', 'contact'],
        scrollingSpeed: 700,
        easing: 'linear',
        loopBottom: true,
        loopTop: true,
        css3: true,
        navigation: {
            textColor: '#000',
            bulletsColor: '#000',
            position: 'right',
            tooltips: ['Trang chủ', 'Giới thiệu', 'Hồ sơ', 'Dự án', "Liên hệ"],
        },
        normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: true,

        //events
        onLeave: function (index, nextIndex, direction) {},
        afterLoad: function (anchorLink, index) {},
        afterRender: function () {},
    });

    $('.menu-icon, .menu').click(function () {
        $('.menu').hasClass('show') ? $('.menu').removeClass('show') : $('.menu').addClass('show');
    });
});
