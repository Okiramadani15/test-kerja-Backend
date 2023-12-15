let constanta = 0;
function kaprekar(number) {
  if (number == 6174) return console.log(constanta);
  const arrNum = number.toString().split("");
  const numSort = arrNum.sort((a, b) => a - b);
  const result = numSort.join("") - numSort.reverse().join("");
  constanta++;
  return kaprekar(result * -1);
}
kaprekar(3124);
