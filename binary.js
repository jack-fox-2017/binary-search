'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55] //[ 3, 21, 31, 53, 53, 55, 77, 85, 89 ]

function ownSort(arr) {
  var tmp = 0;
  for(var i=1;i<arr.length;i++){
    for(var j=0;j<arr.length;j++){
      if(arr[i]<arr[j]){
        tmp = arr[i];
        arr[i]=arr[j];
        arr[j]=tmp;
      }
    }
  }
  // Your sorting code
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
  // Your searching code
}
//[ 8, 10, 10, 18, 22, 22, 32, 40, 90 ]

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

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
