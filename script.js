//your code here
const form = document.getElementById("form");
const result = document.getElementById("result");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  const input = document.querySelector("input[type='text']").value;
  const arr = input.split(",").map(val => parseInt(val));
  const minCost = getMinCost(arr);
  result.textContent = minCost;
});

function getMinCost(arr) {
  arr.sort((a, b) => a - b);
  let cost = 0;
  while (arr.length > 1) {
    const first = arr.shift();
    const second = arr.shift();
    cost += first + second;
    arr.unshift(first + second);
    arr.sort((a, b) => a - b);
  }
  return cost;
}
