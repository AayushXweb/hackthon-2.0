function Sort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
let marks = [33, 78, 79, 34, 33, 97];
let sortedMarks = Sort(marks);
let highest = sortedMarks[sortedMarks.length - 1];
console.log("Highest Marks:", highest);
