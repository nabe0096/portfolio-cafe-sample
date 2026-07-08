// ============================================
// CAFE LUMIÈRE — Portfolio Sample
// ============================================

// ヘッダー：スクロールで背景を付ける
const header = document.getElementById('header');
const onScroll = () => {
  header.classList.toggle('is-scrolled', window.scrollY > 60);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ハンバーガーメニュー
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
burger.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  burger.classList.toggle('is-open', open);
  burger.setAttribute('aria-expanded', open);
  document.body.style.overflow = open ? 'hidden' : '';
});
// ナビのリンクを押したら閉じる
nav.querySelectorAll('a').forEach((a) => {
  a.addEventListener('click', () => {
    nav.classList.remove('is-open');
    burger.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

// メニュータブ切り替え
const tabs = document.querySelectorAll('.menu__tab');
const panels = document.querySelectorAll('.menu__panel');
tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((t) => {
      t.classList.remove('is-active');
      t.setAttribute('aria-selected', 'false');
    });
    panels.forEach((p) => p.classList.remove('is-active'));
    tab.classList.add('is-active');
    tab.setAttribute('aria-selected', 'true');
    const panel = document.querySelector(`[data-panel="${tab.dataset.tab}"]`);
    panel.classList.add('is-active');
    // 表示されたパネル内の fade-up をすぐ表示
    panel.querySelectorAll('.fade-up').forEach((el) => el.classList.add('is-visible'));
  });
});

// スクロールアニメーション
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);
document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));

// フォーム送信（サンプルのためダミー）
const form = document.querySelector('.form');
form.addEventListener('submit', () => {
  alert('※これはポートフォリオ用のサンプルサイトです。\n実際の送信は行われません。');
});
