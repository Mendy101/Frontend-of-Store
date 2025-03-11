let complexArray = [];

function submitLogin() {
  const email = document.getElementById("em").value;
  const password = document.getElementById("pw").value;

  const user = {
    email: email,
    password: password,
  };

  fetch("http://localhost:8081/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data.info);
      if (data.success) {
        alert("Login successful!");
        //----------------------------------------------

        complexArray.push({
          firstName: data.info.name,
          email:data.info.email,
          role:data.info.role,
        });

        console.log(complexArray)
        
        localStorage.setItem(
              "userData",
              JSON.stringify(complexArray[complexArray.length - 1])
            );
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