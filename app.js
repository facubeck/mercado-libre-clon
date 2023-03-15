const gap = 27;

const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

next.addEventListener("click", (e) => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev.addEventListener("click", (e) => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", (e) => (width = carousel.offsetWidth));

// Segundo Carousel
const gapPromo = 27;

const carouselPromo = document.getElementById("carouselPromo"),
  contentPromo = document.getElementById("contentPromo"),
  nextPromo = document.getElementById("nextPromo"),
  prevPromo = document.getElementById("prevPromo");

nextPromo.addEventListener("click", (e) => {
  carouselPromo.scrollBy(widthPromo + gapPromo, 0);
  if (carouselPromo.scrollWidth !== 0) {
    prevPromo.style.display = "flex";
  }
  if (
    contentPromo.scrollWidth - widthPromo - gapPromo <=
    carouselPromo.scrollLeft + widthPromo
  ) {
    nextPromo.style.display = "none";
  }
});
prevPromo.addEventListener("click", (e) => {
  carouselPromo.scrollBy(-(widthPromo + gapPromo), 0);
  if (carouselPromo.scrollLeft - widthPromo - gapPromo <= 0) {
    prevPromo.style.display = "none";
  }
  if (
    !contentPromo.scrollWidth - widthPromo - gapPromo <=
    carouselPromo.scrollLeft + widthPromo
  ) {
    nextPromo.style.display = "flex";
  }
});

let widthPromo = carouselPromo.offsetWidth;
window.addEventListener(
  "resize",
  (e) => (widthPromo = carouselPromo.offsetWidth)
);

// Tercer Carousel
const gapTambien = 27;

const carouselTambien = document.getElementById("carouselTambien"),
  contentTambien = document.getElementById("contentTambien"),
  nextTambien = document.getElementById("nextTambien"),
  prevTambien = document.getElementById("prevTambien");

nextTambien.addEventListener("click", (e) => {
  carouselTambien.scrollBy(widthTambien + gapTambien, 0);
  if (carouselTambien.scrollWidth !== 0) {
    prevTambien.style.display = "flex";
  }
  if (
    contentTambien.scrollWidth - widthTambien - gapTambien <=
    carouselTambien.scrollLeft + widthTambien
  ) {
    nextTambien.style.display = "none";
  }
});
prevTambien.addEventListener("click", (e) => {
  carouselTambien.scrollBy(-(widthTambien + gapTambien), 0);
  if (carouselTambien.scrollLeft - widthTambien - gapTambien <= 0) {
    prevTambien.style.display = "none";
  }
  if (
    !contentTambien.scrollWidth - widthTambien - gapTambien <=
    carouselTambien.scrollLeft + widthTambien
  ) {
    nextTambien.style.display = "flex";
  }
});

let widthTambien = carouselTambien.offsetWidth;
window.addEventListener(
  "resize",
  (e) => (widthTambien = carouselTambien.offsetWidth)
);

// Cambiar foto cuando click side photos en el Main container
const foto1 = document.getElementById("foto1");
const foto2 = document.getElementById("foto2");
const mainPhoto = document.getElementById("mainPhoto");
const source = mainPhoto.getAttribute("src");

function ponerFoto1() {
  mainPhoto.src = "images/mr-morale-cover.webp";
  foto1.style.outline = "1px solid rgb(22, 22, 233)";
  foto2.style.outline = "1px solid rgba(77, 75, 75, 0.396)";
}
function ponerFoto2() {
  mainPhoto.src = "images/maniac-records.webp";
  foto1.style.outline = "1px solid rgba(77, 75, 75, 0.396)";
  foto2.style.outline = "1px solid rgb(22, 22, 233)";
};

// 