let items = null;
let totalPrice = 0;

async function renderItems() {
  const itemList = document.getElementById("item-list");
  itemList.innerHTML = "";
  totalPrice = 0;

  if (!items) {
    items = await getItemsFromCart();
  }

  for (let i = 0; i < items.length; i++) {
    const row = itemRow();
    const box = itemBox();
    totalPrice += items[i].price * items[i].amount;

    row.appendChild(box);
    row.appendChild(divider()); ////

    const itemProperties = [
      itemImg(`../Images/${items[i].imageSrc}`),
      itemNameAndPrice(items[i]),
      increaseAmount(items[i]),
      itemAmount(items[i]),
      decreaseAmount(items[i]),
      itemTrashIcon(items[i]),
    ];

    itemProperties.forEach((property) => box.appendChild(property));
    itemList.appendChild(row);
  }

  renderTotalPrice();
}

function renderTotalPrice() {
  const totalElem = document.getElementById("total-price");
  totalElem.textContent = `${totalPrice.toFixed(2)} ₪`;
}

function renderItemPriceAndAmount(item) {
  const price = document.getElementById(itemPriceId(item));
  price.textContent = `${item.price.toFixed(2)} ₪`;

  const amount = document.getElementById(itemAmountId(item));
  amount.textContent = item.amount;
}

function itemPriceId(item) {
  return `item-price-${item.mkt}`;
}

function itemAmountId(item) {
  return `item-amount-${item.mkt}`;
}

function handlePaymentAlert() {
  const form = document.getElementById("payment-form");
  const successAlert = document.getElementById("success-alert");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!checkInput()) return;

    successAlert.classList.remove("d-none");
    successAlert.classList.add("d-block");

    const userData = JSON.parse(localStorage.getItem("userData")) || [];
    if (userData && userData.length !== 0) {
      sendEmail(
        userData.email,
        userData.firstName,
        document.getElementById("total-price").innerText,
        JSON.parse(localStorage.getItem("currentCart"))
      );
    }
  });
}

window.onload = function () {
  renderItems();
  handlePaymentAlert();
};

function itemRow() {
  return getDiv("row mb-3");
}

function itemBox() {
  return getDiv(
    "d-flex justify-content-start align-items-center justify-content-between"
  );
}

function itemImg(imgSrc) {
  const img = document.createElement("img");
  img.style = "width: 18%; max-height: 180px;";
  img.src = imgSrc;
  img.alt = "Item image";
  return img;
}

function itemNameAndPrice(item) {
  const div = getDiv("container mx-1");
  div.style = "width: 30%";
  div.appendChild(itemName(item.name));
  div.appendChild(itemPrice(item));
  return div;
}

function itemName(name) {
  const nameElem = document.createElement("h6");
  nameElem.textContent = name;
  return nameElem;
}

function itemPrice(item) {
  const priceElem = document.createElement("h5");
  priceElem.id = itemPriceId(item);
  priceElem.textContent = `${item.price.toFixed(2)} ₪`;
  priceElem.className = "mt-3";
  return priceElem;
}

function getDiv(className) {
  const div = document.createElement("div");
  div.className = className;
  return div;
}

function getButton(content) {
  const button = document.createElement("button");
  button.textContent = content;
  button.className = "btn btn-light";
  button.type = "button";
  return button;
}

function itemAmount(item) {
  const amountElem = document.createElement("h5");
  amountElem.id = itemAmountId(item);
  amountElem.textContent = item.amount;
  amountElem.className = "mb-0";
  return amountElem;
}

function itemTrashIcon(item) {
  const svgNS = "http://www.w3.org/2000/svg";
  const button = getButton("");
  const svg = document.createElementNS(svgNS, "svg");
  const path = document.createElementNS(svgNS, "path");

  button.className = "btn";
  svg.class = "bi bi-trash3-fill";

  svg.setAttribute("width", "16");
  svg.setAttribute("height", "16");
  svg.setAttribute("viewBox", "0 0 16 16");
  svg.setAttribute("fill", "currentColor");
  path.setAttribute(
    "d",
    "M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"
  );

  svg.appendChild(path);
  button.appendChild(svg);

  button.onclick = () => {
    totalPrice -= item.price * item.amount;

    items.splice(items.indexOf(item), 1);
    // updateStockAmount(item.mkt, item.amount);
    removeFromCart(item.mkt,true);
    renderItems();
  };

  return button;
}

function divider() {
  const div = getDiv("d-flex justify-content-center mt-4");
  const hr = document.createElement("hr");
  hr.style = "width: 100%;";
  hr.className = "custom-line";
  div.appendChild(hr);
  return div;
}

function increaseAmount(item) {
  return changeAmountButton(item, "+");
}

function decreaseAmount(item) {
  return changeAmountButton(item, "-");
}

function changeAmountButton(item, operator) {
  const button = getButton(operator);
  button.onclick = () => updateItemAndTotalPrices(item, operator);
  return button;
}

async function updateItemAndTotalPrices(item, operator) {
  if (operator === "+") {
    if (!isStock(item.mkt)) {
      alert(
        "More from this item is not available at the moment. Please check again later"
      );
      return;
    }
    item.amount++;
    await setCurrentCart(item.mkt);
    totalPrice += item.price;
  } else if (item.amount > 1 && operator === "-") {
    item.amount--;
    await removeFromCart(item.mkt);
    totalPrice -= item.price;
  }

  renderItemPriceAndAmount(item);
  renderTotalPrice();
}

async function getItemsFromCart() {
  let arr = [];
  try {
    const mktFavorite = await getCurrentCart();
    console.log(mktFavorite);

    const res = await fetch(`http://127.0.0.1:3000/products`);
    const products = await res.json();

    if (mktFavorite.length !== 0) {
      for (let index = 0; index < mktFavorite.length; index++) {
        let product = products.data.filter(
          (p) => p.mkt === mktFavorite[index].mkt
        )[0];
        product.amount = mktFavorite[index].amount;
        arr.push(product);
      }
    }
  } catch (error) {
    console.log(error);
  }

  console.log(arr);
  const result = [];
  if (arr) {
    arr.forEach((item) => {
      console.log(item);
      result.push({
        mkt: item.mkt,
        name: item.name,
        amount: item.amount,
        imageSrc: item.img,
        price: toNumber(item.price),
      });
    });
  }
  return result;
}

function toNumber(str) {
  return Number(str.replace(/[^0-9]/g, ""));
}

/**
 * checking input of card
 */
function checkInput() {
  let cardNumber = document.getElementById("cardNumber").value;
  let date = document.getElementById("expiryDate").value;
  let cvv = document.getElementById("cvv").value;
  let id = document.getElementById("nameOnCard").value;
  let address = document.getElementById("billingAddress").value;

  // checking the card number
  if (!isValidNumber(cardNumber) || cardNumber.length != 16) {
    alert("the card number not valid");
    return false;
  }

  //checking the date of card
  if (!date.includes("/")) {
    alert("the date not valid must contain '/'");
    return false; //must contain '/'
  }

  let dateArr = date.split("/");
  if (
    !isValidNumber(dateArr[0]) ||
    dateArr[0].length !== 2 ||
    !isValidNumber(dateArr[1] || dateArr[1].length !== 2)
  ) {
    alert("The data is not a number or in valid length");
    return false; //data is not a number or in valid length
  }

  if (dateArr[0] > 12 || dateArr[0] <= 0 || dateArr[1] < 24) {
    alert("the date not valid");
    return false; //the data wrong
  }

  //checking the cvv of card
  if (!isValidNumber(cvv) || cvv.length != 3) {
    alert("the cvv not valid");
    return false;
  }

  //checking the id of card
  if (!isValidNumber(id) || !checkDigit(id)) {
    alert("the id not valid");
    return false;
  }

  //checking the address
  if (!isValidAddress(address)) {
    alert("the address not valid");
    return false;
  }

  return true;
}

/**
 * check the last digit of id
 * @param {string} id
 * @returns {boolean}
 */
function checkDigit(id) {
  //the id in correct
  if (id.length != 9) return false;

  let totalSum = 0;
  //check the last digit
  for (let i = 0; i < 8; i++) {
    let digit = parseInt(id[i]);
    if (i % 2 === 0) totalSum += digit;
    else {
      let doubled = digit * 2;
      totalSum += doubled > 9 ? doubled - 9 : doubled;
    }
  }

  let finalCheck = (10 - (totalSum % 10)) % 10;

  return finalCheck === parseInt(id[8]);
}

/**
 * checking if the num is number or not
 * @param {number} num
 * @returns {boolean}
 */
function isValidNumber(num) {
  return /^\d+$/.test(num);
}

/**
 * checking if the address is correct
 * @param {string} address
 * @returns {boolean}
 */
function isValidAddress(address) {
  return /^[a-zA-Z\u0590-\u05FF ]+[0-9]+[a-zA-Z\u0590-\u05FF ]+$/.test(address);
}
