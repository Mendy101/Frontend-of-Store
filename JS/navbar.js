/**
 * Representing the user name
 */
function initializeNavbarLogin() {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const loginElement = document.getElementById("login");
  const usernameElement = document.getElementById("username");
  const logoutElement = document.getElementById("logout");
  const stockOption = document.getElementById("stock-option");

  if (userData && userData.firstName) {
    loginElement.style.display = "none";
    usernameElement.style.display = "block";
    usernameElement.querySelector(
      "#userNameDisplay"
    ).innerHTML = `${userData.firstName}`;
    logoutElement.style.display = "block";

    if (userData.role.toLowerCase() === "admin") {
      stockOption.style.display = "block";
    }
  } else {
    loginElement.style.display = "block";
    usernameElement.style.display = "none";
    logoutElement.style.display = "none";
  }

  logoutElement.addEventListener("click", async function () {
    localStorage.removeItem("userData");
    try {
      const response = await fetch("http://127.0.0.1:8081/user/logout", {
        method: "GET",
        credentials: "include",
      });
      const res = await response.json();
      console.log(res);
    } catch (err) {
      console.log(err);
    }
    location.reload();
  });
}

/**
 * Creating a parent element on the DOM to hold the navbar if element not found
 * then fetching the navbar and initialize login and dropdown logic
 */
const loadNavbar = () => {
  let navbarPlaceholder = document.getElementById("navbar-placeholder");

  if (!navbarPlaceholder) {
    navbarPlaceholder = document.createElement("div");
    navbarPlaceholder.id = "navbar-placeholder";
    document.body.insertBefore(navbarPlaceholder, document.body.firstChild);
  }

  // Fetch and load the navbar
  fetch("navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar-placeholder").innerHTML = data;
      // Initialize navbar login functionality
      initializeNavbarLogin();

      // Initialize dropdowns inside the newly fetched navbar
      // This is necessary even with the event listener inside the shared file, because the navbar was loaded asynchronously
      loadBootstrapAndInitialize();
    })
    .catch((error) => console.error("Error loading navbar:", error));
};

loadNavbar();
