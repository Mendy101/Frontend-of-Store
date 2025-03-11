/**
 * top line in button sort
 * create list of options
 */
function listOfSort() {
  return `<button onclick="lowToHigh(data, 'Props')">Price: Lowest To Highest</button>
          <button onclick="highToLow(data, 'Props')">Price: Highest To Lowest</button>
          <button onclick="popular(data, 'Props')">Popularity</button>`;
}

/**
 * top line in button company
 * create list of options
 */
function listOfCompany() {
  return `    <input id="appleProps" onchange="filterByCompany(data,'Apple','Props',0)" class="checkBox" type="checkbox" />
                      Apple
                      <br />
                      <input id="boseProps" onchange="filterByCompany(data,'Bose','Props',1)" class="checkBox" type="checkbox" />
                      Bose
                      <br />
                      <input id="sonyProps" onchange="filterByCompany(data,'Sony','Props',2)" class="checkBox" type="checkbox" />
                      Sony
                      <br />
                      <input id="logitechProps" onchange="filterByCompany(data,'Logitech','Props',2)" class="checkBox" type="checkbox" />
                      Logitech`;
}

/**
 * top line in button color
 * create list of options
 */
function listOfColor() {
  return `
                    <input id="blackColor" onchange="filterByColor(data,'Black','Props',3)"  class="checkBox" type="checkbox" />
                      Black
                      <br />
                      <input id="whiteColor" onchange="filterByColor(data,'White','Props',4)" class="checkBox" type="checkbox" />
                      White
                      <br />
                      <input id="silverColor" onchange="filterByColor(data,'Silver','Props',5)" class="checkBox" type="checkbox" />
                      Silver
    `;
}

let data = [];
async function loadData() {
  data = await fetchDataFromServer("accessories", "Props");

  console.log(data);
  document.getElementById("filterIn").innerHTML = `
  <button onclick="filter(data,'Props',69,2500)" class="mt-2">Filter</button>`;
  createPlaceholder(69, 2500);
}

loadData();
