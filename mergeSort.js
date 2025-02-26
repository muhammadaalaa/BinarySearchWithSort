// merge Sort Algorithm

const mergeSortFun = function (UnsortedData, start, End) {
  if (End <= start) return;
  let midPoint = Math.floor((End + start) / 2);
  mergeSortFun(UnsortedData, start, midPoint);
  mergeSortFun(UnsortedData, midPoint + 1, End);
  Merge(UnsortedData, start, midPoint, End);
};

function Merge(UnsortedArray, start, midPoint, end) {
  //fill the two sperated array and compare each element in both area and modefy in the original array
  let lengthOfTheLeftArray = midPoint - start + 1;
  let lengthOfTheRightArray = end - midPoint;
  let leftArray = []; // i
  let RightArray = []; // j
  for (let i = 0; i < lengthOfTheLeftArray; i++) {
    leftArray[i] = UnsortedArray[i + start];
  }
  for (let j = 0; j < lengthOfTheRightArray; j++) {
    RightArray[j] = UnsortedArray[midPoint + j + 1];
  }
  let i, j, k;
  i = j = 0;
  k = start;
  while (i < lengthOfTheLeftArray && j < lengthOfTheRightArray) {
    if (leftArray[i] > RightArray[j]) {
      UnsortedArray[k] = RightArray[j];
      j++;
    } else {
      UnsortedArray[k] = leftArray[i];
      i++;
    }
    k++;
  }
  while (i < lengthOfTheLeftArray) {
    UnsortedArray[k] = leftArray[i];
    i++;
    k++;
  }
  while (j < lengthOfTheRightArray) {
    UnsortedArray[k] = RightArray[j];
    j++;
    k++;
  }
}

module.exports = mergeSortFun;
