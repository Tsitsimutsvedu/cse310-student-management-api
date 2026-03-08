const express = require('express');
const router = express.Router();
let students = require('../data/students');


// GET all students
router.get('/', (req, res) => {
    res.json(students);
});


// GET single student
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    res.json(student);
});


// ADD new student
router.post('/', (req, res) => {
    const { name, course } = req.body;

    const newStudent = {
        id: students.length + 1,
        name,
        course
    };

    students.push(newStudent);

    res.status(201).json(newStudent);
});


// UPDATE student
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    const { name, course } = req.body;

    student.name = name || student.name;
    student.course = course || student.course;

    res.json(student);
});


// DELETE student
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);

    students = students.filter(s => s.id !== id);

    res.json({ message: "Student deleted successfully" });
});

module.exports = router;