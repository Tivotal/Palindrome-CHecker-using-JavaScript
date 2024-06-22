/* Created by Tivotal */

let input = document.querySelector("input");
let btn = document.querySelector("button");
let result = document.querySelector(".result");
let inputVal;

input.addEventListener("keyup", () => {
  inputVal = input.value.toLowerCase().replace(/[^A-Z0-9]/gi, "");
  if (inputVal) {
    return btn.classList.add("active");
  }
  result.style.display = "none";
  btn.classList.remove("active");
});

btn.addEventListener("click", () => {
  let reverseVal = inputVal.split("").reverse().join("");
  result.style.display = "block";
  if (inputVal != reverseVal) {
    return (result.innerHTML = `<span>'${input.value}'</span> isn't a palindrome`);
  }
  result.innerHTML = `<span>'${input.value}'</span> is a palindrome`;
});
