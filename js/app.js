let imgs = ["img/1.webp", "img/2.webp", "img/3.webp"];

let img = document.querySelector("img"); //находим div с картинкой

let btnBack = document.querySelector("div.back");

let btnForward = document.querySelector("div.forward");
// img.src = "img/3.webp";

let imgNum = 1;
let imgMaxCount = 3;

btnBack.onclick = function () {
  --imgNum;

  if (imgNum <= 0) {
    imgNum = imgMaxCount;
  }
  console.log(imgNum);
  img.src = imgs[imgNum - 1];
};

btnForward.onclick = function () {
  ++imgNum;

  if (imgNum > imgMaxCount) {
    imgNum = 1;
  }
  console.log(imgNum);
  img.src = imgs[imgNum - 1];
};
