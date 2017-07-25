'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for(let i = 1; i < arr.length; i++){
    for(let j = 0; j < i; j++){
      if(arr[i] < arr[j]){
        let swap = arr[i]
        arr[i] = arr[j]
        arr[j] = swap
      }
    }
  }
  return arr
}

function binary_search (search, array) {
  let awal = 0
  let akhir = array.length-1
  let tengah = Math.floor((awal + akhir)/2)
  while(awal <= akhir){
    if(search == array[tengah]){
      return tengah
    } else if(search <= array[tengah]){
      akhir = tengah-1
      tengah = Math.floor((awal + akhir)/2)
    } else if(search >= array[tengah]){
      awal = tengah+1
      tengah = Math.floor((awal + akhir)/2)
    }
  }

  return -1;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)


console.log(arrayGenapSorted);
console.log(arrayGanjilSorted);
// Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}
