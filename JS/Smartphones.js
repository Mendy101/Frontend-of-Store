// //when window is on loading
// window.onload = function () {
//   createTopLine(); //create the top line
//   printData(smartphones_arr, "Smartphone"); //create element in page

//   //create button for price filter
//   document.getElementById("filterIn").innerHTML = `
//   <button onclick="filter(smartphones_arr,'Smartphone',389,5429)" class="mt-2">Filter</button>`;
//   createPlaceholder(389, 5429);

//   createListOfElement();
// };

/**
 * top line in button sort
 * create list of options
 */
function listOfSort() {
  return `<button onclick="lowToHigh(smartphones_arr, 'Smartphone')">Price: Lowest To Highest</button>
          <button onclick="highToLow(smartphones_arr, 'Smartphone')">Price: Highest To Lowest</button>
          <button onclick="popular(smartphones_arr, 'Smartphone')">Popularity</button>`;
}

/**
 * top line in button company
 * create list of options
 */
function listOfCompany() {
  return `    <input id="appleSmartphone" onchange="filterByCompany(smartphones_arr,'Apple','Smartphone',0)" class="checkBox" type="checkbox" />
                    Apple
                    <br />
                    <input id="samsungSmartphone" onchange="filterByCompany(smartphones_arr,'Samsung','Smartphone',1)" class="checkBox" type="checkbox" />
                    Samsung
                    <br />
                    <input id="xiaomiSmartphone" onchange="filterByCompany(smartphones_arr,'Xiaomi','Smartphone',2)" class="checkBox" type="checkbox" />
                    Xiaomi`;
}

/**
 * top line in button color
 * create list of options
 */
function listOfColor() {
  return `
                  <input  id="blackColor" onchange="filterByColor(smartphones_arr,'Black','Smartphone',3)"  class="checkBox" type="checkbox" />
                    Black
                    <br />
                    <input id="whiteColor" onchange="filterByColor(smartphones_arr,'White','Smartphone',4)" class="checkBox" type="checkbox" />
                    White
                    <br />
                    <input id="silverColor" onchange="filterByColor(smartphones_arr,'Silver','Smartphone',5)" class="checkBox" type="checkbox" />
                    Silver
  `;
}

fetchDataFromServer("smartphones", "Smartphone");
