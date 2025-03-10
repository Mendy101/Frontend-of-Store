function submitLogin() {
  const email = document.getElementById("em").value;
  const password = document.getElementById("pw").value;

  const userData = {
    email: email,
    password: password,
  };

  fetch("http://localhost:8081/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.success) {
        alert("Login successful!");
        window.location.href = "../HTML/Index.html"; // Redirect to dashboard or home page
      } else {
        alert("Failed to log in. Please check your credentials.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Failed to log in. Please try again.");
    });
}
