'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  for(let i=1; i<arr.length; i++) {
    for(let z=0; z<arr.length; z++){
      if (arr[i]<arr[z]){
        var temp =0;
        temp = arr[i]
        arr[i] = arr[z]
        arr[z] = temp;
      }
    }
  }
  return arr;
}

function binary_search(search, arr) {
  var start = 0 ;
  var end = arr.length-1;
  var mid = Math.floor((start+end)/2);
  while (end-start>=0) {
   mid = Math.floor((start+end)/2);
    if (search == arr[mid]) {
      return mid;
    }
    else if (search > arr[mid]){
       start = mid+1;
    }
    else if (search < arr[mid] ){
       end = mid-1;
    }
  }
  return '-1';
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(arrayGenapSorted);
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(arrayGanjilSorted);
console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}
