// Solution to Assignment ALAB 308.1.1: Data Manipulation with JavaScript

// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Exploring other comparisons and operations

// First bullet: Checking if all the numbers are divisible by 5 and caching the result in a variable
// There should be no remainder if all are divisible by 5 and get negation of that if that's the case to get a true value

let areAllDivisibleBy5 = !((n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) == 0);  // Note that we used a variable; not a 'const'

// Checking if the first number is larger than the last and caching the result in a variable.
// 

let isFirstNumLargerThanLast = n1 > n4;

/*
Third bullet:
Accomplishing the following arithmetic chain:

1. Subtract the first number from the second number.
2. Multiply the result by the third number.
3. Find the remainder of dividing the result by the fourth number.
*/

let remainderOfArithmeticOpChain = ((n2 -n1) * n3) % n4;  // Refer multi-line comment for the 'arithmetic chain' particulars.

// Fourth bullet: Changing the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons and rename the variable if appropriate.

const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;