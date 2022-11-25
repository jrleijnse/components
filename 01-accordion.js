const items = document.querySelectorAll(".item");

for (let item of items) {
  item.addEventListener("click", function () {
    item.classList.toggle("open");
  });
}
