import studentData from './studentData.js';
import { updateGrade, calculateClassroomAverage } from './calculateClassroomAverage.js';

function renderStudentTable(table, data) {
 
    table.querySelector('tbody').innerHTML = '';

    for (const student of data) {
        const row = table.querySelector('tbody').insertRow();
        row.insertCell(0).textContent = student.id;
        row.insertCell(1).textContent = student.name;
        row.insertCell(2).textContent = student.address;

        const gradeCell = row.insertCell(3);
        const gradeInput = document.createElement('input');
        gradeInput.type = 'number';
        gradeInput.value = student.averageGrade;
        gradeInput.addEventListener('change', () => updateGrade(gradeInput, student.id));
        gradeCell.appendChild(gradeInput);
    }
}

export { renderStudentTable };
