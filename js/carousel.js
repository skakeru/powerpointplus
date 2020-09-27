const carouselModule = (() => {
  return {
    configure: () => {
      const mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 3,    // 追加...1度に表示するスライド枚数
        spaceBetween: 10,    // 追加...スライド間の余白
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        // ブレイクポイントを設定（1023px以下の時に適用されるオプション）
        breakpoints: {
          1023: {
            slidesPerView: 1,
            spaceBetween: 0,
          }
        }
        // ここまで追加
      });
    },
  }
})();​

carouselModule.configure()
