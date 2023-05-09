// const form = document.querySelector('form');

// form.addEventListener('submit', (event) => {
//   event.preventDefault();

//   const nameInput = document.querySelector('#name');
//   const gradeInputs = document.querySelectorAll('#grade1', '#grade2', '#grade3');
//   const name = nameInput.value.trim();
//   const grade1 = parseInt(gradeInputs[0].value.trim());
//   const grade2 = parseInt(gradeInputs[1].value.trim());
//   const grade3 = parseInt(gradeInputs[2].value.trim());

//   if (nameInput.validity.valueMissing || nameInput.validity.customError ||
//       gradeInputs[0].validity.valueMissing || gradeInputs[0].validity.customError ||
//       gradeInputs[1].validity.valueMissing || gradeInputs[1].validity.customError ||
//       gradeInputs[2].validity.valueMissing || gradeInputs[2].validity.customError) {
//     alert('Please fill in all fields with valid values!');
//     return;
//   }

//   const data = `${name},${grade1},${grade2},${grade3}\n`;

//   fetch('http://localhost:3000/save-data', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'text/plain'
//     },
//     body: data
//   })
//   .then(response => {
//     if (response.ok) {
//       alert('Data saved successfully!');
//       nameInput.value = '';
//       gradeInputs.forEach(input => input.value = '');
//     } else {
//       throw new Error('Failed to save data!');
//     }
//   })
//   .catch(error => alert(error.message));

//   // if all fields are filled in and all grades are valid, save the data to localStorage
//   const studentsData = JSON.parse(localStorage.getItem('studentsData')) || [];
//   studentsData.push({
//     name,
//     grades: [grade1, grade2, grade3]
//   });
//   localStorage.setItem('studentsData', JSON.stringify(studentsData));
// });
