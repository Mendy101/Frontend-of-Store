// DB of all inventory of the store
// const local_storage_inventory_name = "inventory";

// /**
//  * Generate row on a Vanilla HTML table
//  */
// function displayInventory(stock = getInventory()) {
//   const inventoryTableBody = document.getElementById('inventory-table-body');
//   inventoryTableBody.innerHTML = '';

//   stock.forEach((item) => {
//     const row = document.createElement('tr');
//     row.innerHTML = `
//       <td>${item.id}</td>
//       <td>${item.type}</td>
//       <td>${item.amount}</td>
//         <td><img src="../images/${item.image}" alt="${item.type}" style="width: 100px; height: auto;"></td>
//     `;
//     inventoryTableBody.appendChild(row);
//   });
// }

/**
 * Using bootstrap to display items in stock
 */
//---------------------------------------------------------------------------------

async function displayInventory() {
  try {
    const stock = await getInventory(); 
    console.log(stock);
    const container = document.getElementById('inventory-container');
    if (!container) return; 

    container.innerHTML = '';

    if (stock.length === 0) {
      container.innerHTML = '<p>Stock is empty.</p>';
      return;
    }
    stock.data.forEach((item) => {
      const itemElement = document.createElement('div');
      itemElement.classList.add('col-md-2', 'mb-2');
    
      itemElement.innerHTML = `
        <div class="card h-100">
          <img src="../Images/${item.img}" class="card-img-top" alt="${item.name}">
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text"><strong>ID:</strong> ${item.mkt}</p>
            <p class="card-text"><strong>Available:</strong> ${item.amount}</p>
          </div>
        </div>
      `;
      container.appendChild(itemElement);
    });
    
  } catch (error) {
    console.error("Error loading inventory:", error);
  }
}
displayInventory();

//---------------------------------------------------------------------------------
/**
 * @description filter data according to search bar
 */
const filteredProducts = () => {
  const value = document.getElementById("search").value.toLowerCase();
  const _filteredProducts = getInventory().filter(
    (product) =>
      product.type.toLowerCase().includes(value) || product.id.includes(value)
  );

  displayInventory(_filteredProducts);
};

if (document.getElementById("inventory-container"));
displayInventory();

// Throwing users without access out
document.addEventListener("DOMContentLoaded", function () {
  console.log("stock page is loaded");
  const userData = JSON.parse(localStorage.getItem("userData"));
  if (!userData || userData.firstName.toLowerCase() !== "admin") {
    // alert('Access denied!');
    window.location.href = "index.html";
  }
  displayInventory();
});
