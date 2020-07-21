const btnForward = document.querySelector(".forward-button");
const btnBack = document.querySelector(".back-button");
const sliderTrack = document.querySelector(".slider-track");

const itemsCount = document.querySelectorAll(".slider-item").length;

let positionX = 0;
const stepX = 800;
const maxPositionX = -(itemsCount * stepX - stepX);

let sliderPositionX = function () {
  btnForward.disabled = positionX <= maxPositionX;
  btnBack.disabled = positionX >= 0;

  sliderTrack.style.transform = ` translateX(${positionX}px)`;
};

sliderPositionX();

btnForward.onclick = function () {
  positionX -= stepX;
  sliderPositionX(positionX);
};

btnBack.onclick = function () {
  positionX += stepX;
  sliderPositionX();
};
