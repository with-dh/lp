/* ===========================================
   With-DH LP - script.js
   ① スティッキーCTAバーの表示制御
   ② ブラシ画像のディゾルブアニメーション（スクロール検知）
   ③ DIAGNOSISカードの順番フェードイン
   =========================================== */

/* ① スティッキーCTAバー --------------------------------- */
(function () {
  const sticky = document.getElementById('sticky-bar');
  if (!sticky) return;

  const THRESHOLD = 300;

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
          setTimeout(function () {
            brushImg.classList.add('is-visible');
          }, 150);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.25 }
  );

  observer.observe(brushImg);
})();


/* ③ DIAGNOSISカード 順番フェードイン ------------------- */
(function () {
  const cards = document.querySelectorAll('.diagnosis-card');
  if (!cards.length) return;

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const card = entry.target;
          const index = Array.from(cards).indexOf(card);
          // 1枚ずつ200msずつ遅延
          setTimeout(function () {
            card.classList.add('is-visible');
          }, index * 200);
          observer.unobserve(card);
        }
      });
    },
    { threshold: 0.2 }
  );

  cards.forEach(function (card) {
    observer.observe(card);
  });
})();
