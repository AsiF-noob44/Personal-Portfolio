document
  .getElementById("contact-form")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const response = await fetch("http://localhost:3000/submit-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(formData),
    });

    const messageDiv = document.getElementById("response-message");
    if (response.ok) {
      messageDiv.textContent = "Form submitted successfully!";
    } else {
      messageDiv.textContent = "There was an error submitting the form.";
    }
  });
