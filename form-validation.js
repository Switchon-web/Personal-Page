document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("formMessage");

  if (!name || !email || !message) {
    formMessage.textContent = "Please fill out all fields.";
    formMessage.style.color = "red";
  } else {
    formMessage.textContent = "Thanks for reaching out, Sadiq will get back to you! (I won't)";
    formMessage.style.color = "green";

  }
});