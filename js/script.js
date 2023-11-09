// Show or hide password
function togglePasswordVisibility(passwordInputId) {
  const passwordInput = document.getElementById(passwordInputId);
  passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
}