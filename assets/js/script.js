"use strict";

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var deliverySwiper = new Swiper(".deliverySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var servicesSwiper = new Swiper(".servicesSwiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const faqs = document.querySelectorAll(".faq");
for (const item of faqs) {
  const curr_faq = item.childNodes;
  const question = curr_faq[1];
  const answer = curr_faq[3];
  const icon = question.querySelector(".icon-main");
  icon.addEventListener("click", function () {
    answer.classList.toggle("non-active");
    const svg = icon.querySelector("svg");
  });
}
