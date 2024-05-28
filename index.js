
document.addEventListener('DOMContentLoaded', function () {
  const cardForm = document.getElementById('cardForm');
  const modal = document.getElementById('modal');
  const certificateContentElement = document.getElementById('certificateContent');
  const closeModalButton = document.getElementById('closeModal'); 
  const generateCertificateButton = document.getElementById('generateCertificateButton');

  // Hide the modal initially
  modal.style.display = 'none';

  cardForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission behavior
    generateCertificate();
  });

  generateCertificateButton.addEventListener('click', function () {
    generateCertificate();
  });

  function generateCertificate() {
     // 🚨 Get input values
    const studentNameInput = document.getElementById('studentName');
    const personalMessageInput = document.getElementById('personalMessage');
    const courseNameInput = document.getElementById('courseName');

    const studentName = studentNameInput.value;
    const personalMessage = personalMessageInput.value;
    const courseName = courseNameInput ? courseNameInput.value : "a course"; // Fallback to "a course" if no input

    if (studentName.trim() === '' || personalMessage.trim() === '') {
      alert('Please fill in all fields');
      return;
    }

    // Clear the existing certificate content
    certificateContentElement.innerHTML = '';

     // 🚨 Generate certificate content dynamically

    // Create and append certificate heading 
    const certificateHeadingElement = document.createElement('h2');
    certificateContentElement.textContent = 'Certificate of Achievement';
    certificateContentElement.appendChild(certificateHeadingElement);

    // Create and append certificate paragraph 1
    const certificateParagraph1Element = document.createElement('p');
    certificateParagraph1Element.textContent = 'This is to certify that';
    certificateContentElement.appendChild(certificateParagraph1Element);

    // Create and append the student name element
    const studentNameElement = document.createElement('h3');
    studentNameElement.textContent = studentName;
    certificateContentElement.appendChild(studentNameElement);

    // Create and append certificate paragraph 2
    const certificateParagraph2Element = document.createElement('p');
    certificateParagraph2Element.textContent = 'has almost completed the';
    certificateContentElement.appendChild(certificateParagraph2Element);

    // Create and append the course name element
    const courseNameElement = document.createElement('h3');
    courseNameElement.textContent = courseName;
    certificateContentElement.appendChild(courseNameElement);

    // Create and append certificate paragraph 3
    const certificateParagraph3Element = document.createElement('p');
    certificateParagraph3Element.textContent = 'with legendary perseverance and world class bad-assery for never giving up';
    certificateContentElement.appendChild(certificateParagraph3Element);

   // Create and append certificate image 
    const certificateImage = document.createElement('img');
    certificateImage.src = 'logo.png'; 
    certificateImage.alt = 'CodeSpace logo on certificate';
    certificateImage.classList.add('modal-image');
    certificateContentElement.appendChild(certificateImage);

    // Create and append the personal message element
    const personalMessageElement = document.createElement('p');
    personalMessageElement.textContent = personalMessage;
    certificateContentElement.appendChild(personalMessageElement);

    // Display the modal
    modal.style.display = 'block';

    // Clear the form inputs
    studentNameInput.value = '';
    personalMessageInput.value = '';
    if (courseNameInput) {
      courseNameInput.value = '';
    }
  }

 //  🚨 Close the modal when the close button is clicked
  closeModalButton.addEventListener('click', function () {
    modal.style.display = 'none';
  });
});