var students = ["Manuel", "Kboss", "Korone", "Diego"];

function greetStudents(student) {
  console.log(`Hello ${student}`);
}

// for
console.log("for");
for (let i = 0; i < students.length; i++) {
  greetStudents(students[i]);
}

// for of
console.log("for of");
for (const student of students) {
  greetStudents(student);
}