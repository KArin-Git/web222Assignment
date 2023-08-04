/**
 * WEB222 – Assignment 04
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       <YOUR_NAME>
 *      Student ID: <YOUR_STUDENT_ID>
 *      Date:       <SUBMISSION_DATE>
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;

// Here, we create arrays of descriptions for each category respectively
// chocolate
let milkChocoArr = [];
let darkChocoArr = [];
let luxuryChocoArr = [];
let flavorChocoArr = [];
// tea
let japaneseTeaArr = [];
let herbalTeaArr = [];
let whiteTeaArr = [];
let luxuryTeaArr = [];
let blackTeaArr = [];

for (let i = 0; i < products.length; i++) {
  products[i].categories.forEach(function (element) {
    if (element === "ch1" && products[i].discontinued === false) {
      milkChocoArr.push(products[i].description);
    } else if (element === "ch2" && products[i].discontinued === false) {
      darkChocoArr.push(products[i].description);
    } else if (element === "ch3" && products[i].discontinued === false) {
      luxuryChocoArr.push(products[i].description);
    } else if (element === "ch4" && products[i].discontinued === false) {
      flavorChocoArr.push(products[i].description);
    } else if (element === "ct1" && products[i].discontinued === false) {
      japaneseTeaArr.push(products[i].description);
    } else if (element === "ct2" && products[i].discontinued === false) {
      herbalTeaArr.push(products[i].description);
    } else if (element === "ct3" && products[i].discontinued === false) {
      whiteTeaArr.push(products[i].description);
    } else if (element === "ct4" && products[i].discontinued === false) {
      luxuryTeaArr.push(products[i].description);
    } else if (element === "ct5" && products[i].discontinued === false) {
      blackTeaArr.push(products[i].description);
    }
  });
}

// Creating the navbar dynamically
let menu = document.getElementById("menu");
for (let i = 0; i < categories.length; i++) {
  let newMenuItem = document.createElement("button");
  newMenuItem.textContent = categories[i].name;
  newMenuItem.id = categories[i].name;
  menu.appendChild(newMenuItem);
}

// Prints the description of tea product
function descriptionPrinter(category) {
  // Whenever the user clicks on an element, the program prints the description of the product to the console
  let tableRows = document.getElementsByClassName("tbl-row");

  // Using the length as per the category and printing description by using the parallel array concept
  if (category === "ch1") {
    for (let i = 0; i < milkChocoArr.length; i++) {
      tableRows[i].addEventListener("click", function () {
        console.log(milkChocoArr[i]);
      });
    }
  } else if (category === "ch2") {
    for (let i = 0; i < darkChocoArr.length; i++) {
      tableRows[i].addEventListener("click", function () {
        console.log(darkChocoArr[i]);
      });
    }
  } else if (category === "ch3") {
    for (let i = 0; i < luxuryChocoArr.length; i++) {
      tableRows[i].addEventListener("click", function () {
        console.log(luxuryChocoArr[i]);
      });
    }
  } else if (category === "ch4") {
    for (let i = 0; i < flavorChocoArr.length; i++) {
      tableRows[i].addEventListener("click", function () {
        console.log(flavorChocoArr[i]);
      });
    }
  } else if (category === "ct1") {
    for (let i = 0; i < japaneseTeaArr.length; i++) {
      tableRows[i].addEventListener("click", function () {
        console.log(japaneseTeaArr[i]);
      });
    }
  } else if (category === "ct2") {
    for (let i = 0; i < herbalTeaArr.length; i++) {
      tableRows[i].addEventListener("click", function () {
        console.log(herbalTeaArr[i]);
      });
    }
  } else if (category === "ct3") {
    for (let i = 0; i < whiteTeaArr.length; i++) {
      tableRows[i].addEventListener("click", function () {
        console.log(whiteTeaArr[i]);
      });
    }
  } else if (category === "ct4") {
    for (let i = 0; i < luxuryTeaArr.length; i++) {
      tableRows[i].addEventListener("click", function () {
        console.log(luxuryTeaArr[i]);
      });
    }
  } else if (category === "ct5") {
    for (let i = 0; i < blackTeaArr.length; i++) {
      tableRows[i].addEventListener("click", function () {
        console.log(blackTeaArr[i]);
      });
    }
  }
}

// Function to create a product card dynamically
function createProductCard(product) {
  const card = document.createElement("div");
  card.classList.add("card");

  // Create and add product image
  const productImage = document.createElement("img");
  productImage.src = product.imageUrl;
  productImage.alt = product.title;
  productImage.classList.add("card-image");
  card.appendChild(productImage);

  // Create and add product title
  const title = document.createElement("h2");
  title.textContent = product.title;
  title.classList.add("card-title");
  card.appendChild(title);

  // Create and add product description
  const description = document.createElement("p");
  description.textContent = product.description;
  description.classList.add("card-description");
  card.appendChild(description);

  // Create and add product price
  const price = document.createElement("span");
  price.textContent = "$" + (product.price / 100).toFixed(2);
  price.classList.add("card-price");
  card.appendChild(price);

  return card;
}

// Function to display product cards on the page for a specific category
function displayProductCards(category) {
  const productContainer = document.querySelector(".product-container");
  productContainer.innerHTML = ""; // Clear the previous content

  // Filter products based on the selected category
  const filteredProducts = products.filter((product) => product.categories.includes(category));

  // Loop through filtered products and create product cards for each
  for (const product of filteredProducts) {
    const productCard = createProductCard(product);
    productContainer.appendChild(productCard);
  }
}

// Function that shows a product list based on category and update the heading
function showProductList(category) {
  // Clearing all the elements so that they don't stay
  document.querySelector(".product-container").innerHTML = "";

  // Changing the human-readable names to IDs
  for (let k = 0; k < categories.length; k++) {
    if (categories[k].name === category) {
      category = categories[k].id;
    }
  }

  // Creating product cards for the selected category
  displayProductCards(category);
}

// Attach click event listeners to category buttons
const menuArr = document.querySelector("#menu").querySelectorAll("button");
for (let i = 0; i < menuArr.length; i++) {
  menuArr[i].addEventListener("click", function () {
    document.getElementById("selected-category").innerHTML = menuArr[i].textContent;
    showProductList(menuArr[i].textContent);
  });
}

// Display milk chocolate by default
document.getElementById("selected-category").textContent = "Milk Chocolate";
showProductList("Milk Chocolate");

// As the default category is Milk chocolate, we call the function by passing 'ch1' as the category
descriptionPrinter("ch1");

// For debugging, display all of our data in the console
console.log({ products, categories }, "Store Data");
