/* Product of an array */
/* write an function that takes an array of numbers and returns the product of them all */

/* e.g. [1,2,3]   returns 6 */
/* e.g. [1,2,3, 10]   returns 60 */
function productOfArr(nums) {
  if (nums.length == 0) {
    return 1;
  }
  return nums.pop() * productOfArr(nums);
}

console.log(productOfArr([1, 2, 3, 10])); // 60

/* EXAMPLE 2; write a recursive function which recieves an array and rtns a new array with all values doubled. */
// e.g. double([1,2,3])  =>  [2,4,6]
function doubleArray(nums) {
  if (nums.length == 0) {
    return [];
  }
  return [].concat(nums.shift() * 2, doubleArray(nums));
}

console.log(doubleArray([1, 2, 3])); //  =>  [2,4,6]
