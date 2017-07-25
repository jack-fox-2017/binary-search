'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  var temp = [];
  var min = Math.min(...arr);
  var index = arr.indexOf(min);
  while (arr.length > 0) {
    min = Math.min(...arr)
    index = arr.indexOf(min);
    temp.push(min);
    arr.splice(index, 1);
  }
  return temp
}

function binarySearch(search, array, start = 0, end = array.length - 1) {
  // Your searching code

  let mid = Math.floor((start + end) / 2);
  if (end < start) {
    return -1;
  }
  else if (search > array[mid]) {
    return binarySearch(search, array, mid + 1, end);
  }
  else if (search < array[mid]) {
    return binarySearch(search, array, start, mid - 1);
  }
  else {
    return mid;
  }
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binarySearch(8, arrayGenapSorted))
console.log(binarySearch(10, arrayGenapSorted))
console.log(binarySearch(33, arrayGenapSorted))

console.log(binarySearch(53, arrayGanjilSorted))
console.log(binarySearch(3, arrayGanjilSorted))
console.log(binarySearch(2, arrayGanjilSorted))

module.exports = {
  binarySearch
}
