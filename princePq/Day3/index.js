let student = {
  name: "prince",
  marks: [85, 92, 78, 88, 90],
};
function calculateMarks(student) {
  let total = student.marks.reduce((sum, mark) => sum + mark, 0);
  let average = total / student.marks.length;

  return {
    name: student.name,
    total: total,
    average: average,
  };
}
let result = calculateMarks(student);
console.log("Name:", result.name);
console.log("Total Marks:", result.total);
console.log("Average Marks:", result.average.toFixed(2));
