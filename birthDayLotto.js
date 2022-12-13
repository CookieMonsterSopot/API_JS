let birthDay = parseInt(prompt("Your birthday: ddmmyy", ""));
let numRes = [];

for (let i = 0; i < 300377; i++) {
  let numbers = [];

  for (let j = 0; j < 6; j++) {
    let number = Math.floor(Math.random() * 49) + 1;

    if (!numbers.includes(number)) {
      numbers.push(number);
    } else {
      j--;
    }
  }

  numRes.push(...numbers);
}

const tabNum = {};

for (let i = 0; i < numRes.length; i++) {
  const num = numRes[i];
  if (tabNum[num]) {
    tabNum[num]++;
  } else {
    tabNum[num] = 1;
  }
}
const mostFrequentNumbers = Object.keys(tabNum)
  .sort((a, b) => tabNum[b] - tabNum[a])
  .slice(0, 5);

console.log("Your luckie bests six numbers are...", mostFrequentNumbers);
