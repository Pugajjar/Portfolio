<form onsubmit="return validateLogin(event)">
  <input type="text" id="username" placeholder="Username" required autocomplete="off" />
  <input type="password" id="password" placeholder="Password" required autocomplete="off" />
  <button type="submit">Login</button>
  
  <!-- Create account link -->
  <p class="create-link">
    Don’t have a username? <a href="#">Create</a>
  </p>
</form>

<script>
  function validateLogin(event) {
    event.preventDefault(); // stop form submission

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    // Check against stored demo credentials
    if (username === "pugajjar4706@gmail.com" && password === "IU2441230177") {
      window.location.href = "dashboard.html"; // redirect on success
    } else {
      alert("Invalid username or password.");
    }
    return false;
  }
</script>
