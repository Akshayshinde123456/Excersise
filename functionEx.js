function checkPayment(amount){
  const transactionFee = 3;
  const interestRate = 0.001;
  
  const totalCost = amount + transactionFee + amount * interestRate;
  return totalCost;
}

const paymentCost = checkPayment(100);
console.log(paymentCost);

//------------------------------

function friends(name1, name2, name3){
    console.log(`Welcome ${name1}, ${name2}, ${name3}.`);

}
friends('vaibhav', 'lalit', 'Devashish');
 
function calculateAge(birthYear){
    const currentYear = 2023;
    const age = currentYear - birthYear;
    return age;
}

const age = calculateAge(1998);
console.log(age);

//---------------------------------

function greetFriendsWithAge(name1, age1, name2, age2, name3, age3) {
    console.log(`Welcome ${name1}, you are ${age1}.`);
    console.log(`Welcome ${name2}, you are ${age2}.`);
    console.log(`Welcome ${name3}, you are ${age3}.`);
  }
  
  const name1 = "Alice";
  const age1 = 25;
  const name2 = "Bob";
  const age2 = 30;
  const name3 = "Charlie";
  const age3 = 28;
  
  greetFriendsWithAge(name1, age1, name2, age2, name3, age3);

  //-----------------------------------

  function isPassingScore(score) {
    return score >= 5;
  }
  
  console.log(isPassingScore(7)); // Example usage: returns true
  console.log(isPassingScore(3)); // Example usage: returns false

  
  function determineGrade(score) {
    if (score > 8) {
      console.log("Excellent");
    } else if (score >= 5) {
      console.log("Pass");
    } else {
      console.log("Fail");
    }
  }
  
  determineGrade(9); // Example usage: prints "Excellent"
  determineGrade(6); // Example usage: prints "Pass"
  determineGrade(3); // Example usage: prints "Fail"

  
  function determineGrade(score) {
    if (score === 11) {
      console.log("Perfect");
    } else if (score > 8) {
      console.log("Excellent");
    } else if (score >= 5) {
      console.log("Pass");
    } else {
      console.log("Fail");
    }
  }
  
  determineGrade(11); // Example usage: prints "Perfect"
  determineGrade(9);  // Example usage: prints "Excellent"
  determineGrade(6);  // Example usage: prints "Pass"
  determineGrade(3);  // Example usage: prints "Fail"
  

