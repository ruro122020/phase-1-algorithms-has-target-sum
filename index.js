function compareNumbers(a, b) {
  return a - b;
}

function add(array, i) {
  let lastNumber = array[array.length - 1]
  let nextNumber = array[i]
  return lastNumber + nextNumber
}

function hasTargetSum(array, target) {
  // Write your algorithm here
  array.sort(compareNumbers)
  if (!array.length || array.length === 1) {
    return false
  }

  for (let i = 0; i < array.length; i++) {
    let sumNumber = add(array, 0)
    if (sumNumber > target) {
      array.pop()
    }
  }

  for (let i = 0; i < array.length; i++) {
    let indexOfLastNumber = array.indexOf(array[array.length - 1])
    //in array.indexOf(array[i], 1) the first argument is the value at the ith index position, the second argument is asking for indexOf to look
    //for the value from the second index onward. E.g. given an array: [2,2,3].indexOf(2, 1) this means to look for the index that 
    //has the value 2 and the second argument means to start looking for the value(2) at index 1. So this will return the first index that has
    //2 as its value.
    let indexOfLastNumberOfLoop = array.indexOf(array[i], 1)
    let sumNumber = add(array, i)

    if (indexOfLastNumber === indexOfLastNumberOfLoop) {
      return false
    }

    if (sumNumber === target) {
      return true
    }
  }
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  sort the array of numbers from least to greatest 
    iterate through the array and remove any number that is greater than the target number
    iterate through the new array
      if the greatest number plus the least number > target
        remove the greatest number from the array
    iterate throught the array 
      if greatest number plus the least number === target
        return true
*/

/*
  Add written explanation of your solution here
     Sort the numbers from least to greatest, get the center number and if its more than the target you know the rest of the number to the right 
     will be as well so you can remove them from the array. But if its not more .... then we can proceed with adding the numbers to see if 
     any 2 number sum up to the target.
     *********
     After coding the above solution, I came across some edge cases that changed my solution 
*/

/*
1. Rewrite the Problem in Your Own Words
     The input to this function will be an array of numbers and a target. Using the array of numbers, check to see if
     there are 2 numbers within that array will that will add up to the target number. If any 2 numbers add up to the target number, 
     return true. If not, return false. The two numbers don't have to be in any order or adjacent to each other. 

2. Write Your Own Test Cases

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([], 25));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([], 0));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 3, 5, 8, 5, 9], 10));

3. Pseudocode [check]
4. Code [check]
5. Make It Clean and Readable [check]
6. Optimize [check]
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

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([], 0));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 3, 5, 8, 5, 9], 10));


}

module.exports = hasTargetSum;
