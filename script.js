const BASE_URL = "https://auth-app-1-jdl2.onrender.com";

// SIGNUP
async function signup() {
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  const res = await fetch(`${BASE_URL}/api/auth/signup`, {
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

  const res = await fetch(`${BASE_URL}/api/auth/login`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();

  if (data.message === "Login successful") {
    localStorage.setItem("user", email);
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("msg").innerText = "Login failed!";
  }
}