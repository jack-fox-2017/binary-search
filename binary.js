'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for (var i = 1; i < arr.length; i++) {
  	for (var j = 0; j < arr.length; j++) {
  		if (arr[i] < arr[j]) {
  			var temp = arr[i]
  			arr[i] = arr[j]
  			arr[j] = temp
  		}
  	}
  }
  return arr
}

function binary_search (search, array) {
  // Your searching code
  var ujungKiri = 0
  var ujungKanan = array.length - 1
  var mid = Math.ceil((ujungKiri + ujungKanan) / 2)

  while (ujungKiri < mid && mid < ujungKanan) {
  // console.log(ujungKiri, mid, ujungKanan);
  	if (search == array[mid]) return mid
  	else if (search == array[ujungKiri]) return ujungKiri
  	else if (search == array[ujungKanan]) return ujungKanan
  	else {
	  	var kiri = search <= array[mid]
	  	var kanan = search <= array[ujungKanan]
  		
  		if (kiri && kanan) {
  			ujungKanan = mid
  		} else {
  			ujungKiri = mid
  		}

  		mid = Math.ceil((ujungKiri + ujungKanan) / 2)
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