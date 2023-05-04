let testArr = [1, 2, 3, 4, 5];
function nextInLine(arr, item) {
  // Only change code below this line
 arr.push(item);
  const removed = arr.shift();
  return removed;
}

// Setup
console.log(nextInLine([], 5));
console.log(nextInLine([], 1));

console.log(nextInLine([2], 1));

console.log(nextInLine([5,6,7,8,9], 1));

console.log(nextInLine(testArr, 10));
console.log(testArr[4]);

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));