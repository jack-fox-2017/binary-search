'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for (let i =0; i < arr.length; i++)
  {
    for (let j =0; j < arr.length; j++)
    {
      if(arr[i] < arr [j])
      {
        var newArr = arr[j];
        arr[j]= arr[i];
        arr[i]=newArr;
      }
    }
  // arr.splice(0,0, arr[1]);
  // arr.splice(2,1);
}
  return arr
}

function binarySearch (search, array) {
  // Your searching code
  var atas = array.length-1
  var bawah = 0;

  // var indexnow;
  // var angkanow;
  while (bawah <= atas)
    {
      var mid = Math.floor((atas+bawah)/2)
      if (search > array[mid])
      {
        bawah = mid +1;
      }
      else if (search < array[mid])
      {
        atas = mid - 1;
      }
      else if (search == array[mid]){
        {
          return mid;
        }
      }
    }
  return -1;
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
