// favorites_arr = JSON.parse(localStorage.getItem('favorites_arr')) || []; //get favorite items
const favoriteContainer = document.getElementById("favoriteItems");

/**
 * display products in favorite
 */
async function displayFavoriteItems() {
  let mktFavorite = null;
  let products = null;
  try {
    mktFavorite = await getFavorites();
    console.log(mktFavorite);

    const res = await fetch(
      `http://localhost:3000/products/mkts?mkts=${mktFavorite.info}`
    );
    products = await res.json();
  } catch (err) {
    console.log(err);
  }

  console.log(products.data);
  if (products.data.length == 0)
    document.getElementById("header").innerHTML = "No Favorites Yet...";
  else {
    Object.entries(products.data).forEach(([id, item]) => {
      console.log(item);
      const itemElement = document.createElement("div");
      itemElement.classList.add("col-md-2", "mb-2");

      itemElement.innerHTML = innerHTMLOfFavorites(item);
      favoriteContainer.appendChild(itemElement); //display item
    });
  }
}

/**
 * add element to cart
 */
async function addToCartFromFavorites() {
  const cardBody = event.target.closest(".card-body"); //get the element
  const idElement = cardBody.querySelector(".id-price"); //get id
  const mkt = parseInt(idElement.textContent.split(":")[1]);
  try {
    await addToCart(mkt);
  } catch (err) {}
}

/**
 * remove element from favorites
 */
async function removeFromFavorites() {
  const cardBody = event.target.closest(".card-body"); //get the element
  const idElement = cardBody.querySelector(".id-price"); //get id
  const mkt = parseInt(idElement.textContent.split(":")[1]); //casting to number

  console.log(mkt);
  try {
    await removeFavorite(mkt);
  } catch (err) {
    console.log(err);
  }

  alert("Product removed from favorite successfully.");
  favoriteContainer.innerHTML = "";
  displayFavoriteItems(); //display element
}

/**
 * create html for inner page in favorites
 * @param {object} item of data
 * @returns {string} return html
 */
function innerHTMLOfFavorites(item) {
  return `  
              <div class="card h-100">
                <img src="../Images/${item.img}" class="card-img-top">
                <div class="card-body">
                  <h5 class="card-title type">${item.name}</h5>
                  <p class="card-text  id-price"><strong>ID:</strong> ${item.mkt}
                                       <br>
                                       <strong>Price:</strong> ${item.price}
                  </p>

                 <div class="row justify-content-center align-items-center">
                    <button id="cart-btn" class="col-md-3" onclick="addToCartFromFavorites()">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                        </svg>
                    </button>

                    <div class="col-md-4"></div>

                    <button id="favorite-btn" class="col-md-3" onclick="removeFromFavorites()">
                       <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                           <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            `;
}

displayFavoriteItems();
