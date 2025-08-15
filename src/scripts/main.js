const btn = document.getElementById('greet-btn');
const greeting = document.getElementById('greeting');

btn.addEventListener('click', () => {
  const nameField = document.querySelector('md-outlined-text-field');
  const name = nameField.value.trim();
  greeting.textContent = name
    ? `Hello, ${name}! Welcome to Material 3.`
    : 'Please enter your name.';
});
