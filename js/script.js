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
const count = document.getElementById("count");
totalUpdate();

function totalUpdate() {
    fetch("https://api.countapi.xyz/hit/swapnilsparsh/?amount=1")
        .then((res) => res.json())
        .then((res) => {
            count.innerHTML = res.value;
            val(count, 0, res.value, 1000);
        });
}

function val(obj, start, end, duration) {
    let startingStamp = null;

    function step(st) {
        if (!startingStamp) startingStamp = st;

        const progress = Math.min((st - startingStamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);

        if (progress < 1)
            window.requestAnimationFrame(step);
    }

    window.requestAnimationFrame(step);
}
