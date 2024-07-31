export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  const students = listStudents.filter((student) => student.location === city);

  for (const student of students) {
    student.grade = 'N/A';
  }

  return students.map((student) => {
    for (const grade of newGrades) {
      if (student.studentId === grade.studentId) {
        return { ...student, grade: grade.grade };
      }
    }
    return student;
  });
}

