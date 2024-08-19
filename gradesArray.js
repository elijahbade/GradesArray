// Task Objective: Create a robust program that manages a list of student grades using both first-order and higher-order array methods.
// Task Description:
// Initialize an Array of Grades:


// Initialize an array of grades
let grades = [85, 50, 60, 10, 0, 34, 54, 78, 92, 78, 88, 90, 67, 95, 24];

// Add and Remove Grades
grades.push(80); 
let removedGrade = grades.pop(); 
grades.unshift(98); 
removedGrade = grades.shift(); 

// Modify the Array
grades.splice(2, 1, 82); // Replace the third grade with 82
let newGrades = grades.slice(3); // Create a new array from index 3

// Combine and Split Arrays
let moreGrades = [75, 83];
let combinedGrades = grades.concat(moreGrades);
let gradeString = grades.join(", ");

// Reverse and Sort Grades
grades.reverse();
grades.sort((a, b) => a - b); // Sort numbers in ascending order

// Iterate and Transform Grades
for (let i = 0; i < grades.length; i++) {
  console.log(grades[i]);
}
let increasedGrades = [];
for (let i = 0; i < grades.length; i++) {
  increasedGrades.push(grades[i] + 5);
}

// Filter and Analyze Grades
let passingGrades = [];
for (let i = 0; i < grades.length; i++) {
  if (grades[i] >= 70) {
    passingGrades.push(grades[i]);
  }
}
let totalSum = 0;
for (let i = 0; i < grades.length; i++) {
  totalSum += grades[i];
}
let foundGrade = null;
for (let i = 0; i < grades.length; i++) {
  if (grades[i] === 88) {
    foundGrade = grades[i];
    break;
  }
}
let below70Index = -1;
for (let i = 0; i < grades.length; i++) {
  if (grades[i] < 70) {
    below70Index = i;
    break;
  }
}
let hasBelow60 = false;
for (let i = 0; i < grades.length; i++) {
  if (grades[i] < 60) {
    hasBelow60 = true;
    break;
  }
}
let allAbove50 = true;
for (let i = 0; i < grades.length; i++) {
  if (grades[i] <= 50) {
    allAbove50 = false;
    break;
  }
}

// Check for Existence
let includes85 = grades.includes(85);