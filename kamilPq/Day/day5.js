
const express = require('express');
const app = express();


const students = [
    { id: 1, name: "Md Kamil", age: 20, grade: "A+" },
    { id: 2, name: "Aayush", age: 24, grade: "B" },
    { id: 3, name: "Prince", age: 20,grade: "A" }
];

app.get('/students', (req, res) => {
    res.json(students); 
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000/students");
});