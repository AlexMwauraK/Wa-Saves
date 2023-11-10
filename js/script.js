// Show or hide password
function togglePasswordVisibility(passwordInputId) {
  const passwordInput = document.getElementById(passwordInputId);
  passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
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