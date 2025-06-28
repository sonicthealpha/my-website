document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const status = document.getElementById('status');

  if (!name || !email || !message) {
    status.textContent = 'Please fill in all fields.';
    status.style.color = 'red';
    return;
  }

  // Simulate sending message
  status.textContent = 'Sending...';
  status.style.color = '#333';

  setTimeout(() => {
    status.textContent = 'Message sent successfully! Thank you.';
    status.style.color = 'green';
    document.getElementById('contactForm').reset();
  }, 1200);
});
