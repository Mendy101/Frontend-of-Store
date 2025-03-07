function submitRegistration() {
  if (!checkInput()) return;

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

  //   fetch("http://localhost:3000/user/register", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(userData),
  //   })

  fetch("http://localhost:3000/user/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      if (data.accessToken) {
        // Redirect to login page or dashboard
        window.location.href = "/dashboard";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Failed to register. Please try again.");
    });
}

/**
 * checking input fom the user
 * @returns {boolean}
 */
function checkInput() {
  const fullName = document.getElementById("fn").value;
  const email = document.getElementById("em").value;
  const phone = document.getElementById("ph").value;
  const password = document.getElementById("pw").value;
  const passwordVerify = document.getElementById("pw2").value;

  //if the first name legal
  if (!isValidString(fullName)) {
    alert("The full name not valid");
    return false;
  }

  //if the first name legal
  if (!isValidEmail(email)) {
    alert("The email is not valid");
    return false;
  }

  //if the first name legal
  if (!isValidNumber(phone)) {
    alert("The phone is not valid");
    return false;
  }

  //the password equal
  if (password != passwordVerify) {
    alert("Please enter correct password");
    return false;
  }

  return true;
}

/**
 * checking if the name is correct
 * @param {string} name
 * @returns  {boolean}
 */
function isValidString(name) {
  return /^[a-zA-Z\u0590-\u05FF\s]+$/.test(name); //just letters
}

/**
 * checking if the email is correct
 * @param {string} email
 * @returns  {boolean}
 */
function isValidEmail(email) {
  // return  /^[a-zA-Z0-9]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

/**
 * checking if the num is number or not
 * @param {number} num
 * @returns {boolean}
 */
function isValidNumber(num) {
  return /^\d+$/.test(num);
}
