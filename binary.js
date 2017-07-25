'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  let temp = 0;
  for (var i = 1; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if(arr[i] < arr[j]){
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr
}

//console.log(ownSort(testArrayGenap));


function binary_search (search, array) {
  // Your searching code
  var nilai_atas = 0;
  var nilai_bawah = array.length;
  var nilai_tengah = (nilai_bawah-nilai_atas)/2

for (var i = 0; i < array.length; i++) {
  let nilaiawal = 0;
  let nilaiakhir = array.length;
    while(nilaiawal <= nilaiakhir){                  // while akan berhenti ketika search == array[nilaitengah] return nilaitengah
      let nilaitengah = Math.floor((nilaiawal+nilaiakhir)/2);
        if(search > array[nilaitengah]){
          nilaiawal = nilaitengah + 1
        }else if (search < array[nilaitengah]){
          nilaiakhir = nilaitengah - 1
        }else{
           return nilaitengah;
        }
    }
    return - 1;
  }
}

var arrayGanjilSorted = ownSort(testArrayGanjil)
var arrayGenapSorted = ownSort(testArrayGenap)

// Driver code
console.log("Array Genap");
console.log(ownSort(testArrayGenap));
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log("Array Ganjil")
console.log(ownSort(testArrayGanjil));
console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}
