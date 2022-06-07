'use strict';
/* <============================ header responsive toggle ===========================> */
function handleToggle() {
  var toggleBtn = document.querySelector('.main-page__gnb');
  toggleBtn.classList.toggle('active');
}
/* <!-- <============================ aspiration 보물상자 (image click event) ===========================>  --> */
$(document).ready(function(){
  // 웹페이지 열었을 때
  $("#aspiration__close").show();
  $("#aspiration__open").hide();

  // aspiration__close을 클릭했을 때 aspiration__open를 보여줌
  $("#aspiration__close").click(function(){
    $("#aspiration__close").hide();
    $("#aspiration__open").show();
  });

  // aspiration__open를 클릭했을 때 aspiration__close을 보여줌
  $("#aspiration__open").click(function(){
    $("#aspiration__close").show();
    $("#aspiration__open").hide();
  });
});
/* ================= skills tabs ================= */
$('.skills__header').click(function(){
  $(this).children('.skills__icon').toggleClass('active');
  $(this).siblings('.skills__data').stop().slideToggle();
})
$('.circle').circleProgress({
  value: 0.75,
  fill: {gradient: [['pink',1], ['pink',1]], gradientAngle: Math.PI / 4}
}).on('circle-animation-progress', function(event, progress, stepValue) {
  $(this).find('b').text(stepValue.toFixed(2).substr(1)*100+"%");
});