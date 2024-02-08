// Task 1
function checkVotingEligibility() {
  var age = 18 ;
if (age >= 18 ) {
  console.log("You are eligible for voting");
}
else {
  console.log("You are not eligible for voting.");
}
}

// Task 2
function printNumbersWithWhile() {
  var i = 1;
  while (i < 5) {
    console.log(i,'Hello laila');
    i++;
  }
}

// Task 3
function printEvenNumbersWithFor() {
  for (var i=2; i < 12 ; i+=2){
         console.log(i,'laila');
  }
}

// Task 4
function getDayOfWeek() {
  switch (dayOfWeek) {
        case 1 :
            console.log('Sunday')
            break
       case 2 :
        console.log('Monday')
        break ;
        case 3 :
          console.log('Tuesday')
          break
     case 4 :
      console.log('Wenesday')
      break ;
      case 5 :
            console.log('Thursday')
            break
       case 6 :
        console.log('Saturday')
        break ;
        case 7 :
          console.log('Friday')
          break ;
        default :
        console.log('Orange juice')
        break;
    }
}

// Task 5
function sum() {
let num1 = 10 ;
let num2 = 15;
 return num1 + num2 ;
}

// Task 6
// Uncomment and solve
const fruits = ['Bnana','Orange','Strawberry','Nutella'] ;
console.log(fruits);

module.exports = {
  checkVotingEligibility,
  printNumbersWithWhile,
  printEvenNumbersWithFor,
  getDayOfWeek,
  sum,
  fruits,
};
