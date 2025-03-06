//when window is on loading
// window.onload = function () {
//   createTopLine(); //create the top line
//   printData(props_arr, "Props"); //create element in page

//   //create button for price filter
//   document.getElementById("filterIn").innerHTML = `
//   <button onclick="filter(props_arr,'Props',69,2500)" class="mt-2">Filter</button>`;
//   createPlaceholder(69, 2500);

//   createListOfElement();
// };

/**
 * top line in button sort
 * create list of options
 */
function listOfSort() {
  return `<button onclick="lowToHigh(props_arr, 'Props')">Price: Lowest To Highest</button>
          <button onclick="highToLow(props_arr, 'Props')">Price: Highest To Lowest</button>
          <button onclick="popular(props_arr, 'Props')">Popularity</button>`;
}

/**
 * top line in button company
 * create list of options
 */
function listOfCompany() {
  return `    <input id="appleProps" onchange="filterByCompany(props_arr,'Apple','Props',0)" class="checkBox" type="checkbox" />
                      Apple
                      <br />
                      <input id="boseProps" onchange="filterByCompany(props_arr,'Bose','Props',1)" class="checkBox" type="checkbox" />
                      Bose
                      <br />
                      <input id="sonyProps" onchange="filterByCompany(props_arr,'Sony','Props',2)" class="checkBox" type="checkbox" />
                      Sony
                      <br />
                      <input id="logitechProps" onchange="filterByCompany(props_arr,'Logitech','Props',2)" class="checkBox" type="checkbox" />
                      Logitech`;
}

/**
 * top line in button color
 * create list of options
 */
function listOfColor() {
  return `
                    <input id="blackColor" onchange="filterByColor(props_arr,'Black','Props',3)"  class="checkBox" type="checkbox" />
                      Black
                      <br />
                      <input id="whiteColor" onchange="filterByColor(props_arr,'White','Props',4)" class="checkBox" type="checkbox" />
                      White
                      <br />
                      <input id="silverColor" onchange="filterByColor(props_arr,'Silver','Props',5)" class="checkBox" type="checkbox" />
                      Silver
    `;
}

fetchDataFromServer("accessories", "Props");

// tablets, laptops,
