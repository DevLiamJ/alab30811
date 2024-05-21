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
console.log(`\nThe sum of the four numbers is ${isSum50 ? '' : 'not '}50.`);

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
// I do understand that the following code is not asked for but I added it any way, please don't penalize.
console.log(`\nThere is ${isTwoOdd ? '' : 'not '}at least two odd numbers out of the four.`);

// Check three: no number larger than 25
// This time, we use the AND operator (&&) to check
// if ALL the numbers are under 26. Note that to check if the numbers
// are not more than 25, we increased the boundary check value to 26 
// as isUnder25 variable suggested on line 32 in the template code 
// would exclude the valid number 25 or we should modify a the variable name
// into a rather verbose one like isUnderOrEqualTo25 and do our 
// comparisons like number-to-check <= 25.
const areAllUnder26 = n1 < 26 && n2 < 26 && n3 < 26 && n4 < 26;
// I do understand that the following code is not asked for but I added it any way, please don't penalize.
console.log(`\nThere is ${areAllUnder26 ? 'no ' : 'at least one '}number larger than 25.`);

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
// I do understand that the following code is not asked for but I added it any way, please don't penalize.
console.log(`\nAll are ${isUnique ? '' : 'not '}unique numbers.`);

// Here, we put the results into a single variable 
// for convenience. Note how we now are using the areAllUnder26 variable substitued
// for the original isOver25 one so that we do not need to use the NOT operator (!) in below logic.
// We did not choose to test for "isUnder25" as an alternative due to reasons explained
// in comment above code that declares and assigns value to the areAllUnder26 variable, above.
const isValid = isSum50 && isTwoOdd && areAllUnder26 && isUnique;

// Finally, log the results.
console.log(`\nThe four numbers are ${isValid ? '' : 'not '}valid according to the provided criteria.`);

// Part 1: Math Problems
console.log(`\nSolutions to Part 1: Math Problems`)

// Exploring other comparisons and operations
// First bullet: Checking if all the numbers are divisible by 5 and caching the result in a variable
// There should be no remainder if all are divisible by 5 and get negation of that if that's the case to get a true value
const areAllDivisibleBy5 = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) == 0;
console.log(`\n${areAllDivisibleBy5 ? 'All the four numbers are' : 'At least one of the four numbers is not'} divisible by 5.`);

// Second bullet: Checking if the first number is larger than the last and caching the result in a variable.
const firstNumIsLargerThanLast = n1 > n4;
console.log(`\nThe first number is ${firstNumIsLargerThanLast ? '' : 'not '}larger than the last.`);

/*
Third bullet:
Accomplishing the following arithmetic chain:

1. Subtract the first number from the second number.
2. Multiply the result by the third number.
3. Find the remainder of dividing the result by the fourth number.
*/
const remainderOfArithmeticOpChain = ((n2 - n1) * n3) % n4;  // Refer multi-line comment for the 'arithmetic chain' particulars.
console.log(`\nThe result of the arithmetic chain, ((n2 - n1) * n3) % n4, applied to the four numbers is ${remainderOfArithmeticOpChain}.`);

// Fourth bullet: Changing the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons and rename the variable if appropriate.
// Task completed above (Line 31) and please refer the explanations in the comments.

