document.getElementById("processImage").addEventListener("click", () => {
  const fileInput = document.getElementById("imageUpload");
  const feedback = document.getElementById("feedback");

  if (fileInput.files.length === 0) {
    feedback.textContent = "Please upload an image first.";
    return;
  }

  const file = fileInput.files[0];
  const reader = new FileReader();

  // Simulate image processing
  feedback.textContent = "Processing your exam paper...";
  reader.onload = () => {
    setTimeout(() => {
      feedback.innerHTML = `
        <strong>Exam Processed!</strong><br>
        Mock Result: 85/100<br>
        Feedback: Excellent work overall. Review the missed questions for improvement.
      `;
    }, 2000); // Simulating a delay
  };

  reader.readAsDataURL(file); // Simulating reading the file
});
