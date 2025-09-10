const students = [
    { name: "Іван", grades: [90, 80, 100] },
    { name: "Марія", grades: [75, 85, 95] },
    { name: "Петро", grades: [80, 85, 55] } 
];

function analyzeGrades(students) {
    const uniqueAverages = new Set();
  
    for (const student of students) {
      if (student.grades.some(grade => typeof grade !== 'number')) {
        throw new Error(`Некоректне значення оцінки у студента ${student.name}`);
      }
      
      const average = student.grades.reduce((sum, grade) => sum + grade, 0) / student.grades.length;
      uniqueAverages.add(average);
    }
  
    return uniqueAverages;
  }
  
  try {
    console.log(analyzeGrades(students));
  } catch (error) {
    console.error(error.message);
  }