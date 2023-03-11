const gap = 27;

const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

next.addEventListener("click", e => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev.addEventListener("click", e => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));

// Segundo Carousel
const gapPromo = 27;

const carouselPromo = document.getElementById("carouselPromo"),
  contentPromo = document.getElementById("contentPromo"),
  nextPromo = document.getElementById("nextPromo"),
  prevPromo = document.getElementById("prevPromo");

nextPromo.addEventListener("click", e => {
  carouselPromo.scrollBy(widthPromo + gapPromo, 0);
  if (carouselPromo.scrollWidth !== 0) {
    prevPromo.style.display = "flex";
  }
  if (contentPromo.scrollWidth - widthPromo - gapPromo <= carouselPromo.scrollLeft + widthPromo) {
    nextPromo.style.display = "none";
  }
});
prevPromo.addEventListener("click", e => {
  carouselPromo.scrollBy(-(widthPromo + gapPromo), 0);
  if (carouselPromo.scrollLeft - widthPromo - gapPromo <= 0) {
    prevPromo.style.display = "none";
  }
  if (!contentPromo.scrollWidth - widthPromo - gapPromo <= carouselPromo.scrollLeft + widthPromo) {
    nextPromo.style.display = "flex";
  }
});

let widthPromo = carouselPromo.offsetWidth;
window.addEventListener("resize", e => (widthPromo = carouselPromo.offsetWidth));
