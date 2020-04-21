var spoilers = document.getElementsByClassName("spoiler-alert");
var i;

for (i = 0; i < spoilers.length; i++) {
  spoilers[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var spoiler = this.nextElementSibling;
    if (spoiler.style.display === "block") {
      spoiler.style.display = "none";
    } else {
      spoiler.style.display = "block";
    }
  });
}
