// the main idea to this algorithm to choose the brst option write now
//steps
//1 we will have two pointers
// we will have two arrays
// we will supose the o/p data sorted
// we will take the first event because the data is already sorted so we will not have after this event an earier event
//if the first event end time equal the start of the next event will append this index
//and make the old end time equal the new end time
//else increase the pointer of the start time

function maxCountOfAttendance(StartArray, EndArray) {
  let i = 1,
    k = 0;
  let result = [0];
  for (; i < StartArray.length; i++) {
    if (EndArray[k] <= StartArray[i]) {
        result.push(i);
        k=i
    }
  }
  console.log(result);
}
let StartArray = [9,10,11,12,13,14,15]
let EndArray = [11,11,12,14,15,16]

maxCountOfAttendance(StartArray,EndArray)

