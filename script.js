$(function() {

  $(".btn-gnavi").on("click", function(){
          // ハンバーガーメニューの位置を設定
          var rightVal = 0;
          if($(this).hasClass("open")) {
              // 位置を移動させメニューを開いた状態にする
              rightVal = -300;
              // メニューを開いたら次回クリック時は閉じた状態になるよう設定
              $(this).removeClass("open");
          } else {
              // メニューを開いたら次回クリック時は閉じた状態になるよう設定
              $(this).addClass("open");
          }

          $("#global-navi").stop().animate({
              right: rightVal
          }, 200);
      });

if ( window.document.body.id === 'index' ) {
  const scrollTop_profile = $('#top').offset().top;

  $('.button-for-profile').click(function(){
     $('html,body').animate({
       'scrollTop':scrollTop_profile
     },500);
    });


const scrollTop_works = $('#works').offset().top;

$('.button-for-works').click(function(){
   $('html,body').animate({
     'scrollTop':scrollTop_works
   },500);
  });

  const scrollTop_services = $('#services').offset().top;

  $('.button-for-services').click(function(){
     $('html,body').animate({
       'scrollTop':scrollTop_services
     },500);
    });



  const scrollTop_contact = $('#contact').offset().top;

  $('.button-for-contact').click(function(){
     $('html,body').animate({
       'scrollTop':scrollTop_contact
     },500);
    });

  }



        const scrollTop_works_2 = $('#works-2').offset().top;

        $('.button-for-works-2').click(function(){
           $('html,body').animate({
             'scrollTop':scrollTop_works_2
           },500);
          });

        const scrollTop_contact_2 = $('#contact-2').offset().top;

        $('.button-for-contact-2').click(function(){
           $('html,body').animate({
             'scrollTop':scrollTop_contact_2
           },500);
          });







    });
