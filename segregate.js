// first of all sperate the arrays into indivuals array and compare between elements and make the negative elements first

function separateElements(array, start, end) {
  if (start >= end) return;
  let mid = Math.floor((start + end) / 2);
  separateElements(array, start, mid);
  separateElements(array, mid + 1, end);
  merge(array, start, mid, end);
}

function merge(array, start, mid, end) {
  let lengthOfLeftArray = mid - start + 1;
  let lengthOfRightArray = end - mid;
  let leftArray = [];
  let rightArray = [];
  for (let i = 0; i < lengthOfLeftArray; i++) {
    leftArray[i] = array[i + start];
  }
  for (let j = 0; j < lengthOfRightArray; j++) {
    rightArray[j] = array[j + mid + 1]; 
  }
  let i = (j = 0);
  let k = start;
  while (lengthOfLeftArray > i && leftArray[i] <= 0) {
    array[k++] = leftArray[i++];
  }
  while (lengthOfRightArray > j && rightArray[j] <= 0) {
    array[k++] = rightArray[j++];
  }
  while (lengthOfLeftArray > i) {
    array[k++] = leftArray[i++];
  }
  while (lengthOfRightArray > j) {
    array[k++] = rightArray[j++];
  }
}

let arr = [5,-1,6,4,-9,8,-7]

separateElements(arr,0,arr.length-1);
console.log(arr);
