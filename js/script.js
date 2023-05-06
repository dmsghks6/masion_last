$(document).ready(function(){

  // 스크롤 이벤트에 따른 로고 변경 및 색 변경 
  $(window).scroll(function(){
    const sct = $(window).scrollTop();
    const banner = $('.main-section').offset().top;
    const sec1 = $('.sec-1').offset().top;
    const sec2 = $('.sec-2').offset().top;
    const sec3 = $('.sec-3').offset().top;
    const sec4 = $('.sec-4').offset().top;

    if(sct >= banner && sct < sec1 ){
      $('.logo-zone').removeClass('on');
      $('.logo-zone-2nd').removeClass('on');
     
    }else if(sct >= sec1 && sct < sec2){
      $('.logo-zone').addClass('on');
      $('.logo-zone-2nd').addClass('on');
      $('.logo-2nd g').removeClass('on')

    }else if (sct >= sec2 && sct < sec3){
      $('.logo-zone').addClass('on');
      $('.logo-zone-2nd').addClass('on');
      $('.logo-2nd g').addClass('on')

    }else if(sct >= sec3 && sct < sec4){
      $('.logo-zone').addClass('on');
      $('.logo-zone-2nd').addClass('on');
      $('.logo-2nd g').removeClass('on')
    }

  });
  

  // mouseenter 하면 서브 메뉴 바꿔서 보이게 하기 
  $('.menu-name li').mouseenter(function(){
      const result = $(this).attr('data-alt')
      

      $('.sub-menu').removeClass('on')
      $(`#${result}`).addClass('on')
      $('.submenu-zone').addClass('on')
     
  });

  $('.sub-menu').mouseleave(function(){
      $(this).removeClass('on')
    
  });



  // 햄버거 버튼 클릭시 메누 나오게 처리 하기  

  $('.hamburger-zone').click(function(){
    
      $('.hamburger-zone span').toggleClass('on')
      $('.main-section .menu-zone').toggleClass('on')

  
  })

  

 var ww = $(window).width();
 var mainSwiper = undefined;
 var subSwiper = undefined;


 function resizeSwiper(){
  if(ww >= 1180 && mainSwiper == undefined && subSwiper == undefined){
    
  mainSwiper = new Swiper('.firstSwiper',{
    controller : {
      control : subSwiper,
    },
    effect : "fade",
    loop : true,
    speed: 1500,
    // autoplay : {
    //     delay : 3500,
    //     disableOnInteraction : false,
    // },  
    //-> swiper 두개를 연동 시키고 autoplay가 두개면 순서가 꼬이는 현상 발생 
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
  
  });

    subSwiper = new Swiper('.secondSwiper',{
      controller:{
        control : mainSwiper,
      },
      loop: true,
      speed: 1500,
      spaceBetween: 10,
      direction: "vertical",
      slidesPerView: 1,
      slidesPerGroups: 1,
      // autoplay: {
      //   delay: 3500,
      //   disableOnInteraction: false,
      // },
      // => 작업 하는동안 잠시 멈춰둠


      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
  
  });

  mainSwiper.controller.control = subSwiper;
  subSwiper.controller.control = mainSwiper;
  } else if(ww < 1180 & mainSwiper != undefined && subSwiper != undefined){
    mainSwiper.destroy();
    mainSwiper = undefined;
    subSwiper.destroy();
    subSwiper = undefined;
  }
 };

 resizeSwiper();

 $(window).on('resize', function () {
  console.log('작동')
  ww = $(window).width();
  resizeSwiper();
});
  

  // swiper 두개 구동 하고 연결 하기 

  // var mainSwiper = new Swiper('.firstSwiper',{
  //   controller : {
  //     control : subSwiper,
  //   },
  //   effect : "fade",
  //   loop : true,
  //   speed: 1500,
  //   // autoplay : {
  //   //     delay : 3500,
  //   //     disableOnInteraction : false,
  //   // },  
  //   //-> swiper 두개를 연동 시키고 autoplay가 두개면 순서가 꼬이는 현상 발생 
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  //   pagination: {
  //       el: ".swiper-pagination",
  //       clickable: true,
  //   },
  
  // });

  //   var subSwiper = new Swiper('.secondSwiper',{
  //     controller:{
  //       control : mainSwiper,
  //     },
  //     loop: true,
  //     speed: 1500,
  //     spaceBetween: 10,
  //     direction: "vertical",
  //     slidesPerView: 1,
  //     slidesPerGroups: 1,
  //     // autoplay: {
  //     //   delay: 3500,
  //     //   disableOnInteraction: false,
  //     // },
  //     // => 작업 하는동안 잠시 멈춰둠


  //     pagination: {
  //       el: ".swiper-pagination",
  //       clickable: true,
  //     },
  //     navigation: {
  //       nextEl: ".swiper-button-next",
  //       prevEl: ".swiper-button-prev",
  //     },
  //     pagination: {
  //         el: ".swiper-pagination",
  //         clickable: true,
  //     },
  
  // });

  // mainSwiper.controller.control = subSwiper;
  // subSwiper.controller.control = mainSwiper;

 

  $(window).resize(function(){    

    if (window.matchMedia("(max-width: 920px)").matches) {
      $('.aos1').attr({
        'data-aos': 'zoom-in-down',
        'data-aos-duration' : '1500',
        'data-aos-offset' : '0'
      });

      $('.aos2').attr({
        'data-aos': 'zoom-in-down',
        'data-aos-duration' : '1500',
        'data-aos-offset' : '0'
      });

      $('.aos3').attr({
        'data-aos': 'zoom-in-down',
        'data-aos-duration' : '1500',
        'data-aos-offset' : '0'
      });
    }
    else if (window.matchMedia("(max-width: 1450px)").matches) {
      $('.aos1').attr({
        'data-aos': 'zoom-in-down',
        'data-aos-duration' : '1500',
        'data-aos-offset' : '100'
      });

      $('.aos2').attr({
        'data-aos': 'zoom-in-down',
        'data-aos-duration' : '1500',
        'data-aos-offset' : '100'
      });

      $('.aos3').attr({
        'data-aos': 'zoom-in-down',
        'data-aos-duration' : '1500',
        'data-aos-offset' : '100'
      });
    } else {
  
      $('.aos1').attr({
        'data-aos': 'fade-right',
        'data-aos-duration' : '1500',
        'data-aos-offset' : '400'
      });

      $('.aos2').attr({
        'data-aos': 'fade-up-left',
        'data-aos-duration' : '1500',
        'data-aos-offset' : '400'
      });

      $('.aos3').attr({
        'data-aos': 'fade-up-right',
        'data-aos-duration' : '1500',
        'data-aos-offset' : '400'
      });
     
    }
}).resize()







  
  // aos 화면 사이즈 별로 다르게 표현 하기 

//   $(window).resize(function(){    
//     if (window.matchMedia("(max-width: 1450px)").matches) {
//       $('.aos1').attr({
//         'data-aos': 'zoom-in-down',
//         'data-aos-duration' : '1500',
//         'data-aos-offset' : '100'
//       });

//       $('.aos2').attr({
//         'data-aos': 'zoom-in-down',
//         'data-aos-duration' : '1500',
//         'data-aos-offset' : '100'
//       });

//       $('.aos3').attr({
//         'data-aos': 'zoom-in-down',
//         'data-aos-duration' : '1500',
//         'data-aos-offset' : '100'
//       });
//     } else {
  
//       $('.aos1').attr({
//         'data-aos': 'fade-right',
//         'data-aos-duration' : '1500',
//         'data-aos-offset' : '400'
//       });

//       $('.aos2').attr({
//         'data-aos': 'fade-up-left',
//         'data-aos-duration' : '1500',
//         'data-aos-offset' : '400'
//       });

//       $('.aos3').attr({
//         'data-aos': 'fade-up-right',
//         'data-aos-duration' : '1500',
//         'data-aos-offset' : '400'
//       });
     
//     }
// }).resize()

  // aos 500 밑으로는 없애기 
  AOS.init({
    // disable: window.innerWidth < 800,
   
  });


 });
