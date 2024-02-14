const swiperOne = new Swiper(".participants__content", {
 slidesPerView: 1,
 loop: true,
 grid: {
   rows: 1,
   fill: "row",
 },
 spaceBetween: 20,
 breakpoints: {
   810: {
     slidesPerView: 2,
     spaceBetween: 60,
   },

   1020: {
     slidesPerView: 2,
     spaceBetween: 45,
   },

   1240: {
     slidesPerView: 3,
     spaceBetween: 90,
   },
 },
 autoplay: {
    delay: 4000,
    disableOnInteraction: false,
 },
 // навигация
 navigation: {
   nextEl: ".participants__swiper-button-next",
   prevEl: ".participants__swiper-button-prev",
 },

 pagination: {
   el: ".participants__swiper-pagination",
   type: "fraction",
 },

 a11y: {
   prevSlideMessage: "Предыдущий слайд",
   nextSlideMessage: "Следующий слайд",
 },
});

const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
  let swiper;

  breakpoint = window.matchMedia(breakpoint);

  const enableSwiper = function(className, settings) {
    swiper = new Swiper(className, settings);

    if (callback) {
      callback(swiper);
    }
  }

  const checker = function() {
    if (breakpoint.matches) {
      return enableSwiper(swiperClass, swiperSettings);
    } else {
      if (swiper !== undefined) swiper.destroy(true, true);
      return;
    }
  };

  breakpoint.addEventListener('change', checker);
  checker();
}

const someFunc = (instance) => {
  if (instance) {
    instance.on('slideChange', function (e) {
      console.log('*** mySwiper.activeIndex', instance.activeIndex);
    });
  }
};

/*resizableSwiper(
  '(max-width: 1280px)',
  '.slider-1',
  {
    loop: true,
    spaceBetween: 32,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  },
  someFunc
);*/

resizableSwiper('(max-width: 1200px)', '.stages__content', {
    loop: false,
    spaceBetween: 10,
    slidesPerView: 1,
    loop: true,
    freeMode: true,
    breakpoints: {
      776: {
        spaceBetween: 10,
        slidesPerView: 2,
      },
      800: {
        spaceBetween: 30,
        slidesPerView: 2,
      },
      1081: {
        spaceBetween: 10,
        slidesPerView: 3,
      }
    },
    pagination: {
      el: '.stages__swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: ".stages__swiper-button-next",
      prevEl: ".stages__swiper-button-prev",
    },
  }
);

document.querySelectorAll(".js-scroll-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const href = this.getAttribute("href").substring(1);
    const scrollTarget = document.getElementById(href);
    const elementPosition = scrollTarget.getBoundingClientRect().top;

    window.scrollBy({
      top: elementPosition,
      behavior: "smooth",
    });
  });
});