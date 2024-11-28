const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

hamburger.addEventListener('click', () => {
    sidebar.style.right = '0';
    overlay.style.display = 'block';
});

overlay.addEventListener('click', () => {
    sidebar.style.right = '-300px';
    overlay.style.display = 'none';
});

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const feedback = document.getElementById("form-feedback");
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!name || !email || !message) {
      feedback.textContent = "Please fill in all fields.";
      feedback.style.color = "red";
      return;
    }
  
    if (!emailRegex.test(email)) {
      feedback.textContent = "Please enter a valid email address.";
      feedback.style.color = "red";
      return;
    }
  
    this.reset();
    feedback.textContent = "Thank you for your message!";
    feedback.style.color = "green";
  });