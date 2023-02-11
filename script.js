const slides = document.querySelectorAll(".slide");

slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});
const nextSlide = document.querySelector(".btn-next");

let curSlide = 0;

let maxSlide = slides.length - 1;

nextSlide.addEventListener("click", function () {
  if (curSlide != maxSlide) {
    curSlide++;
  }
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
  sliderButtons();
});

const prevSlide = document.querySelector(".btn-prev");

prevSlide.addEventListener("click", function () {
  if (curSlide != 0) {
    curSlide--;
  }
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
  sliderButtons();
});
const sliderButtons = () => {
  if (curSlide == 0) {
    prevSlide.style.visibility = "hidden";
  } else {
    prevSlide.style.visibility = "visible";
  }
  if (curSlide == maxSlide) {
    nextSlide.style.visibility = "hidden";
  } else {
    nextSlide.style.visibility = "visible";
  }
};
