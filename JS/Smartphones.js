/**
 * top line in button sort
 * create list of options
 */
function listOfSort() {
  return `<button onclick="lowToHigh(data, 'Smartphone')">Price: Lowest To Highest</button>
          <button onclick="highToLow(data, 'Smartphone')">Price: Highest To Lowest</button>
          <button onclick="popular(data, 'Smartphone')">Popularity</button>`;
}

/**
 * top line in button company
 * create list of options
 */
function listOfCompany() {
  return `    <input id="appleSmartphone" onchange="filterByCompany(data,'Apple','Smartphone',0)" class="checkBox" type="checkbox" />
                    Apple
                    <br />
                    <input id="samsungSmartphone" onchange="filterByCompany(data,'Samsung','Smartphone',1)" class="checkBox" type="checkbox" />
                    Samsung
                    <br />
                    <input id="xiaomiSmartphone" onchange="filterByCompany(data,'Xiaomi','Smartphone',2)" class="checkBox" type="checkbox" />
                    Xiaomi`;
}

/**
 * top line in button color
 * create list of options
 */
function listOfColor() {
  return `
                  <input  id="blackColor" onchange="filterByColor(data,'Black','Smartphone',3)"  class="checkBox" type="checkbox" />
                    Black
                    <br />
                    <input id="whiteColor" onchange="filterByColor(data,'White','Smartphone',4)" class="checkBox" type="checkbox" />
                    White
                    <br />
                    <input id="silverColor" onchange="filterByColor(data,'Silver','Smartphone',5)" class="checkBox" type="checkbox" />
                    Silver
  `;
}

let data = [];
async function loadData() {
  data = await fetchDataFromServer("smartphones", "Smartphone");
  console.log(data);
  document.getElementById("filterIn").innerHTML = `
  <button onclick="filter(data,'Smartphone',389,5429)" class="mt-2">Filter</button>`;
  createPlaceholder(389, 5429);
}

loadData();
