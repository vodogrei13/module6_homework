function getTypeNumber(number) {
  let True = 'Простое число';
  let Composite = 'Составное число';
  let False = 'Error. Данные неверны';
if (number > 1000) 
  return False;
if (number == 2)
  return True;
if (number % 2 == 0)
  return Composite;
for (let i = 2; i<=number / 2; i++) {
  if (number % i === 0) {
    return False;
} 
} return True;
}
console.log (getTypeNumber(11));
console.log (getTypeNumber(44));
console.log (getTypeNumber(1002));
console.log (getTypeNumber(94));
console.log (getTypeNumber(1));