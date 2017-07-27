'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for(let i=1;i<arr.length;i++){
    for(let j=0;j<i-1;j++){
      if(arr[i]<arr[j]){
        let temp = arr[j];
        arr[j]=arr[i];
        arr[i]=temp;
      }
    }
  }
  return arr
}

function binary_search (search, arr) {
  // Your searching code
  let min = 0;
	let max = arr.length - 1;

  while ( min <= max){
      let guess = Math.floor((min+max)/2);
      if(arr[guess] === search){
        return guess;
      }
      else if(arr[guess] < search){
        min = guess+1;
      }
      else{
        max = guess - 1;
      }
  }
  return -1;
}

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
