const insertionSort = require("./insertionSort");
const mergeSortFun = require("./MergeSort");

//  Binary Search
function BinarySearch(sortedData, key) {
  //steps
  // read low and high
  // calc the mid point
  // if sortedData[mid] == key ==> return Key
  // if sortedData[mid] < key ==> low = mid + 1 ==> and repeat same process
  // if sortedData[mid] > key ==> high = mid -1 ==> and repeat same process
  let low = 0;
  let high = sortedData.length - 1;

  while (high >= low) {
    let mid = Math.floor((high + low) / 2);
    if (sortedData[mid] == key) return mid;
    sortedData[mid] > key ? (high = mid - 1) : (low = mid + 1);
    // if (sortedData[mid] < key) low = mid + 1;
    // else high = mid - 1;
  }
  return -1;
}

let sortedData = insertionSort([5, 4, 3, 2, 1]);
console.log(
  "==================sorting using insertion sort==========================="
);

console.log(sortedData);
console.log(
  "==================searching with BinarySearch==========================="
);

console.log(BinarySearch(sortedData, 3));

console.log(
  "==================sorting using merge sort sort==========================="
);

let UnsortedArray = [5, 6, 9, 5, 4, 1];
mergeSortFun(UnsortedArray, 0, UnsortedArray.length - 1);
console.log(UnsortedArray);

console.log(
  "==================searching with binary search after merge==========================="
);

console.log(BinarySearch(UnsortedArray, 5));
