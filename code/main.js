const collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach((col) =>
  col.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);
