///------ function of top line  ------///

/**
 * create the top line in the inner page
 */
function createTopLine() {
  let topLine = document.getElementById("topLine");
  topLine.innerHTML = buildTopLine(); //return the html  of top line

  for (let i = 0; i < 5; i++) createArrow("arrow_up", "arrow_down", i);
}

/**
 * create the button's arrow is in the top line
 * @param {string} _up id of arrow up
 * @param {string} _down id of arrow down
 * @param {number} i position in class
 * @returns {void}
 */
function createArrow(_up, _down, i) {
  //create arrow up
  document.getElementsByClassName(_up)[i].innerHTML = `         
              <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-caret-up-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"
              /></svg>`;
  //create arrow down
  document.getElementsByClassName(_down)[i].innerHTML = `<svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-caret-down-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
              /></svg>`;
}

let flag_display = false; //not display
/**
 * in the top line
 * in the buttons
 * display list of items belongs to the button
 * @param {string} _id id of list
 * @param {number} i  position in the class
 * @returns {void}
 */
function displayElement(_id, i) {
  let list = document.getElementById(_id);
  if (i == -1) {
    //not contain arrow
    if (flag_display == false) {
      //if close then display
      list.style.display = "block";
      flag_display = true;
    } else {
      //close the list
      list.style.display = "none";
      flag_display = false;
    }
    return;
  }

  let arrowUp = document.getElementsByClassName("arrow_up")[i];
  let arrowDown = document.getElementsByClassName("arrow_down")[i];

  if (flag_display == false) {
    //if close then display
    list.style.display = "block";
    arrowDown.style.display = "none";
    arrowUp.style.display = "inline";
    flag_display = true;
  } else {
    //close the list
    list.style.display = "none";
    arrowDown.style.display = "inline";
    arrowUp.style.display = "none";
    flag_display = false;
  }
}

/**
 * create placeholder for filter input
 * @param {number} from
 * @param {number} to
 */
function createPlaceholder(from, to) {
  document.getElementById("fromPrice").placeholder = from;
  document.getElementById("toPrice").placeholder = to;
}

/**
 * create list for all inner page
 */
function createListOfElement() {
  document.getElementById("sortList").innerHTML = listOfSort();
  document.getElementById("listColor").innerHTML = listOfColor();
  document.getElementById("listCompany").innerHTML = listOfCompany();
}

///------ function of main pages ------///

/**
 * create elements in all inner page
 * into the box
 * @param {object} _json data of box like the image and icon
 * @param {number} _id id of the main box
 */
function addToBox(_json, _id) {
  let mainBox = document.createElement("div"); //create col in row
  mainBox.className = "mainBox col-md-3 border p-2";
  document.getElementById(_id).appendChild(mainBox);

  //add element to the site
  mainBox.innerHTML = buildBox(_json); //return the html of box

  //create button in the box that add  elements to favorites
  mainBox
    .querySelector(".icon_favorites")
    .addEventListener("click", function () {
      favorites(_json, this);
    });

  //create button in the box that add  elements to cart
  mainBox.querySelector(".cartButton").addEventListener("click", function () {
    addToCart(_json);
  });
}

/**
 * display element in page by id
 * @param {object} json_arr data of page
 * @param {number} id id of page
 */
function printData(json_arr, id) {
  document.getElementById(id).innerHTML = ""; //clean the old element
  // json_arr.forEach((val) => addToBox(val, id));

  for (let i = 0; i < json_arr.length; i++) {
    if (i == 4) addBanner(id);

    addToBox(json_arr[i], id);
  }

  saveFavoritesInprintData();
}

/**
 * add banner to page
 * and so that every second image change
 * @param {string} id id of page
 */
function addBanner(id) {
  //all images
  const images = [
    "../Images/Banars/banner_homePage/1.jpg",
    "../Images/Banars/banner_homePage/2.jpg",
    "../Images/Banars/banner_homePage/3.jpg",
    "../Images/Banars/banner_homePage/4.jpg",
    "../Images/Banars/banner_homePage/5.jpg",
    "../Images/Banars/banner_homePage/6.jpg",
    "../Images/Banars/banner_homePage/7.jpg",
    "../Images/Banars/banner_homePage/8.jpg",
    "../Images/Banars/banner_homePage/9.jpg",
  ];

  let span = document.getElementById(id);
  let i = 0;

  if (span) {
    // Create a new img element instead of using innerHTML
    let bannerImg = document.createElement("img");
    bannerImg.className = "img-fluid";
    bannerImg.id = "bannerImg";
    bannerImg.src = images[i];
    bannerImg.alt = "banner";

    // Append the image to the container
    span.appendChild(bannerImg);

    // Set the interval to change the image every second
    setInterval(() => {
      i = (i + 1) % images.length; // Update index and loop back after the last image
      bannerImg.src = images[i]; // Change the image source
    }, 3000);
  }
}

///------ Favorite API ------///

// let favorites_arr = JSON.parse(localStorage.getItem("favorites_arr")) || [];

/**
 * add to favorites
 * @param {object} product the product favorite
 * @param {*} buttonElement
 */
async function favorites(product, buttonElement) {
  try {
    const response = await fetch("http://127.0.0.1:8081/user/addFavorite", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mkt: product.mkt }),
      credentials: "include",
    });
    const res = await response.json();
    console.log(res);

    if (response.success) {
      alert("Add to favorites successfully");
      buttonElement.style.color = "red";
    } else {
      alert("remove from favorites successfully");
      buttonElement.style.color = "black";
    }

    // const products = await fetch(
    //   `http://127.0.0.1:3000/products/categories?categories=${category}`
    // );

    // products = products.filter((p) => p.mkt == res.mkt);
    // return products;
  } catch (error) {
    console.error("Error:", error);
    // return null;
  }

  // const products = await addFavorite(product.mkt);

  //if the product already exist
  // let exists = favorites_arr.some((item) => item.id === product.id);

  // if (!exists) {
  //   //add to favorites
  //   favorites_arr.push(product);
  //   alert("Add to favorites successfully");
  //   buttonElement.style.color = "red";
  // } else {
  //   // remove from favorites
  //   favorites_arr = favorites_arr.filter(
  //     (favorites_arr) => favorites_arr.id !== product.id
  //   );

  //   alert("remove from favorites successfully");
  //   buttonElement.style.color = "black";
  // }

  // localStorage.setItem("favorites_arr", JSON.stringify(favorites_arr));
}

/**
 * save the color of favorites icon
 */
async function saveFavoritesInprintData() {
  const response = await fetch("http://127.0.0.1:8081/user/avorite", {
    method: "GET",
    credentials: "include", // שולח cookies לשרת
  });

  const favorite = await response.json();

  let favoriteMap = {}; //create map off favorite item

  favorite.forEach((mkt) => {
    //init items in map
    favoriteMap[mkt] = true;
  });

  let productElements = document.querySelectorAll(".mainBox"); //get all element in page

  productElements.forEach((element) => {
    let productID = parseInt(
      element.querySelector(".id").innerText.split(":")[1]
    );

    //check if item exist in the map
    if (favoriteMap[productID]) {
      let favoriteButton = element.querySelector(".icon_favorites");
      favoriteButton.style.color = "red";
    }
  });
}

///------ Cart API ------///

/**
 * update cart
 * @param {localStorage} cart all element in cart
 */
const setCurrentCart = (cart) => {
  localStorage.setItem("currentCart", JSON.stringify(cart));
};

const getCurrentCart = () => {
  return JSON.parse(localStorage.getItem("currentCart")) || [];
};

/**
 * add to cart from inner page
 * @param {object} product the product favorite
 */
function addToCart(product) {
  let currentCart = getCurrentCart(); //get the cart
  //if the product already exist
  let foundInCart = currentCart.find((item) => item.id === product.id);
  const amountStock = getProductAmount(product.id);

  if (amountStock === 0) {
    alert("The item is not in stock");
  } else if (!foundInCart) {
    //add to cart
    product["amount"] = 1; //add attribute to data
    currentCart.push(product);
    setCurrentCart(currentCart); // =---------------
    alert("Add to cart successfully");
    updateStockAmount(product.id, -1);
  } else {
    updateCartAmount(product.id, 1);
    updateStockAmount(product.id, -1);
    alert("Adding another item");
  }
}

/**
 * remove item from the cart
 * @param {number} productId id of item
 */
function removeFromCart(productId) {
  const data = getCurrentCart();

  const newCart = data.filter((item) => item.id !== productId);

  // Update amount
  setCurrentCart(newCart);
}

/**
 *update amount in stock
 */
function updateCartAmount(productId, amount) {
  const currentCart = getCurrentCart();
  const product = currentCart.find((item) => item.id === productId);
  if (product) {
    // product.amount = product.amount + amount;
    const updatedAmount = product.amount + amount;
    if (updatedAmount < 0) {
      alert(
        `Unable to complete the request. product inventory is ${product.amount}`
      );
      throw new Error("Error: Amount cannot go below zero");
    }

    product.amount = updatedAmount;
    setCurrentCart(currentCart); //update cart
  }
}

//  function fetchDataFromServer(category, id) {
//   fetch(`http://127.0.0.1:3000/products/categories?categories=${category}`)
//     .then((response) => response.json())
//     .then((smartphones) => {
//       console.log(smartphones);
//       myOnload(smartphones);
//     })
//     .catch((error) => console.error("Error:", error));

async function fetchDataFromServer(category, id) {
  try {
    const response = await fetch(
      `http://127.0.0.1:3000/products/categories?categories=${category}`
    );
    const res = await response.json();
    myOnload(res);
    console.log(res);
    if (res.data.smartphones) return res?.data.smartphones;
    if (res?.data.accessories) return res?.data.accessories;
    if (res?.data.tablets) return res?.data.tablets;
    if (res?.data.laptops) return res?.data.laptops;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
  function myOnload(response) {
    createTopLine(); //create the top line
    let arr = response.data;
    if (arr.smartphones) printData(arr.smartphones, id); //create element in page
    if (arr.accessories) printData(arr.accessories, id); //create element in page
    if (arr.tablets) printData(arr.tablets, id); //create element in page
    if (arr.laptops) printData(arr.laptops, id); //create element in page

    //create button for price filter
    //   document.getElementById("filterIn").innerHTML = `
    // <button onclick="filter(smartphones_arr,'Smartphone',389,5429)" class="mt-2">Filter</button>`;
    //   createPlaceholder(389, 5429);

    createListOfElement();
  }
}
