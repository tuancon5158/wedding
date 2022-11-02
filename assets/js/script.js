(function ($) {
  'use strict';

  /*------------------------------------------
        Nice Select
    -------------------------------------------*/

  $('.select').niceSelect();

  /*------------------------------------------
        = ALL ESSENTIAL FUNCTIONS
    -------------------------------------------*/

  // Toggle mobile navigation
  function toggleMobileNavigation() {
    var navbar = $('.navigation-holder');
    var openBtn = $('.mobail-menu .open-btn');
    var xbutton = $('.mobail-menu .navbar-toggler');

    openBtn.on('click', function (e) {
      e.stopImmediatePropagation();
      navbar.toggleClass('slideInn');
      xbutton.toggleClass('x-close');
      return false;
    });
  }

  toggleMobileNavigation();

  // Function for toggle class for small menu
  function toggleClassForSmallNav() {
    var windowWidth = window.innerWidth;
    var mainNav = $('#navbar > ul');

    if (windowWidth <= 991) {
      mainNav.addClass('small-nav');
    } else {
      mainNav.removeClass('small-nav');
    }
  }

  toggleClassForSmallNav();

  // Function for small menu
  function smallNavFunctionality() {
    var windowWidth = window.innerWidth;
    var mainNav = $('.navigation-holder');
    var smallNav = $('.navigation-holder > .small-nav');
    var subMenu = smallNav.find('.sub-menu');
    var megamenu = smallNav.find('.mega-menu');
    var menuItemWidthSubMenu = smallNav.find('.menu-item-has-children > a');

    if (windowWidth <= 991) {
      subMenu.hide();
      megamenu.hide();
      menuItemWidthSubMenu.on('click', function (e) {
        var $this = $(this);
        $this.siblings().slideToggle();
        e.preventDefault();
        e.stopImmediatePropagation();
        $this.toggleClass('rotate');
      });
    } else if (windowWidth > 991) {
      mainNav.find('.sub-menu').show();
      mainNav.find('.mega-menu').show();
    }
  }

  smallNavFunctionality();

  $('body').on('click', function () {
    $('.navigation-holder').removeClass('slideInn');
  });
  $('.menu-close').on('click', function () {
    $('.navigation-holder').removeClass('slideInn');
  });
  $('.menu-close').on('click', function () {
    $('.open-btn').removeClass('x-close');
  });

  // toggle1
  $('#toggle1').on('click', function () {
    $('.create-account').slideToggle();
    $('.caupon-wrap.s1').toggleClass('active-border');
  });

  // toggle2
  $('#toggle2').on('click', function () {
    $('#open2').slideToggle();
    $('.caupon-wrap.s2').toggleClass('coupon-2');
  });

  // toggle3
  $('#toggle3').on('click', function () {
    $('#open3').slideToggle();
    $('.caupon-wrap.s2').toggleClass('coupon-2');
  });
  // toggle4
  $('#toggle4').on('click', function () {
    $('#open4').slideToggle();
    $('.caupon-wrap.s3').toggleClass('coupon-2');
  });

  $('.payment-select .addToggle').on('click', function () {
    $('.payment-name').addClass('active');
    $('.payment-option').removeClass('active');
  });

  $('.payment-select .removeToggle').on('click', function () {
    $('.payment-option').addClass('active');
    $('.payment-name').removeClass('active');
  });

  // tooltips
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // HERO SLIDER
  var menu = [];
  jQuery('.swiper-slide').each(function (index) {
    menu.push(jQuery(this).find('.slide-inner').attr('data-text'));
  });
  var interleaveOffset = 0.5;
  var swiperOptions = {
    loop: true,
    speed: 1000,
    parallax: true,
    autoplay: {
      delay: 6500,
      disableOnInteraction: false,
    },
    watchSlidesProgress: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    on: {
      progress: function () {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          var slideProgress = swiper.slides[i].progress;
          var innerOffset = swiper.width * interleaveOffset;
          var innerTranslate = slideProgress * innerOffset;
          swiper.slides[i].querySelector('.slide-inner').style.transform =
            'translate3d(' + innerTranslate + 'px, 0, 0)';
        }
      },

      touchStart: function () {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].style.transition = '';
        }
      },

      setTransition: function (speed) {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].style.transition = speed + 'ms';
          swiper.slides[i].querySelector('.slide-inner').style.transition =
            speed + 'ms';
        }
      },
    },
  };
  var swiper = new Swiper('.swiper-container', swiperOptions);

  // DATA BACKGROUND IMAGE
  var sliderBgSetting = $('.slide-bg-image');
  sliderBgSetting.each(function (indx) {
    if ($(this).attr('data-background')) {
      $(this).css(
        'background-image',
        'url(' + $(this).data('background') + ')'
      );
    }
  });

  /*------------------------------------------
        = HIDE PRELOADER
    -------------------------------------------*/
  function preloader() {
    if ($('.preloader').length) {
      $('.preloader').delay(100).fadeOut(500);
    }
  }

  /*------------------------------------------
        = WOW ANIMATION SETTING
    -------------------------------------------*/
  var wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animated', // default
    offset: 0, // default
    mobile: true, // default
    live: true, // default
  });

  /*------------------------------------------
        = ACTIVE POPUP IMAGE
    -------------------------------------------*/
  if ($('.fancybox').length) {
    $('.fancybox').fancybox({
      openEffect: 'elastic',
      closeEffect: 'elastic',
      wrapCSS: 'project-fancybox-title-style',
    });
  }

  /*------------------------------------------
        = ACTIVE GALLERY POPUP IMAGE
    -------------------------------------------*/
  if ($('.popup-gallery').length) {
    $('.popup-gallery').magnificPopup({
      delegate: 'a',
      type: 'image',

      gallery: {
        enabled: true,
      },

      zoom: {
        enabled: true,

        duration: 300,
        easing: 'ease-in-out',
        opener: function (openerElement) {
          return openerElement.is('img')
            ? openerElement
            : openerElement.find('img');
        },
      },
    });
  }

  /*------------------------------------------
        = FUNCTION FORM SORTING GALLERY
    -------------------------------------------*/
  function sortingGallery() {
    if ($('.sortable-gallery .gallery-filters').length) {
      var $container = $('.gallery-container');
      $container.isotope({
        filter: '*',
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false,
        },
      });

      $('.gallery-filters li a').on('click', function () {
        $('.gallery-filters li .current').removeClass('current');
        $(this).addClass('current');
        var selector = $(this).attr('data-filter');
        $container.isotope({
          filter: selector,
          animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false,
          },
        });
        return false;
      });
    }
  }

  // sortingGallery();

  /*------------------------------------------
        = MASONRY GALLERY SETTING
    -------------------------------------------*/
  // function masonryGridSetting() {
  //   if ($('.masonry-gallery').length) {
  //     var $grid = $('.masonry-gallery').masonry({
  //       itemSelector: '.grid-item',
  //       columnWidth: '.grid-item',
  //       percentPosition: true,
  //     });

  //     $grid.imagesLoaded().progress(function () {
  //       $grid.masonry('layout');
  //     });
  //   }
  // }

  // masonryGridSetting();

  /*------------------------------------------
        = FUNFACT
    -------------------------------------------*/
  if ($('.odometer').length) {
    $('.odometer').appear();
    $(document.body).on('appear', '.odometer', function (e) {
      var odo = $('.odometer');
      odo.each(function () {
        var countNumber = $(this).attr('data-count');
        $(this).html(countNumber);
      });
    });
  }

  /*------------------------------------------
        = STICKY HEADER
    -------------------------------------------*/

  // Function for clone an element for sticky menu
  function cloneNavForSticyMenu($ele, $newElmClass) {
    $ele
      .addClass('original')
      .clone()
      .insertAfter($ele)
      .addClass($newElmClass)
      .removeClass('original');
  }

  // clone home style 1 navigation for sticky menu
  if ($('.wpo-site-header .navigation').length) {
    cloneNavForSticyMenu($('.wpo-site-header .navigation'), 'sticky-header');
  }

  var lastScrollTop = '';

  function stickyMenu($targetMenu, $toggleClass) {
    var st = $(window).scrollTop();
    var mainMenuTop = $('.wpo-site-header .navigation');

    if ($(window).scrollTop() > 1000) {
      if (st > lastScrollTop) {
        // hide sticky menu on scroll down
        $targetMenu.removeClass($toggleClass);
      } else {
        // active sticky menu on scroll up
        $targetMenu.addClass($toggleClass);
      }
    } else {
      $targetMenu.removeClass($toggleClass);
    }

    lastScrollTop = st;
  }

  /*------------------------------------------
        = Testimonial SLIDER
    -------------------------------------------*/
  // if ($('.wpo-testimonials-active').length) {
  //   $('.wpo-testimonials-active').owlCarousel({
  //     autoplay: false,
  //     smartSpeed: 300,
  //     margin: 30,
  //     loop: true,
  //     fade: true,
  //     autoplayHoverPause: true,
  //     dots: true,
  //     nav: false,
  //     items: 1,
  //   });
  // }
  /*------------------------------------------
        = Testimonial SLIDER
    -------------------------------------------*/
  if ($('.wpo-service-slider').length) {
    $('.wpo-service-slider').owlCarousel({
      autoplay: false,
      smartSpeed: 300,
      margin: 20,
      loop: true,
      autoplayHoverPause: true,
      dots: true,
      nav: false,
      responsive: {
        0: {
          items: 1,
          dots: true,
          nav: false,
        },

        500: {
          items: 1,
          dots: true,
          nav: false,
        },

        768: {
          items: 2,
          dots: false,
        },

        1200: {
          items: 3,
        },

        1400: {
          items: 4,
        },
      },
    });
  }

  /*------------------------------------------
    wpo-service-active SLIDER
    -------------------------------------------*/
  if ($('.wpo-service-active').length) {
    $('.wpo-service-active').owlCarousel({
      autoplay: false,
      smartSpeed: 300,
      margin: 30,
      loop: true,
      autoplayHoverPause: true,
      dots: false,
      arrows: false,
      nav: true,
      navText: [
        '<i class="fi flaticon-left-arrow"></i>',
        '<i class="fi flaticon-right-arrow-1"></i>',
      ],
      responsive: {
        0: {
          items: 1,
          dots: true,
          arrows: false,
          nav: false,
        },

        575: {
          items: 1,
        },
        767: {
          items: 2,
        },

        992: {
          items: 2,
        },

        1200: {
          items: 3,
        },
      },
    });
  }

  /*------------------------------------------
        = COUNTDOWN CLOCK
    -------------------------------------------*/
  if ($('#clock').length) {
    $('#clock').countdown(1668323700000, function (event) {
      var $this = $(this).html(
        event.strftime(
          '' +
            '<div class="box"><div><div class="time">%m</div> <span>Month</span> </div></div>' +
            '<div class="box"><div><div class="time">%D</div> <span>Days</span> </div></div>' +
            '<div class="box"><div><div class="time">%H</div> <span>Hours</span> </div></div>' +
            '<div class="box"><div><div class="time">%M</div> <span>Mins</span> </div></div>' +
            '<div class="box"><div><div class="time">%S</div> <span>Secs</span> </div></div>'
        )
      );
    });
  }

  /*------------------------------------------
        = TOUCHSPIN FOR PRODUCT SINGLE PAGE
    -------------------------------------------*/
  if ($("input[name='product-count']").length) {
    $("input[name='product-count']").TouchSpin({
      verticalbuttons: true,
    });
  }

  /*------------------------------------------
        = BACK TO TOP BTN SETTING
    -------------------------------------------*/
  $('body').append(
    "<a href='#' class='back-to-top'><i class='ti-arrow-up'></i></a>"
  );

  function toggleBackToTopBtn() {
    var amountScrolled = 1000;
    if ($(window).scrollTop() > amountScrolled) {
      $('a.back-to-top').fadeIn('slow');
    } else {
      $('a.back-to-top').fadeOut('slow');
    }
  }

  $('.back-to-top').on('click', function () {
    $('html,body').animate(
      {
        scrollTop: 0,
      },
      300
    );
    return false;
  });

  /*------------------------------------------
        = CONTACT FORM SUBMISSION
    -------------------------------------------*/
  if ($('#contact-form-main').length) {
    $('#contact-form-main').validate({
      rules: {
        name: {
          required: true,
          minlength: 2,
        },
        wish: {
          required: true,
          minlength: 2,
        },
      },

      messages: {
        name: 'Hãy nhập tên của bạn',
        wish: 'Nhập cả lời chúc nhé <3',
      },

      submitHandler: function (form) {
        $.ajax({
          type: 'POST',
          url: 'https://script.google.com/macros/s/AKfycbzbx6OX1e0_uDLWLqGWuse_X1G3R6mhcjaftuw1OHzOExDccb0L8CbgBDM3rfPHFUmN/exec',
          data: $(form).serialize(),
          success: function () {
            $('#c-loader').hide();
            $('#c-success').slideDown('slow');
            setTimeout(function () {
              $('#c-success').slideUp('slow');
            }, 3000);
            form.reset();
          },
          error: function () {
            $('#c-loader').hide();
            $('#c-error').slideDown('slow');
            setTimeout(function () {
              $('#c-error').slideUp('slow');
            }, 3000);
          },
        });
        return false;
      },
    });
  }

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  $(window).on('load', function () {
    sortingGallery();
  })

  /*==========================================================================
        WHEN DOCUMENT LOADING
    ==========================================================================*/
  $(window).on('DOMContentLoaded', function () {
    // const ids = [
    //   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    //   22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
    // ];
    // const shuffledIds = shuffle(ids).slice(0, 12);

    // let list = '';
    // shuffledIds.forEach((id) => {
    //   list += `
    //   <div class="grid">
    //     <div class="img-holder">
    //       <img src="assets/images/album/${id}.jpg" alt="" />
    //       <div class="hover-content">
    //         <span>Hà Nội - Jun 2022</span>
    //       </div>
    //     </div>
    //   </div>`;
    // });
    // $('#gallery').append(list)

    $.get(
      'https://script.google.com/macros/s/AKfycbzbx6OX1e0_uDLWLqGWuse_X1G3R6mhcjaftuw1OHzOExDccb0L8CbgBDM3rfPHFUmN/exec?page=1&limit=10',
      (response) => {
        const { data } = response;
        let list = '';
        for (let i = 0; i < data.length; i++) {
          const { name, wish, time } = data[i];
          list += `<div class="wpo-testimonials-item">
        <p>
          ${wish}
        </p>
        <div class="wpo-testimonial-info">
          <div class="wpo-testimonial-info-text">
            <h5>${name}</h5>
            <span>${new Date(time).toLocaleString()}</span>
          </div>
        </div>
      </div>`;
        }
        $('#wishlist').append(list);
        $('.wpo-testimonials-active').owlCarousel({
          autoplay: false,
          smartSpeed: 300,
          margin: 30,
          loop: true,
          fade: true,
          autoplayHoverPause: true,
          dots: true,
          nav: false,
          items: 1,
        });

        // sortingGallery();
      }
    );
    // $('.wpo-testimonials-active').owlCarousel({
    //   autoplay: false,
    //   smartSpeed: 300,
    //   margin: 30,
    //   loop: true,
    //   fade: true,
    //   autoplayHoverPause: true,
    //   dots: true,
    //   nav: false,
    //   items: 1,
    // });

    wow.init();

    preloader();

    toggleMobileNavigation();

    smallNavFunctionality();
  });

  /*==========================================================================
        WHEN WINDOW SCROLL
    ==========================================================================*/
  $(window).on('scroll', function () {
    if ($('.wpo-site-header').length) {
      stickyMenu($('.wpo-site-header .navigation'), 'sticky-on');
    }

    toggleBackToTopBtn();
  });

  /*==========================================================================
        WHEN WINDOW RESIZE
    ==========================================================================*/
  $(window).on('resize', function () {
    toggleClassForSmallNav();
    //smallNavFunctionality();

    clearTimeout($.data(this, 'resizeTimer'));
    $.data(
      this,
      'resizeTimer',
      setTimeout(function () {
        smallNavFunctionality();
      }, 200)
    );
  });
})(window.jQuery);
