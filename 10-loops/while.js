var students = ["Manuel", "Kboss", "Miki Matsubara", "Diego"];

function greetStudents(student) {
  console.log(`Hello ${student}`);
}

while (students.length > 0) {
  console.log(students);
  greetStudents(students.shift());
}