'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  var temp = 0;
  for (var i = 1; i < arr.length; i++) {
    for (var j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr
}

function binary_search (search, array) {
  // Your searching code
  console.log('array Sort',array);
  console.log('target',search);
  var midIndex = 0;
  var lowIndex = 0;
  var maxIndex = array.length-1;

  while (lowIndex<=maxIndex) {
    midIndex = Math.floor(((lowIndex + maxIndex)/2));
    var midElement = array[midIndex];
    if(midElement < search) {
      lowIndex = midIndex + 1;
    } else if (midElement > search) {
      maxIndex = midIndex - 1;
    } else {
      return midIndex
    }

  }
  return -1
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))
console.log(binary_search(90, arrayGenapSorted))
//
console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}
