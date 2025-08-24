// Student Marks Calculator


let student = {
    name: "Md Kamil Kaushar Mallick",
    marks: {
        math: 85,
        science: 90,
        english: 75,
        history: 80,
        computer: 95
    }
};

// Calculate total marks
let total = 0;
let subjectCount = 0;

for (let subject in student.marks) {
    total += student.marks[subject];
    subjectCount++;
}

let average = total / subjectCount;
let percentage = (total / (subjectCount * 100)) * 100;

// Print results
console.log("Student Name: " + student.name);
console.log("Total Marks: " + total);
console.log("Average Marks: " + average.toFixed(2));
console.log("Percentage: " + percentage.toFixed(2) + "%");

// Simple Grade System
if (percentage >= 90) {
    console.log("Grade: A+");
} else if (percentage >= 75) {
    console.log("Grade: A");
} else if (percentage >= 60) {
    console.log("Grade: B");
} else if (percentage >= 40) {
    console.log("Grade: C");
} else {
    console.log("Grade: Fail");
}