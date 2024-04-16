document.getElementById('add-course').addEventListener('click', function() {
    const courses = document.getElementById('courses');
    const courseDiv = document.createElement('div');
    courseDiv.classList.add('course');
    courseDiv.innerHTML = `
        <input type="text" class="course-name" placeholder="Course Name">
        <input type="number" class="credit-points" placeholder="Credit Points">
        <select class="grade">
            <option value="10">O</option>
            <option value="9">A+</option>
            <option value="8">A</option>
            <option value="7">B+</option>
            <option value="6">B</option>
            <option value="5">C</option>
        </select>
    `;
    courses.appendChild(courseDiv);
});

document.getElementById('calculate').addEventListener('click', function() {
    const courses = document.getElementsByClassName('course');
    let totalCreditPoints = 0;
    let totalGradePoints = 0;

    for (let course of courses) {
        const creditPoints = parseFloat(course.querySelector('.credit-points').value);
        const grade = parseFloat(course.querySelector('.grade').value);

        if (!isNaN(creditPoints) && !isNaN(grade)) {
            totalCreditPoints += creditPoints;
            totalGradePoints += creditPoints * grade;
        }
    }

    if (totalCreditPoints === 0) {
        document.getElementById('result').textContent = "Please add some courses to calculate GPA.";
    } else {
        const gpa = totalGradePoints / totalCreditPoints;
        document.getElementById('result').textContent = `Your GPA is: ${gpa.toFixed(2)}`;
    }
});
