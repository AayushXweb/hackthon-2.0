const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const students = [
  { id: 1, name: "Majnu", age: 29 },
  { id: 2, name: "Circuit", age: 27 },
  { id: 3, name: "Choocha", age: 19 },
  { id: 4, name: "Vasooli", age: 32 },
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
