function findMinAndRemove(array){
  let currentMinNum = array[0]
  let currentIdx = 0;
  for(let i = 0; i < array.length; i++) {
    if(array[i] < currentMinNum) {
      currentMinNum = array[i]
      currentIdx = i
    }
  }
  array.splice(currentIdx, 1)
  return currentMinNum
}

function insertionSort(array){
  let sortedArray = [];
  while(array.length > 0) {
    sortedArray.push(findMinAndRemove(array))
  }
  return sortedArray;
}
