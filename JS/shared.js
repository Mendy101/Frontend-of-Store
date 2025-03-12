/**
 * Shared functions
 */

/**
 *  Initialize bootstrap's dropdown
 * At the moment, needed for the navbar dropdown (or any other case)
 */
function initializeDropdowns() {
  var dropdowns = document.querySelectorAll(".dropdown-toggle");
  dropdowns.forEach(function (dropdown) {
    new bootstrap.Dropdown(dropdown);
  });
}

// Load Bootstrap JS dynamically
function loadBootstrapAndInitialize() {
  if (!window.bootstrap) {
    const bootstrapScript = document.createElement("script");
    bootstrapScript.src =
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
    bootstrapScript.integrity =
      "sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz";
    bootstrapScript.crossOrigin = "anonymous";
    bootstrapScript.onload = initializeDropdowns;
    document.head.appendChild(bootstrapScript);
  } else {
    initializeDropdowns();
  }
}

// Initialize dropdowns when the DOM content is loaded
document.addEventListener("DOMContentLoaded", loadBootstrapAndInitialize);

//--------------------------------------------------------------------------------------------------------------------

async function getInventory() {
  try {
    const response = await fetch(`http://localhost:3000/admin/products`, {
      method: "GET",
      credentials: 'include'
    });
    const res = await response.json();
    console.log(res);
    return res;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}