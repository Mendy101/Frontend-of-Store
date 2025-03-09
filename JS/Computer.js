// window.onload = function () {
//   createTopLine();

//   printData(computers_arr, "Computer"); //create element in page

//   //create button for price filter
//   document.getElementById("filterIn").innerHTML = `
//   <button onclick="filter(computers_arr,'Computer',2999,9899)" class="mt-2">Filter</button>`;
//   createPlaceholder(2999, 9899);

//   createListOfElement();
// };

/**
 * top line in button sort
 * create list of options
 */
function listOfSort() {
  return `<button onclick="lowToHigh(data, 'Computer')">Price: Lowest To Highest</button>
          <button onclick="highToLow(data, 'Computer')">Price: Highest To Lowest</button>
          <button onclick="popular(data, 'Computer')">Popularity</button>`;
}

/**
 * top line in button company
 * create list of options
 */
function listOfCompany() {
  return `    <input id="AppleComputer" onchange="filterByCompany(data,'Apple','Computer',0)" class="checkBox" type="checkbox" />
                      Apple
                      <br />
                      <input id="LenovoComputer" onchange="filterByCompany(data,'Lenovo','Computer',1)" class="checkBox" type="checkbox" />
                      Lenovo
                      <br />
                      <input id="DellComputer" onchange="filterByCompany(data,'Dell','Computer',2)" class="checkBox" type="checkbox" />
                      Dell
                      <br />
                      <input id="HPComputer" onchange="filterByCompany(data,'HP','Computer',2)" class="checkBox" type="checkbox" />
                      HP`;
}

/**
 * top line in button color
 * create list of options
 */
function listOfColor() {
  return `
                    <input id="blackColor" onchange="filterByColor(data,'Black','Computer',3)"  class="checkBox" type="checkbox" />
                      Black
                      <br />
                      <input id="whiteColor" onchange="filterByColor(data,'Blue','Computer',4)" class="checkBox" type="checkbox" />
                      Blue
                      <br />
                      <input id="silverColor" onchange="filterByColor(data,'Silver','Computer',5)" class="checkBox" type="checkbox" />
                      Silver
    `;
}

let data = [];
async function loadData() {
  data = await fetchDataFromServer("laptops", "Computer");
  console.log(data);
  document.getElementById("filterIn").innerHTML = `
  <button onclick="filter(data,'Computer',2999,9899)" class="mt-2">Filter</button>`;
  createPlaceholder(2999, 9899);
}

loadData();
