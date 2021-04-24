const faqBlock = document.querySelectorAll(".faq-list");
const faqEls = document.querySelectorAll(".faq-list-el");
var activeFaq = 1;

faqBlock[0].addEventListener("click", (e) => {
  let selectedFaq = +e.target.dataset.faq;
  if (selectedFaq !== activeFaq) {
    activeFaq = selectedFaq;
    faqEls.forEach((el) => {
      el.classList.remove("active");
      +el.dataset.faq === selectedFaq ? el.classList.add("active") : null;
    });
  } else {
    e.target.classList.remove("active");
    activeFaq = 0;
  }
});
