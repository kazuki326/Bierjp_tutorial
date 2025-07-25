document.addEventListener("DOMContentLoaded", () => {
  const btn   = document.getElementById("showInfo");
  const info  = document.getElementById("beer-info");

  btn.addEventListener("click", () => {
    const isOpen = info.classList.toggle("is-open");
    info.setAttribute("aria-hidden", !isOpen);
    btn.setAttribute("aria-expanded", isOpen);
    btn.textContent = isOpen ? "閉じる" : "詳細を見る";
  });
});
