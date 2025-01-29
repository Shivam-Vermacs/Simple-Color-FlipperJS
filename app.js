const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  //get random no.
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber]; // targeting the array here
  color.textContent = colors[randomNumber]; //same here i'm first targetting the text content and then changing its content by targetting the array colors at the top
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
