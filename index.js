function hasTargetSum(array, target) {
  // Write your algorithm here
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

/*
1. Rewrite the Problem in Your Own Words
This is one way of doing it:
  -- The input to this function will be an array of numbers and a target. What this means is that the target is the goal 
     that you want to return true for. So using the array of numbers, check to see if 2 numbers within that array will 
     add up to the target number. If any 2 numbers add up to the target number, return true. If not, return false.
     The two numbers don't have to be in any order or adjacent to each other. So we can take the first number of the
     array, add it to the second number of the array(or the last, or the middle, it doesn't matter) and then compare
     the sum to the target. If it doesn't match the target, take the number in the 3rd position and add it to the 
     first number and compare it to the target again, keep doing this til you reach the end of the array for the 
     first number and then it again for the second number til you reach the end of the array. If at any point there 
     is a match to the target stop adding the numbers and return true. If you reach the end of the array and there 
     never was a match return false.
Another approach would be: 
  -- 
2. Write Your Own Test Cases
3. Pseudocode
4. Code
5. Make It Clean and Readable
6. Optimize
*/
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
