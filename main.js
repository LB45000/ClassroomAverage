import { renderStudentTable } from './studentTable.js';
import { calculateClassroomAverage, updateGrade } from './calculateClassroomAverage.js';
import studentData from './studentData.js';

document.addEventListener('DOMContentLoaded', function () {
    const table = document.getElementById('student-table');
    renderStudentTable(table, studentData);

    const initialClassroomAverage = calculateClassroomAverage(studentData);
    document.getElementById('classroom-average').textContent = `Classroom Average: ${initialClassroomAverage}`;

  
    document.getElementById('update-average-btn').addEventListener('click', function () {
        const updatedClassroomAverage = calculateClassroomAverage(studentData);
        document.getElementById('classroom-average').textContent = `Classroom Average: ${updatedClassroomAverage}`;
    });
});
