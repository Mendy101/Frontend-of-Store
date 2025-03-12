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

    console.log(typeof userData.phone)
  
    fetch("http://localhost:8081/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(JSON.stringify(data))
        if (data.success) {
          // window.location.href = "../HTML/index.html";
          window.location.href = "../HTML/login.html";
        } else {
          console.error("Error:", data.error);
          alert(`Failed to register. Please try again. error: ${data.error}`);
        }
      })
      .catch((error) => {
        const msg = `Seems like the server is down or on another port. request url: http://localhost:8081/user/register`
        console.log(msg);
        throw new Error(msg, {cause: error})
      });
  }