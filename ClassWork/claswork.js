function isPrimeNmber(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrimeNmber());
// console.log(isPrimeNmber(16));
// console.log(isPrimeNmber(23));
