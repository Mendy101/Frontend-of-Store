function submitRegistration() {
    const fullName = document.getElementById("fn").value;
    const email = document.getElementById("em").value;
    const phone = document.getElementById("ph").value;
    const password = document.getElementById("pw").value;
    const passwordVerify = document.getElementById("pw2").value;
  
    if (password !== passwordVerify) {
      alert("Passwords do not match");
      return;
    }
  
    const userData = {
      name: fullName,
      email: email,
      phone: phone,
      password: password,
    };
  
    fetch("http://localhost:8081/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        if (data) {
          window.location.href = "../HTML/login.html";
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to register. Please try again.");
      });
  }