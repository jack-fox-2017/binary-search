'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for (let i=1; i<arr.length; i++) {
    for (let j=0; j<i; j++) {
      if (arr[i] < arr[j]) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}

function binarySearch (search, array) {
  // Your searching code
  var bBawah = 0
  var bAtas = array.length-1
  var bTengah = Math.floor((bBawah+bAtas)/2)
  // console.log(bTengah);

  while (bBawah<=bAtas) {
    // console.log('bAtas:',bAtas);
    // console.log('bBawah:',bBawah);
    // console.log('bTengah:',bTengah);
    if (search == array[bTengah]) {
      return bTengah
    }
    else if (search > array[bTengah]) {
      bBawah = bTengah+1
      bTengah = Math.floor((bBawah+bAtas)/2)
    }
    else if (search < array[bTengah]) {
      bAtas = bTengah-1
      bTengah = Math.floor((bBawah+bAtas)/2)
    }
  }

  return -1;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)
// console.log(arrayGenapSorted);
// console.log(arrayGanjilSorted);

// Driver code
console.log(binarySearch(8, arrayGenapSorted))
console.log(binarySearch(10, arrayGenapSorted))
console.log(binarySearch(33, arrayGenapSorted))
//
console.log(binarySearch(53, arrayGanjilSorted))
console.log(binarySearch(3, arrayGanjilSorted))
console.log(binarySearch(2, arrayGanjilSorted))

module.exports = {
  binarySearch
}
