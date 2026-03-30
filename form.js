// Form validation example
document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("form");

  form.addEventListener("submit", function(event) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();

    // Simple validations
    if (name.length < 3) {
      alert("Name must be at least 3 characters long.");
      event.preventDefault();
    }

    if (!email.includes("@")) {
      alert("Please enter a valid email address.");
      event.preventDefault();
    }

    if (phone.length < 10) {
      alert("Phone number must be at least 10 digits.");
      event.preventDefault();
    }
  });
});