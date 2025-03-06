//when window is on loading
// window.onload = function () {
//   createTopLine(); //create the top line

//   printData(tablets_arr, "Tablets"); //create element in page

//   //create button for price filter
//   document.getElementById("filterIn").innerHTML = `
//   <button onclick="filter(tablets_arr,'Tablets',1599,5399)" class="mt-2">Filter</button>`;
//   createPlaceholder(1599, 5399);

//   createListOfElement();
// };

/**
 * top line in button sort
 * create list of options
 */
function listOfSort() {
  return `<button onclick="lowToHigh(tablets_arr, 'Tablets')">Price: Lowest To Highest</button>
          <button onclick="highToLow(tablets_arr, 'Tablets')">Price: Highest To Lowest</button>
          <button onclick="popular(tablets_arr, 'Tablets')">Popularity</button>`;
}

/**
 * top line in button company
 * create list of options
 */
function listOfCompany() {
  return `    <input id="appleTablets" onchange="filterByCompany(tablets_arr,'Apple','Tablets',0)" class="checkBox" type="checkbox" />
                      Apple
                      <br />
                      <input id="samsungTablets" onchange="filterByCompany(tablets_arr,'Samsung','Tablets',1)" class="checkBox" type="checkbox" />
                      Samsung
                      <br />
                      <input id="lenovoTablets" onchange="filterByCompany(tablets_arr,'Lenovo','Tablets',2)" class="checkBox" type="checkbox" />
                      Lenovo`;
}

/**
 * top line in button color
 * create list of options
 */
function listOfColor() {
  return `
                    <input id="blackColor" onchange="filterByColor(tablets_arr,'Black','Tablets',3)"  class="checkBox" type="checkbox" />
                      Black
                      <br />
                      <input id="whiteColor" onchange="filterByColor(tablets_arr,'Blue','Tablets',4)" class="checkBox" type="checkbox" />
                      Blue
                      <br />
                      <input id="silverColor" onchange="filterByColor(tablets_arr,'Silver','Tablets',5)" class="checkBox" type="checkbox" />
                      Silver
    `;
}

fetchDataFromServer("tablets", "Tablets");
