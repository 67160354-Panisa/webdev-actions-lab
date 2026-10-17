document.querySelector('#helloBtn').addEventListener('click', () => {
  document.querySelector('#status').textContent =
    'สวัสดีจาก GitHub Pages! เว็บนี้ deploy อัตโนมัติด้วย GitHub Actions ✨';
});

const themeBtn = document.querySelector('#themeBtn');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  themeBtn.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
});