function highest(marks) {
  let highest = marks[0];

  for (let i = 1; i < marks.length; i++) {
    if (marks[i] > highest) {
      highest = marks[i];
    }
  }

  return highest;
}

let studentMarks = [45, 67, 89, 34, 76, 99, 82];
console.log("Highest Marks: " + highest(studentMarks));
