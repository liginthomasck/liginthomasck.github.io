$(window).on('load', function() {
    gsap.to('#loader', 1, { y: "-100%" });
    gsap.to('#loader', 1, { opacity: 0 });
    gsap.to('#loader', 0, { display: "none", delay: 1 });
    gsap.to('#header', 0, { display: "block", delay: 1 })
    gsap.to('#navigation-content', 0, { display: "none" });
    gsap.to('#navigation-content', 0, { display: "flex", delay: 1 });
})
$(function() {
    $('.color-panel').on("click", function(e) {
        e.preventDefault();
        $('.color-changer').toggleClass('color-changer-active');
    });
    $('.colors a').on("click", function(e) {
        e.preventDefault();
        var attr = $(this).attr("title");
        console.log(attr);
        $('head').append('<link rel="stylesheet" href="css/' + attr + '.css">');
    });
});
$(function() {
    $('.menubar').on('click', function() {
        gsap.to('#navigation-content', .6, { y: 0 });
    })
    $('.navigation-close').on('click', function() {
        gsap.to('#navigation-content', .6, { y: "-100%" });
    });
});

$(function() {
    var TxtRotate = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtRotate.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 100;
        }

        setTimeout(function() {
            that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('txt-rotate');
        for (var i = 0; i < elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-rotate');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtRotate(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".txt-rotate > .wrap { border-right: 0em solid #666 ; }";
        document.body.appendChild(css);
    };
})
$(function() {

    $('#about-link').on('click', function() {
        gsap.to('#navigation-content', 0, { display: "none", delay: .7 });
        gsap.to('#navigation-content', 0, { y: '-100%', delay: .7 });
        gsap.to('#header', 0, { display: "none" });
        gsap.to('#blog', 0, { display: "none" });
        gsap.to('#portfolio', 0, { display: "none" });
        gsap.to('#breaker', 0, { display: "block" });
        gsap.to('#breaker-two', 0, { display: "block", delay: .1 });
        gsap.to('#contact', 0, { display: "none" });
        gsap.to('#breaker', 0, { display: "none", delay: 2 });
        gsap.to('#breaker-two', 0, { display: "none", delay: 2 });
        gsap.to('#about', 0, { display: "block", delay: .7 });
        gsap.to('#navigation-content', 0, { display: 'flex', delay: 2 });
    })
    $('#contact-link').on('click', function() {
        gsap.to('#navigation-content', 0, { display: "none", delay: .7 });
        gsap.to('#navigation-content', 0, { y: '-100%', delay: .7 });
        gsap.to('#header', 0, { display: "none" });
        gsap.to('#about', 0, { display: "none" });
        gsap.to('#blog', 0, { display: "none" });
        gsap.to('#portfolio', 0, { display: "none" });
        gsap.to('#breaker', 0, { display: "block" });
        gsap.to('#breaker-two', 0, { display: "block", delay: .1 });
        gsap.to('#breaker', 0, { display: "none", delay: 2 });
        gsap.to('#breaker-two', 0, { display: "none", delay: 2 });
        gsap.to('#contact', 0, { display: "block", delay: .7 });
        gsap.to('#navigation-content', 0, { display: 'flex', delay: 2 });
    })
    $('#portfolio-link').on('click', function() {
        gsap.to('#navigation-content', 0, { display: "none", delay: .7 });
        gsap.to('#navigation-content', 0, { y: '-100%', delay: .7 });
        gsap.to('#header', 0, { display: "none" });
        gsap.to('#about', 0, { display: "none" });
        gsap.to('#contact', 0, { display: "none" });
        gsap.to('#blog', 0, { display: "none" });
        gsap.to('#breaker', 0, { display: "block" });
        gsap.to('#breaker-two', 0, { display: "block", delay: .1 });
        gsap.to('#breaker', 0, { display: "none", delay: 2 });
        gsap.to('#breaker-two', 0, { display: "none", delay: 2 });
        gsap.to('#portfolio', 0, { display: "block", delay: .7 });
        gsap.to('#navigation-content', 0, { display: 'flex', delay: 2 });
    })
    $('#blog-link').on('click', function() {
        gsap.to('#navigation-content', 0, { display: "none", delay: .7 });
        gsap.to('#navigation-content', 0, { y: '-100%', delay: .7 });
        gsap.to('#header', 0, { display: "none" });
        gsap.to('#about', 0, { display: "none" });
        gsap.to('#portfolio', 0, { display: "none" });
        gsap.to('#contact', 0, { display: "none" });
        gsap.to('#breaker', 0, { display: "block" });
        gsap.to('#breaker-two', 0, { display: "block", delay: .1 });
        gsap.to('#breaker', 0, { display: "none", delay: 2 });
        gsap.to('#breaker-two', 0, { display: "none", delay: 2 });
        gsap.to('#blog', 0, { display: "block", delay: .7 });
        gsap.to('#navigation-content', 0, { display: 'flex', delay: 2 });
    })
    $('#home-link').on('click', function() {
        gsap.to('#navigation-content', 0, { display: "none", delay: .7 });
        gsap.to('#navigation-content', 0, { y: '-100%', delay: .7 });
        gsap.to('#header', 0, { display: "none" });
        gsap.to('#about', 0, { display: "none" });
        gsap.to('#portfolio', 0, { display: "none" });
        gsap.to('#contact', 0, { display: "none" });
        gsap.to('#blog', 0, { display: "none" });
        gsap.to('#breaker', 0, { display: "block" });
        gsap.to('#breaker-two', 0, { display: "block", delay: .1 });
        gsap.to('#breaker', 0, { display: "none", delay: 2 });
        gsap.to('#breaker-two', 0, { display: "none", delay: 2 });
        gsap.to('#header', 0, { display: "block", delay: .7 });
        gsap.to('#navigation-content', 0, { display: 'flex', delay: 2 });
    })

})
$(function() {
    var body = document.querySelector('body');
    var $cursor = $('.cursor')

    function cursormover(e) {

        gsap.to($cursor, {
            x: e.clientX,
            y: e.clientY,
            stagger: .002
        })
    }

    function cursorhover(e) {
        gsap.to($cursor, {
            scale: 1.4,
            opacity: 1
        })

    }

    function cursor(e) {
        gsap.to($cursor, {
            scale: 1,
            opacity: .6
        })
    }
    $(window).on('mousemove', cursormover);
    $('.menubar').hover(cursorhover, cursor);
    $('a').hover(cursorhover, cursor);
    $('.navigation-close').hover(cursorhover, cursor);

})

// card-slider
$(function() {

    $('.slider--prev, .slider--next').click(function() {

        var $this = $(this),
            curLeft = $('.slider').find('.slider--item-left'),
            curLeftPos = $('.slider').children().index(curLeft),
            curCenter = $('.slider').find('.slider--item-center'),
            curCenterPos = $('.slider').children().index(curCenter),
            curRight = $('.slider').find('.slider--item-right'),
            curRightPos = $('.slider').children().index(curRight),
            totalWorks = $('.slider').children().length,
            $left = $('.slider--item-left'),
            $center = $('.slider--item-center'),
            $right = $('.slider--item-right'),
            $item = $('.slider--item');

        $('.slider').animate({ opacity: 0 }, 400);

        setTimeout(function() {

            if ($this.hasClass('slider--next')) {
                if (curLeftPos < totalWorks - 1 && curCenterPos < totalWorks - 1 && curRightPos < totalWorks - 1) {
                    $left.removeClass('slider--item-left').next().addClass('slider--item-left');
                    $center.removeClass('slider--item-center').next().addClass('slider--item-center');
                    $right.removeClass('slider--item-right').next().addClass('slider--item-right');
                } else {
                    if (curLeftPos === totalWorks - 1) {
                        $item.removeClass('slider--item-left').first().addClass('slider--item-left');
                        $center.removeClass('slider--item-center').next().addClass('slider--item-center');
                        $right.removeClass('slider--item-right').next().addClass('slider--item-right');
                    } else if (curCenterPos === totalWorks - 1) {
                        $left.removeClass('slider--item-left').next().addClass('slider--item-left');
                        $item.removeClass('slider--item-center').first().addClass('slider--item-center');
                        $right.removeClass('slider--item-right').next().addClass('slider--item-right');
                    } else {
                        $left.removeClass('slider--item-left').next().addClass('slider--item-left');
                        $center.removeClass('slider--item-center').next().addClass('slider--item-center');
                        $item.removeClass('slider--item-right').first().addClass('slider--item-right');
                    }
                }
            } else {
                if (curLeftPos !== 0 && curCenterPos !== 0 && curRightPos !== 0) {
                    $left.removeClass('slider--item-left').prev().addClass('slider--item-left');
                    $center.removeClass('slider--item-center').prev().addClass('slider--item-center');
                    $right.removeClass('slider--item-right').prev().addClass('slider--item-right');
                } else {
                    if (curLeftPos === 0) {
                        $item.removeClass('slider--item-left').last().addClass('slider--item-left');
                        $center.removeClass('slider--item-center').prev().addClass('slider--item-center');
                        $right.removeClass('slider--item-right').prev().addClass('slider--item-right');
                    } else if (curCenterPos === 0) {
                        $left.removeClass('slider--item-left').prev().addClass('slider--item-left');
                        $item.removeClass('slider--item-center').last().addClass('slider--item-center');
                        $right.removeClass('slider--item-right').prev().addClass('slider--item-right');
                    } else {
                        $left.removeClass('slider--item-left').prev().addClass('slider--item-left');
                        $center.removeClass('slider--item-center').prev().addClass('slider--item-center');
                        $item.removeClass('slider--item-right').last().addClass('slider--item-right');
                    }
                }
            }

        }, 400);

        $('.slider').animate({ opacity: 1 }, 400);

    });

})
