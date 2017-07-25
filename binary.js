'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  let tamp = 0
  for (let u = 1; u <arr.length; u++){
    for (let j = 0; j < arr.length; j++) {
      if (arr[u] < arr[j]) {
        tamp = arr[u]
        arr[u] = arr[j]
        arr[j] = tamp
      }
    }
  }
  return arr
}

function binary_search (search, array) {
  let batasAwal = 0;
  let batasAkhir = array.length - 1;
  let tengah = Math.floor((batasAwal + batasAkhir) / 2);
  // console.log(tengah);

  while (batasAwal <= batasAkhir) {
    if (search === array[tengah]) {
      return tengah
    } else if (search <= array[tengah]) {
      batasAkhir = tengah-1
      tengah = Math.floor((batasAwal + batasAkhir) / 2);
    } else if (search >= array[tengah]) {
      batasAwal = tengah + 1
      tengah = Math.floor((batasAwal + batasAkhir) / 2);
    }
  }
  return -1;
}

// console.log(ownSort(testArrayGenap)); [ 8, 10, 10, 18, 22, 22, 32, 40, 90 ]
// console.log(ownSort(testArrayGanjil)); [ 3, 21, 31, 53, 53, 55, 77, 85, 89 ]


var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binary_search(22, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}
