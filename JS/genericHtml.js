/**
 * build the html of top line
 * for the inner pages in site
 * @param {json} json
 */
function buildTopLine() {
  return `
         <div class="share col-lg-4">
            <button
              class="share-btn text-center"
              onclick="displayElement('linkTechWorld',-1)"
            >
              Share
            </button>

            <div class="text-center" id="linkTechWorld">
              copy link <a href="#">TechWorld</a>
            </div>
          </div>

          <div class="col-lg-8 row">
            <div class="col-lg-6"></div>
            <div class="col-lg-3 text-end sort">
              <button class="sort-btn" onclick="displayElement('sortList',0)">
                sort
                <!-- arrow down -->
                <span class="arrow_down"> </span>

                <!-- arrow up -->
                <span class="arrow_up" style="display: none"> </span>
              </button>

              <div
                id="sortList"
                class="text-end sort_list"
                style="background: white"
              >

              </div>
            </div>

            <div class="col-lg-3 text-end filter">
              <button
                class="filter-btn"
                onclick="displayElement('listFiltering',1)"
              >
                Filtering
                <!-- arrow down -->
                <span class="arrow_down"> </span>

                <!-- arrow up -->
                <span class="arrow_up" style="display: none"> </span>
              </button>

              <div
                id="listFiltering"
                class="list_filtering"
                style="background: white"
              >
                <div>
                  <button onclick="displayElement('listPrice',2)">
                    Filtering by price
                    <!-- arrow down -->
                    <span class="arrow_down"> </span>

                    <!-- arrow up -->
                    <span class="arrow_up" style="display: none"> </span>
                  </button>
                  <div id="listPrice" style="display: none">
                    <div>
                      <input
                        id="toPrice"
                        class="ml-5"
                        type="number"
                         min="389"
                        max="5429"
                        width="20px"
                      />

                      <input
                        id="fromPrice"
                        type="number"
                        width="20px"
                        min="389"
                        max="5429"
                      />
                    </div>

                    <div id="filterIn" class="filter-in">
                    </div>
                  </div>

                  <button
                    class="mt-2"
                    onclick="displayElement('listCompany',3)"
                  >
                    Company
                    <!-- arrow down -->
                    <span class="arrow_down"> </span>

                    <!-- arrow up -->
                    <span class="arrow_up" style="display: none"> </span>
                  </button>
                  <div
                    id="listCompany"
                    class="text-start m-1"
                    style="display: none"
                    id="Company"
                  >
                  </div>

                  <button class="mt-2" onclick="displayElement('listColor',4)">
                    By Color
                    <!-- arrow down -->
                    <span class="arrow_down"> </span>

                    <!-- arrow up -->
                    <span class="arrow_up" style="display: none"> </span>
                  </button>
                  <div
                    class="text-start m-1"
                    id="listColor"
                    style="display: none"
                  >
                  </div>
                </div>
              </div>
            </div>
          </div>
  `;
}

/**
 * build the box of all element in the site
 * @param {object} json
 */
function buildBox(_json) {
  return `
  <div class="picBox mx-auto mt-4">
  <img class="image" src="../Images/${_json.img}" alt="${_json.type}" >
  </div>
  
  <div class="middleBox pb-3 d-flex align-items-center justify-content-between ">
     <img class="logo" src="../Images/${_json.logo}" alt="${_json.company}" >

     <Button class="icon_favorites" >
      <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
         <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
      </svg>
     </Button>
  </div>
     
 <div class="details_id">
 <div class="id mkt m-1"> ID:${_json.mkt}</div>
  <p class="details col-md-10 m-1 mt-0">${_json.description}</p>
 </div>

   <div class="delivery d-flex align-items-center mt-3">
      <div class="icon_delivery p-1 mx-2">  
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-truck mb-2" viewBox="0 0 16 16">
             <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zM1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zM3 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM12 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
        </svg>
      </div>
         <span id="delivery_text" class="mx-4">Free delivery to your home or to a collection point</span>        
  </div>

  <div class="bottomBox  mt-4 d-flex align-items-center justify-content-between" padding: 10px;">
    <button class="cartButton " style="background: yellow; border: none; padding: 10px; border-radius: 5px; display: flex; align-items: center; justify-content: center;">
       <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
          <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
        </svg>
    </button>
 
     <h3 id="price"  class="mb-0" style="margin-top:0;">${_json.price}</h3>
  </div>
  `;
}
