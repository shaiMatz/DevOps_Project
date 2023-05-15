// function to validate the student name
function validateName(name) {
  const regex = /^[a-zA-Z\s-]+$/;
  return regex.test(name);
}

// function to handle the form submission
function saveGradesToLocalStorage() {
  console.log("saveGradesToLocalStorage() called");
  const nameInput = document.getElementById("name");
  const grade1Input = document.getElementById("grade1");
  const grade2Input = document.getElementById("grade2");
  const grade3Input = document.getElementById("grade3");

  // validate the name
  const name = nameInput.value;
  if (!validateName(name)) {
    alert("Please enter a valid name (containing no digits or special characters).");
    return 0;
  }

  const grade1 = parseInt(grade1Input.value);
  const grade2 = parseInt(grade2Input.value);
  const grade3 = parseInt(grade3Input.value);
  const average = (grade1 + grade2 + grade3) / 3;

  if (isNaN(average) || average < 0 || average > 100) {
    alert("Please enter valid grades (between 0 and 100).");
    return 0;
  }

  const csvString = `${name},${grade1},${grade2},${grade3}\n`;
  const existingData = localStorage.getItem("grades");

  if (!existingData) {
    localStorage.setItem("grades", csvString);
  } else {
    localStorage.setItem("grades", existingData + csvString);
  }

  return 1;
}

// function to display the grades
function displayGrades() {
  const grades = localStorage.getItem("grades");
  const gradesArray = grades.split("\n");
  const tableBody = document.getElementById("tableBody");
  document.getElementById('table').style.visibility = 'visible';
  document.getElementById('table').style.display = 'table';
  document.getElementById('table').style.borderCollapse = 'collapse';

  // Check if there is any existing data in the table
  const existingData = tableBody.innerHTML.trim();
  // If there is no existing data or it is different from the new data, update the table
  if (existingData !== grades) {
    tableBody.innerHTML = "";
    const headerRow = document.createElement("tr");
    const nameHeader = document.createElement("th");
    const nameHeaderText = document.createTextNode("Name");
    nameHeader.appendChild(nameHeaderText);
    headerRow.appendChild(nameHeader);

    const grade1Header = document.createElement("th");
    const grade1HeaderText = document.createTextNode("Grade 1");
    grade1Header.appendChild(grade1HeaderText);
    headerRow.appendChild(grade1Header);

    const grade2Header = document.createElement("th");
    const grade2HeaderText = document.createTextNode("Grade 2");
    grade2Header.appendChild(grade2HeaderText);
    headerRow.appendChild(grade2Header);

    const grade3Header = document.createElement("th");
    const grade3HeaderText = document.createTextNode("Grade 3");
    grade3Header.appendChild(grade3HeaderText);
    headerRow.appendChild(grade3Header);

    tableBody.appendChild(headerRow);

    for (let i = 0; i < gradesArray.length; i++) {
      const row = document.createElement("tr");
      const rowData = gradesArray[i].split(",");

      if (rowData.length !== 4) {
        continue;
      }

      for (let j = 0; j < rowData.length; j++) {
        const cell = document.createElement("td");
        const cellText = document.createTextNode(rowData[j]);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }

      tableBody.appendChild(row);
    }
  }
}

// function to clear local storage
function clearLocalStorage() {
  const confirmation = confirm("Are you sure you want to delete all saved data?");

  if (confirmation) {
    localStorage.clear();
    alert("All saved data has been deleted.");
  }
}


try {
  module.exports = { validateName, saveGradesToLocalStorage };
} catch (e) { console.log("module.exports not found.. not big deal") }

if (typeof window !== 'undefined') {
  window.validateName = validateName;
}
