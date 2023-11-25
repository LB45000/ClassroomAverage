function calculateClassroomAverage(studentData) {
    const totalGrades = studentData.reduce((sum, student) => sum + student.averageGrade, 0);
    const classroomAverage = totalGrades / studentData.length;
    return classroomAverage.toFixed(2);
}

export { calculateClassroomAverage };
