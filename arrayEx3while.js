//print in square bracket
function printNumbersInSquareBrackets(n) {
    let i = 1;
  
    while (i <= n) {
      console.log(`[${i}]`);
      i++;
    }
  }
  
  printNumbersInSquareBrackets(6); // Example usage: prints [1] [2] [3] [4] [5] [6]