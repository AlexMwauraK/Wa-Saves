function togglePasswordVisibility(passwordInputId) {
  const passwordInput = document.getElementById(passwordInputId);
  passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
}

function checkPasswordMatch() {
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const mismatchMessage = document.getElementById('passwordMismatch');
  const signUpButton = document.getElementById('signupButton');

  if (password === confirmPassword) {
    mismatchMessage.style.display = 'none';
    signUpButton.style.display = 'block';
  } else {
    mismatchMessage.style.display = 'block';
    signUpButton.style.display = 'none';
  }
}
//social media share site
function toggleShareOptions() {
  var socialsDiv = document.getElementById("socials");
  socialsDiv.style.display = (socialsDiv.style.display === "block") ? "none" : "block";
}

function shareOnFacebook() {
  var url = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href);
  window.open(url, '_blank');
}

function shareOnTwitter() {
  var url = "https://twitter.com/intent/tweet?url=" + encodeURIComponent(window.location.href);
  window.open(url, '_blank');
}

function shareOnInstagram() {
  // You may need to use a third-party service for Instagram sharing as direct sharing is restricted.
  alert("Instagram sharing is restricted. Consider using a third-party service.");
}

function shareOnWhatsApp() {
  var url = "https://api.whatsapp.com/send?text=" + encodeURIComponent(window.location.href);
  window.open(url, '_blank');
}
//Website visitors
 // Fetch the current count from CountAPI and update the span element
 fetch('https://api.countapi.xyz/get/whatsappsave.netlify.app/visits')
 .then(response => response.json())
 .then(data => {
     document.getElementById('visits').textContent = data.value;
 })
 .catch(error => {
     console.error('Error fetching CountAPI data:', error);
 });