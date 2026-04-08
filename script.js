// Store all students in an array
let students = [];

document.getElementById("addBtn").addEventListener("click", addStudent);
document.getElementById("clearBtn").addEventListener("click", clearResults);

function addStudent() {
  const name = document.getElementById("name").value.trim();
  const score1 = parseInt(document.getElementById("score1").value);
  const score2 = parseInt(document.getElementById("score2").value);
  const score3 = parseInt(document.getElementById("score3").value);

  // Input validation
  if (!name || isNaN(score1) || isNaN(score2) || isNaN(score3) || score1 > 100 
  || score2 > 100 || score3 > 100 ) {
    alert("Please fill in all fields correctly!");
    return;
  }

  // Calculate total and average
  const total = score1 + score2 + score3;
  const average = total / 3;

  // Assign grade using conditionals
  let grade;
  if (average >= 70) grade = "A";
  else if (average >= 60) grade = "B";
  else if (average >= 50) grade = "C";
  else if (average >= 45) grade = "D";
  else grade = "F";

  // Represent student as an object
  const student = {
    name,
    scores: [score1, score2, score3],
    total,
    average,
    grade
  };

  // Store student in array
  students.push(student);

  // Display results dynamically
  displayResults();
}

function displayResults() {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = ""; // Clear previous results

  students.forEach((student) => {
    const card = document.createElement("div");
    card.classList.add("result-card");
    if (student.grade === "F") card.classList.add("failed");

    card.innerHTML = `
      <strong>${student.name}</strong><br>
      Scores: ${student.scores.join(", ")}<br>
      Total: ${student.total} | Average: ${student.average.toFixed(2)}<br>
      Grade: <strong>${student.grade}</strong>
    `;

    resultsDiv.appendChild(card);
  });
}

function clearResults() {
  students = [];
  document.getElementById("results").innerHTML = "";
}