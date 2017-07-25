'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  var temp = 0;
  for(let i=1; i<arr.length; i++){
    for(let j=0; j<i; j++){
      if(arr[j]>arr[i]){
        temp = arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
      }
    }
  }
  return arr;

}

function binary_search (search, array) {
  let nilaiAwal=0;
  let nilaiAkhir=array.length-1;
  let nilaiTengah= Math.floor((nilaiAwal+nilaiAkhir)/2)

  while(nilaiAwal <= nilaiAkhir){
    nilaiTengah= Math.floor((nilaiAwal+nilaiAkhir)/2)

    if(array[nilaiTengah] > search){
      nilaiAkhir = nilaiTengah-1
    }
    else if(array[nilaiTengah] < search){
      nilaiAwal = nilaiTengah+1
    }
    else{
      return nilaiTengah;
    }

  }

  return -1
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
