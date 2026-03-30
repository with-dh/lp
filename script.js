/**
 * With-DH Landing Page - script.js
 * スティッキーCTAのスクロール検知
 */
(function () {
  'use strict';

  var bar = document.getElementById('sticky-bar');
  if (!bar) return;

  var shown = false;
  var threshold = 300;

  function onScroll() {
    var y = window.scrollY || window.pageYOffset || 0;
    if (y > threshold && !shown) {
      bar.classList.add('visible');
      shown = true;
    } else if (y <= threshold && shown) {
      bar.classList.remove('visible');
      shown = false;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // 初期チェック
})();
