const sliderCtrl = document.querySelector(".features-slider-ctrl");
const sliderCrtlEls = document.querySelectorAll(".features-slider-ctrl__el");
const sliderHolder = document.querySelector(".features-slider-holder");

sliderCtrl.addEventListener("click", (e) => {
  let selectedSlide = e.target.dataset.slide;
  sliderCrtlEls.forEach((el) => {
    selectedSlide == el.dataset.slide
      ? el.classList.add("active")
      : el.classList.remove("active");
  });
  sliderHolder.classList.remove("slide-1", "slide-2", "slide-3");
  sliderHolder.classList.add(`slide-${selectedSlide}`);
});
