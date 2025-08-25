const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const students = [
  { id: 1, name: "Rahul", age: 20 },
  { id: 2, name: "Priya", age: 22 },
  { id: 3, name: "Aman", age: 19 },
  { id: 4, name: "Sneha", age: 21 },
];
app.get("/", (req, res) => {
  res.send("Welcome to Student API 👩‍🎓👨‍🎓 - use /students to see list");
});
app.get("/students", (req, res) => {
  res.json(students);
});
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
