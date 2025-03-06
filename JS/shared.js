/**
 * Shared functions
 */

/**
 *  Initialize bootstrap's dropdown
 * At the moment, needed for the navbar dropdown (or any other case)
 */
function initializeDropdowns() {
  var dropdowns = document.querySelectorAll('.dropdown-toggle');
  dropdowns.forEach(function (dropdown) {
    new bootstrap.Dropdown(dropdown);
  });
}

// Load Bootstrap JS dynamically
function loadBootstrapAndInitialize() {
  if (!window.bootstrap) {
    const bootstrapScript = document.createElement('script');
    bootstrapScript.src =
      'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js';
    bootstrapScript.integrity =
      'sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz';
    bootstrapScript.crossOrigin = 'anonymous';
    bootstrapScript.onload = initializeDropdowns;
    document.head.appendChild(bootstrapScript);
  } else {
    initializeDropdowns();
  }
}

// Initialize dropdowns when the DOM content is loaded
document.addEventListener('DOMContentLoaded', loadBootstrapAndInitialize);


// Stock API
/**
 *
 * @returns {Array<Record<'id' | 'type' | 'amount' | 'image', number | string>>}
 */
function getInventory() {
  return JSON.parse(localStorage.getItem('inventory')) || [];
}

function setInventory(stock) {
  localStorage.setItem('inventory', JSON.stringify(stock));
}

if (getInventory().length === 0) {
  setInventory(inventory_DB);
}

function updateStockAmount(productId, amount) {
  const stock = getInventory();
  const product = stock.find((item) => item.id === productId);
  if (product) {
    const updatedAmount = product.amount + amount;
    if (updatedAmount < 0) {
      alert(
        `Unable to complete the request. product inventory is ${product.amount}`,
      );
      throw new Error('Error: Amount cannot go below zero');
    }

    product.amount = updatedAmount;
    setInventory(stock);
  } else {
    throw new Error(`Product with id: ${productId} not found`);
  }
}

const getProductAmount = (productId) => {
  const stock = getInventory();
  for (const item of stock) {
    if (item.id == productId) {
      return item.amount;
    }
  }
};

function isAmountAvailable(itemId) {
  const data =
    JSON.parse(localStorage.getItem('inventory')) || [];

  let found = false;
  data.forEach((item) => {
    if (item.id === itemId && 0 < item.amount) found = true;
  });
  return found;
}
