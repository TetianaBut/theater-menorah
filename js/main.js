//! ======= scrolling ----> window.onscroll =====================
//* document.body.scrollHeight - весь текст
//* window.innerHeight  - видимая часть
//* window.pageYOffset - высота scrolling текста сверху
const progressBar = document.getElementById("progressbar");
window.onscroll = function () {
  const totalHeight = document.body.scrollHeight - window.innerHeight;
  let progressHeight = (window.pageYOffset / totalHeight) * 100;
  if (progressHeight < 1.3) {
    progressHeight = 1.3;
  }
  progressBar.style.height = progressHeight + "%";
};
// ! творческое_меню =====================
let text = document.querySelectorAll("nav ul li a").forEach((text) => {
  text.innerHTML = text.innerText
    .split("")
    .map((letters, i) => `<span>${letters}</span>`)
    .join("");
  let spn = document.querySelectorAll("nav ul li a span").forEach((e) => {
    let duration = Math.random() * 6;
    e.style.animationDuration = 0.25 + duration + "s";
    e.style.animationDelay = 0.25 + duration + "s";
  });
});
//TODO:  Responsive Navigation Bar =========================
const header = document.querySelector(".header");
const navbar = document.querySelector(".navigation");
const toggleBtn = document.querySelector(".toggle-btn");
toggleBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
  toggleBtn.classList.toggle("active");
});

//TODO: скрыть панель навигации при прокрутке вниз и показать при прокрутке вверх
let lastScrollTop = 0;
window.addEventListener("scroll", function () {
  let scrollTop = window.pageXOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    header.classList.add("active-scroll");
    navbar.classList.remove("active");
    toggleBtn.classList.remove("active");
  } else {
    header.classList.remove("active-scroll");
  }
  lastScrollTop = scrollTop;
});
//TODO: Перемещение текста всплывающей подсказки при движении мышью ================
let tooltips = document.querySelectorAll(".tooltip");
// ----------Получаем границы элемента  position: fixed; ---------
tooltips.forEach((tooltip) => {
  const btnTooltip = tooltip.parentElement;
  btnTooltip.onmousemove = function (event) {
    tooltip.style.left = event.clientX + "px";
    tooltip.style.top = event.clientY + "px";
  };
});
// ----------Получаем границы элемента  position: absolute; ---------
// tooltips.forEach((tooltip) => {
//    const btnTooltip = tooltip.parentElement;
//    btnTooltip.onmousemove = function (event) {
//       const rect = btnTooltip.getBoundingClientRect();
//       tooltip.style.left = (event.clientX - rect.left) + 'px';
//       tooltip.style.top = (event.clientY - rect.top) + 'px';
//    }
// });
