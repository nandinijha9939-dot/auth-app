const loginBox = document.querySelector(".container");
const signupBox = document.getElementById("signupBox");

// Switch UI
function showSignup() {
  loginBox.classList.add("hidden");
  signupBox.classList.remove("hidden");
}

function showLogin() {
  signupBox.classList.add("hidden");
  loginBox.classList.remove("hidden");
}

// SIGNUP
async function signup() {
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  const res = await fetch("http://localhost:5000/api/auth/signup", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();

  document.getElementById("signupMsg").innerText = data.message || "Signup successful";
}

// LOGIN
async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const res = await fetch("http://localhost:5000/api/auth/login", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();

  if (data.message === "Login successful") {
    localStorage.setItem("user", email);

    // direct redirect (NO alert)
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("msg").innerText = "Login failed!";
  }
}