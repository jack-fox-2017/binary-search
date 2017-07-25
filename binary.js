'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for(let i=0; i<arr.length;i++){
    let min = i;
    //console.log(arr[i]);
    for(let j=i+1;j<arr.length;j++){
      if(arr[j] < arr[min] ){
        min = j;
      }
    }
    var result = arr[i];
    arr[i] = arr[min];
    arr[min] = result;
  }
  return arr
}
//console.log(ownSort(testArrayGenap));
//console.log(ownSort(testArrayGanjil));

function binarySearch(search, array) {
  // Your searching code
  var start = 0;
  var end = array.length-1;

  while(start <= end){
    var middle = Math.floor((start+end)/2);
    if(search === array[middle]){
      return middle;
    }
    if(search < array[middle]){
      end = middle - 1 ;
    }
    if(search > array[middle]){
      start = middle + 1;
    }
  }
  return -1;
  //return 0;
}

var genapSorted = ownSort(testArrayGenap)
console.log(genapSorted);
var ganjilSorted = ownSort(testArrayGanjil)
console.log(ganjilSorted);

// Driver code
console.log(binarySearch(8, genapSorted))
console.log(binarySearch(10, genapSorted))
console.log(binarySearch(33, genapSorted))

console.log(binarySearch(53, ganjilSorted))
console.log(binarySearch(3, ganjilSorted))
console.log(binarySearch(2, ganjilSorted))

module.exports = {
  binarySearch
}
