'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  let push = [];
  let temp = 0 ;
  for(let i=1; i<arr.length; i++)// sorting ascending
  {
    for(let x=0; x<i; x++)
    {
      if(arr[i] < arr[x])
      {
        temp = arr[i];
        arr[i] = arr[x];
        arr[x] = temp;

      }
    }
  }
  //console.log(arr);
  //console.log(push);
  return arr;
}

function binary_search (search, array) {
  // Your searching code
   var panjang = array.length;
   //console.log(panjang);
  for(let i=0; i<panjang; i++)
  {
    if(search == array[i])
    {
      return i;
    }
  }
  return -1;
}

// let i = 0
// while(i<panjang) {
//   ...
//   i++
// }

var arrayGenapSorted = ownSort(testArrayGenap)
console.log(`=====> ${arrayGenapSorted}`);
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))
//
console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}
