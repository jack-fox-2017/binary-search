'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  for(var i = 1; i < arr.length; i++) {
    for (var j = 0; j < i; j++) {
      if (arr[j] > arr[i]) {
        var tamp = arr[j]
        arr[j] = arr[i]
        arr[i] = tamp
      }
    }
  }
  return arr
}

function binary_search(search, array) {
var star = 0;
var end = array.length-1;
var mid = Math.floor(star + end) / 2;

while (star <= end) {
  mid = Math.floor((star + end) / 2);
    if (search == array[mid]) {
      return mid;
    }
    else if (search > array[mid]) {
      star = mid +1
    }
    else if (search < array[mid]) {
      end = mid -1
    }
}
  return -1;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(ownSort(arrayGenapSorted));
console.log(ownSort(arrayGanjilSorted));
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

// module.exports = {
//   binary_search
// }
