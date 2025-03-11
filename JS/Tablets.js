/**
 * top line in button sort
 * create list of options
 */
function listOfSort() {
  return `<button onclick="lowToHigh(data, 'Tablets')">Price: Lowest To Highest</button>
          <button onclick="highToLow(data, 'Tablets')">Price: Highest To Lowest</button>
          <button onclick="popular(data, 'Tablets')">Popularity</button>`;
}

/**
 * top line in button company
 * create list of options
 */
function listOfCompany() {
  return `    <input id="appleTablets" onchange="filterByCompany(data,'Apple','Tablets',0)" class="checkBox" type="checkbox" />
                      Apple
                      <br />
                      <input id="samsungTablets" onchange="filterByCompany(data,'Samsung','Tablets',1)" class="checkBox" type="checkbox" />
                      Samsung
                      <br />
                      <input id="lenovoTablets" onchange="filterByCompany(data,'Lenovo','Tablets',2)" class="checkBox" type="checkbox" />
                      Lenovo`;
}

/**
 * top line in button color
 * create list of options
 */
function listOfColor() {
  return `
                    <input id="blackColor" onchange="filterByColor(data,'Black','Tablets',3)"  class="checkBox" type="checkbox" />
                      Black
                      <br />
                      <input id="whiteColor" onchange="filterByColor(data,'Blue','Tablets',4)" class="checkBox" type="checkbox" />
                      Blue
                      <br />
                      <input id="silverColor" onchange="filterByColor(data,'Silver','Tablets',5)" class="checkBox" type="checkbox" />
                      Silver
    `;
}

let data = [];
async function loadData() {
  data = await fetchDataFromServer("tablets", "Tablets");
  console.log(data);

  document.getElementById("filterIn").innerHTML = `
  <button onclick="filter(data,'Tablets',1599,5399)" class="mt-2">Filter</button>`;
  createPlaceholder(1599, 5399);
}

loadData();
