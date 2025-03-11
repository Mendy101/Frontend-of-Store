// const linkConfigs = [
//   { href: "Sales.html", img: "../Images/index/sale.png" },
//   {
//     href: "https://www.calcalist.co.il/calcalistech/category/3778",
//     img: "../Images/index/whats-new.jpg",
//   },
// ];




let currentIndex = 0;
// let data = getData()
// console.log(data)

// Function to get random items from a category array
function getRandomProducts(categoryArray, numberOfItems) {
  const shuffledArray = [...categoryArray].sort(() => 0.5 - Math.random());
  return shuffledArray.slice(0, numberOfItems);
}


// Function to display random products on the homepage
function displayRandomProducts() {
  // Get random products from each category
   const randomSmartphones = getRandomProducts(allProducts.smartphones_arr, 4);
 // const randomSmartphones = getRandomProducts(smartphones_arr, 4);
  const randomTablets = getRandomProducts(allProducts.tablets_arr, 4);
  const randomComputers = getRandomProducts(allProducts.computers_arr, 4);
  const randomProps = getRandomProducts(allProducts.props_arr, 4);

  // Display products on the homepage using the addToBox function
  randomSmartphones.forEach((product) => addToBox(product, "Smartphones"));
  randomTablets.forEach((product) => addToBox(product, "Tablets"));
  randomComputers.forEach((product) => addToBox(product, "Computers"));
  randomProps.forEach((product) => addToBox(product, "Props"));
  saveFavoritesInprintData();
}



// Call the function to display products when the page loads
window.onload = function () {
  displayRandomProducts();
};

/**
 * @description Random string (image path) from a giving arr
 * with optional excluded value
 * @param {Array<string>} images
 * @param {string} excludeImage
 * @returns {Array<string>}
 */
const getRandomImage = (images, excludeImage = null) => {
  let filteredImages = images;
  if (excludeImage)
    filteredImages = images.filter((image) => image !== excludeImage);
  return filteredImages[Math.floor(Math.random() * filteredImages.length)];
};

/**
 * @description interval with 10 second on array of image path
 * in order to replace images in home page
 */
function startRandomImageSwitch() {
  const images = [
    "../Images/Banars/banar_topPage/baner1.jpg",
    "../Images/Banars/banar_topPage/baner2.jpg",
    "../Images/Banars/banar_topPage/baner3.jpg",
    "../Images/Banars/banar_topPage/baner4.jpg",
    "../Images/Banars/banar_topPage/baner5.jpg",
  ];

  setInterval(() => {
    const firstImage = getRandomImage(images);
    // Make sure that will not display the same image twice on the same time
    const secondImage = getRandomImage(images, firstImage);
    document.getElementById("img1").src = firstImage;
    document.getElementById("img2").src = secondImage;
  }, 2500);
}

startRandomImageSwitch();

// fetch("http://127.0.0.1:3000/products")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error("Error:", error));
