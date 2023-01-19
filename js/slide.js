let index = 1;
let is_clicked = false;

let slide = setInterval(function () {
  $('.slide-list').css('transform', `translateX(${index * -100}vw)`);
  if (index >= 12) {
    index = 0;
  } else {
    index++;
  }
}, 3000); // 1000ms = 1s


// ''는 문자열이고 , ``는 내가 지정한 변수를 불러올 수 있게 된다.
// 거기서 * 하면 다음다음으로 이동할 수 있게된당
//만약 인덱스(현재 페이지)가 12보다 크거나 같을때는 인덱스가 다시 0으로 돌아가라
//그외에의 경우에는 인덱스가 돌면서 증가하라


$('.btn-banner').on('click', function () {
  if (is_clicked == false) {
    clearInterval(slide);
    is_clicked = true;
  } else {
    slide = setInterval(function () {
      $('.slide-list').css('transform', `translateX(${index * -100}vw)`);
      if (index >= 12) {
        index = 0;
      } else {
        index++;
      }
    }, 3000);
    is_clicked = false;
  }

});