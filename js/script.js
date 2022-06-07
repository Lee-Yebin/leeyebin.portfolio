'use strict';
/* <============================ full page ===========================> */
new fullpage('#full-page', {
  licenseKey: '',
  anchors:['page-1', 'page-2', 'page-3', 'page-4', 'page-5'],
  navigation: true,
});
/* <============================ header responsive toggle ===========================> */
function handleToggle() {
  var toggleBtn = document.querySelector('.main-page__gnb');
  toggleBtn.classList.toggle('active');
}
/* <============================ intro text-typing effect ===========================> */
var i = 0;
var txt = `안녕하십니까 \n웹디자이너를 꿈꾸는 항해사, 이예빈입니다 :)`;
var speed = 100;
function typeWriter() {
  if (i < txt.length) {
    let text = txt.charAt(i);
    document.getElementById("text").innerHTML += text=== "\n" ? "<br/>": text;
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();
/* <============================ cooperation-alone > we (image click event) ===========================> */
$(document).ready(function(){
  // 웹페이지 열었을 때
  $("#cooperation__alone").show();
  $("#cooperation__we").hide();
  // cooperation__alone을 클릭했을 때 cooperation__we를 보여줌
  $("#cooperation__alone").click(function(){
    $("#cooperation__alone").hide();
    $("#cooperation__we").show();
  });
  // cooperation__we를 클릭했을 때 cooperation__alone을 보여줌
  $("#cooperation__we").click(function(){
    $("#cooperation__alone").show();
    $("#cooperation__we").hide();
  });
});
/* <============================ contact > info modal page ===========================> */
var $modal = $('.cotact__info__modal');
var $contact__info__overlay = $('.contact__info__overlay');
var $btn = $('.contact__info__click__button');
var $btnClose = $('.cotact__info__close__modal');

$contact__info__overlay.hide();
$btn.click(function(){
  $contact__info__overlay.fadeIn();
})
$btnClose.click(function(){
  $contact__info__overlay.fadeOut();
})
$contact__info__overlay.click(function(e){
  // target은 내가 클릭한 객체
  // currentTarget은 이벤트가 발생한 객체
  if(e.target == e.currentTarget){
      $(this).fadeOut();
  }
})