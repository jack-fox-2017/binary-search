'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  let newArr = [];
  while(arr.length != 0){
    let min = Math.min(...arr);
    newArr.push(min);
    arr.splice(arr.indexOf(min),1);
  }
  //console.log(newArr);
  return newArr;
}

function binary_search (search, array) {
  // Your searching code
  //console.log(array);
  let top = 0;
  let bot = array.length-1;
  let found = false;
  let mid = 0;
  while(bot-top >= 0 && !found){
    mid = Math.floor((top+bot)/2);
    // console.log('top:', top);
    // console.log('bot:', bot);
    // console.log('mid:', mid);
    // console.log('arr mid:',array[mid]);
    if(array[mid]==search){
      found = true;
    }else {
      if(array[mid]<search){
        top = mid+1;
      }else {
        bot = mid-1;
      }
    }
  }
  if(found){
    return mid;
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
