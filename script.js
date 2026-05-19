const letter = document.getElementById("letter");
let step = 0;

letter.addEventListener("click", () => {
  if (step < 4) {
    step++;
    letter.classList.add(`step-${step}`);
  }
});
