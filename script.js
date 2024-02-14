console.clear();

const elFoodsReduce = document.querySelectorAll(".reduce-weight .food");
const elFoodsGain = document.querySelectorAll(".gain-weight .food");

elFoodsReduce.forEach((food) => {
  food.addEventListener("click", () => {
    elFoodsReduce.forEach((el) => delete el.dataset.active);
    elFoodsGain.forEach((el) => delete el.dataset.active);
    food.dataset.active = true;
  });
});

elFoodsGain.forEach((food) => {
  food.addEventListener("click", () => {
    elFoodsGain.forEach((el) => delete el.dataset.active);
    elFoodsReduce.forEach((el) => delete el.dataset.active);
    food.dataset.active = true;
  });
});
