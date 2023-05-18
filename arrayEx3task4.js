function calculateSumOfPositive(n) {
    let sum = 0;
    let i = 1;
  
    while (i <= n) {
      sum += i;
      i++;
    }
  
    return sum;
  }
  
  console.log(calculateSumOfPositive(5)); 
  console.log(calculateSumOfPositive(19)); 
  