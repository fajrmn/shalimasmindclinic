(() => {
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  const detailsList = Array.from(document.querySelectorAll(".faq-list details"));
  detailsList.forEach((item) => {
    item.addEventListener("toggle", () => {
      if (!item.open) return;
      detailsList.forEach((other) => {
        if (other !== item) other.open = false;
      });
    });
  });
})();
