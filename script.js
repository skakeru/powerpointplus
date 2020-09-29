$(function() {

  if ($('.sp-menu').css('display') == 'block') {
    $(".hamburger").click(
      function() {
        $(".sp-menu").css('background-color','black');
         });


    $(".hamburger").click(
      function() {
        $('.hamburger').children('img').attr('src', './images/hamburger.png');
        });
} else {
  $(".hamburger").click(
    function() {
      $(".sp-menu").css('display','block');
       });


  $(".hamburger").click(
    function() {
      $('.hamburger').children('img').attr('src', './images/peke.png');
      });
}







    });
