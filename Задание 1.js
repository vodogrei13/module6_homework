let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function getSumEvenOddNumbers() {
  let even = 0;
  let odd = 0;
  let zeros = 0;
  for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 0) {
    zeros++
  } else {
  if (arr[i] % 2 !== 0) {
    even++
} if (arr[i] % 2 == 0) {
  odd++
  }
  }
}
console.log('Четных:'+even,'Не четных:'+odd,'Null:'+zeros)
}
getSumEvenOddNumbers();