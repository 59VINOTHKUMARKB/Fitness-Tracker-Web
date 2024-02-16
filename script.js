console.clear();

const elShoesReduce = document.querySelectorAll(".reduce-weight .shoe");
const elShoesGain = document.querySelectorAll(".gain-weight .shoe");

elShoesReduce.forEach((shoe) => {
  shoe.addEventListener("click", () => {
    elShoesReduce.forEach((el) => delete el.dataset.active);
    elShoesGain.forEach((el) => delete el.dataset.active);
    shoe.dataset.active = true;
  });
});

elShoesGain.forEach((shoe) => {
  shoe.addEventListener("click", () => {
    elShoesGain.forEach((el) => delete el.dataset.active);
    elShoesReduce.forEach((el) => delete el.dataset.active);
    shoe.dataset.active = true;
  });
});

