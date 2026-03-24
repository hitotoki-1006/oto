// ハンバーガーメニュー //
var hamburger = $('.hamburger-menu');
//OPEN/CLOSEボタンをクリックしたら
$('.hamburger-button').on('click', function () {
  // console.log('click');
  // .hamburgerの表示・非表示を繰り返す
  hamburger.toggleClass('hamburger-menu-active');
});
// 画面幅のサイズが変わったら
$(window).on('resize', function () {
  // ハンバーガーメニューを閉じる
  hamburger.removeClass('hamburger-menu-active');
});

//カルーセル
$('.cover-slick').slick({
  autoplay: true, // 自動再生
  autoplaySpeed: 3000, // 自動再生の速さ、単位はミリ秒
  infinite: true,
  dots: true,
  arrows: true,
  fade: true
});

