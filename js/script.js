$(document).ready(()=>{
  var swiper = new Swiper(".mySwiper", {
    slidesPerView:'auto',
    spaceBetween:30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // when window width is >= 640px
      1500: {
        slidesPerView: 4,
        spaceBetween: 30
      }
    }
    
  });


  if(window.matchMedia('(max-width: 375px)').matches){
    $('.reaper').appendTo('.introduction__box')
  }


      //burger


      function toggleMobMenu(){
        if ($('.burger-menu').css('right') == '0px') {
          $('.burger-menu').css({
              'left': '-100%'
          });
      } else {
          $('.burger-menu').css({
              'left': '0'
          });
      }
      }
    
      $('.burger-btn').on('click', toggleMobMenu)

      $('.burger-menu__close-button').on('click', toggleMobMenu)

    //burger end


})