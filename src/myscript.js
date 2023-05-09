// function to validate the student name
function validateName(name) {
  const regex = /^[a-zA-Z\s-]+$/;
  return regex.test(name);
}

// function to handle the form submission
function handleSubmit(event) {
  event.preventDefault();

  const nameInput = document.getElementById("name");
  const grade1Input = document.getElementById("grade1");
  const grade2Input = document.getElementById("grade2");
  const grade3Input = document.getElementById("grade3");

  // validate the name
  const name = nameInput.value;
  if (!validateName(name)) {
    alert(
      "Please enter a valid name (containing no digits or special characters)."
    );
    return;
  }

  const grade1 = parseInt(grade1Input.value);
  const grade2 = parseInt(grade2Input.value);
  const grade3 = parseInt(grade3Input.value);
  const average = (grade1 + grade2 + grade3) / 3;

  if (isNaN(average) || average < 0 || average > 100) {
    alert("Please enter valid grades (between 0 and 100).");
    return;
  }

  const student = {
    name: name,
    grade1: grade1,
    grade2: grade2,
    grade3: grade3,
  };
  saveFormToLocalStorage(student);
}

function saveFormToLocalStorage(student) {
  // get the form data
  const name = student.name;
  const grade1 = student.grade1;
  const grade2 = student.grade2;
  const grade3 = student.grade3;

  const csvString = `${name},${grade1},${grade2},${grade3}\n`;
  const existingData = localStorage.getItem("grades");

  if (!existingData) {
    localStorage.setItem("grades", csvString);
  } else {
    localStorage.setItem("grades", existingData + csvString);
  }

  document.getElementById("myForm").reset();
  console.log("Form data saved to local storage as CSV file!");
}

const form = document.getElementById("myForm");
form.addEventListener("submit", handleSubmit);
