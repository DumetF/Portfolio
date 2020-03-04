
$(document).ready(function(){

    // WATERPIPE HEADER BACKGROUND

    var smokyBG = $('header').waterpipe({
        //Default values
        gradientStart: '#ff4365',
        gradientEnd: '#ff4365',
        smokeOpacity: 0.03,
        numCircles: 1,
        maxMaxRad: 'auto',
        minMaxRad: 'auto',
        minRadFactor: 10,
        iterations: 5,
        drawsPerFrame: 5,
        lineWidth: 1,
        speed: 80,
        bgColorInner: "#252934",
        bgColorOuter: "#252934",
    });


    // _________________________END_______________________________




    // TYPEWRITER

    var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 10;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 2);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 150;

        if (this.isDeleting) { 
            delta /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        }
        else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function() {
            that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 2px solid #ededed}";
        document.body.appendChild(css);
    };

    // _________________________END_______________________________



// JQUERY PERSO
    
    // AFFICHAGE SCROLL NAVBAR

    $(window).bind('scroll', function() {

        var navHeight = $( window ).height() + 0;

         if ($(window).scrollTop() > navHeight) {
             $('.navbar').addClass('fixed');
         }
         else {
             $('.navbar').removeClass('fixed');
         }
    });
    //________END________


    // SCROLLTOP POSITION

    $(window).scroll(function() {
        var y=$(window).scrollTop();
        console.log(y);
    });
    //________END________


    // NAVBAR CHANGE COLOR

    $(window).scroll(function(){

        var scroll = $(window).scrollTop();

        if (scroll < 2035) {
            $(".navbar").css({
                backgroundColor: '#252934',
                borderBottom: ' 5px solid #ededed'
            });
        } else if (scroll >= 2035 & scroll <2620) {
            $('.navbar').css({
                backgroundColor: '#252f47',
                borderBottom: ' 5px solid #191919'
            });
        } else if (scroll <= 2620) {
            $(".navbar").css({
                backgroundColor: '#252934',
                borderBottom: ' 5px solid #191919',
            });
        } else if (scroll < 4450) {
            $('.navbar').css({
                backgroundColor: '#252934',
                borderBottom: ' 5px solid #ff4365'
            });
        };

    });
    //________END________


    // NAVBAR BORDER BOTTOM SCROLL

    $(window).scroll(function(){

        var scroll = $(window).scrollTop();
        if (scroll <= 500) {
            $('.home_link').css({
                color:'#ff4365'
            });
            $('.about_link, .projects_link, .contact_link').css({
                color: '#ededed'
            });

        }
        else if (scroll > 600 & scroll <= 2620) {
            $('.about_link').css({
                color: '#ff4365'
            });
            $(".home_link, .projects_link, .contact_link").css({
                color: '#ededed'
            });
        }
        else if (scroll > 2620 & scroll <= 3570) {
            $('.projects_link').css({
                color: '#ff4365'
            });
            $(".home_link, .about_link, .contact_link").css({
                color: '#ededed'
            });
        }
        else if (scroll > 3570) {
            $('.contact_link').css({
                color: '#ff4365'
            });
            $('.home_link, .about_link, .projects_link').css({
                color: '#ededed'
            });

        };
    });
    //________END________



    // FLIP IMAGES PROJECTS


    $(".project_element_parent").hover(function(){
         // if mouse hover then add .flipping class
        $(this).toggleClass("flipping");
    });
    //________END________



    // ANIM BOUTON ENVOYER HOVER
    $('#btn').mouseenter(function() {
        $('#btn').addClass('#btn:hover');
        $('#btn:hover').css({
            backgroundPosition: 'left bottom',
            transition: 'all 0.65s ease-out'
        });
    });

    $('#btn').mouseleave(function() {
        $('#btn').css({
            backgroundPosition: 'right bottom',
            transition: 'all 0.65s ease-out'
        });
    });
    //________END________


    // ELEMENT ANIMATION ON SCROLL

    AOS.init({
      duration: 500
    });
    //________END________
});