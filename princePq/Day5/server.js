const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const students = [
  { id: 1, name: "Rahul", age: 20 },
  { id: 2, name: "Priya", age: 22 },
  { id: 3, name: "Aman", age: 19 },
  { id: 4, name: "Sneha", age: 21 },
];
app.get("/students", (req, res) => {
  res.json(students);
});
app.use(express.json());
app.post("/students", (req, res) => {
  const newStudent = req.body;
  students.push(newStudent);
  res.status(201).json({ message: "Student added!", data: newStudent });
});
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
