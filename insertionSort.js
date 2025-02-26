//Two Types of sortition
//1- Insertion Sort
//using two nested loops one of them is to identify one element and looking for the previous elements to check if that elements is greater than that element or not
//steps of insertion sort
// first loop going forward
//storing the current value in a variable
//second looping going backward checking this variable is greater than or not
// we can do this with while loop
// or with for loop with using var
// returning the sorted array
const insertionSort = function (UnsortedArray) {
  for (let i = 0; i < UnsortedArray.length; i++) {
    let key = UnsortedArray[i];
    // =============================================nested loop using var instead of let================================
    // for (var j = i - 1; j >= 0; j--)
    //   if (key < UnsortedArray[j]) UnsortedArray[j + 1] = UnsortedArray[j];
    // UnsortedArray[j + 1] = key;
    //===============================================while loop=================================================
    let j = i - 1;
    while (UnsortedArray[j] > key) {
      UnsortedArray[j + 1] = UnsortedArray[j];
      j--;
    }
    UnsortedArray[j + 1] = key;
  }
  return UnsortedArray;
}

module.exports = insertionSort;