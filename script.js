/* ===========================================
   With-DH LP - script.js
   ① スティッキーCTAバーの表示制御
   ② ブラシ画像のディゾルブアニメーション（スクロール検知）
   =========================================== */

/* ① スティッキーCTAバー --------------------------------- */
(function () {
  const sticky = document.getElementById('sticky-bar');
  if (!sticky) return;

  const THRESHOLD = 300; // px スクロール後に表示

  function updateSticky() {
    if (window.scrollY > THRESHOLD) {
      sticky.classList.add('visible');
    } else {
      sticky.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', updateSticky, { passive: true });
  updateSticky();
})();


/* ② ブラシ画像ディゾルブ（スクロール検知） -------------- */
(function () {
  const brushImg = document.querySelector('.brush-img');
  if (!brushImg) return;

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          // 少し遅延を入れてよりドラマチックに
          setTimeout(function () {
            brushImg.classList.add('is-visible');
          }, 150);
          // 一度発火したら監視停止
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.25 // 要素の25%が見えたら発火
    }
  );

  observer.observe(brushImg);
})();
