
let myswiper1 = new Swiper('.swiper', {
    spaceBetween: 200,
    autoHeight: true,
    speed: 800,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        clickable: true,
    },
  });

  // воспроизводит автоматически слайды, если навестись мышкой
let SliderBlock = document.querySelector('.swiper')
SliderBlock.addEventListener("mouseenter", function(e){
  myswiper1.params.autoplay.disabeOnInteraction = false;
  myswiper1.params.autoplay.delay = 4000;
  myswiper1.autoplay.start();
});
SliderBlock.addEventListener("mouseleave", function(e){
  myswiper1.autoplay.stop();
});