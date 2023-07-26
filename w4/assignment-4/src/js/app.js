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

// Creates all the cells for a particular category
function createCells(category) {
  // Fetching the tbody element
  var tbodyRef = document.getElementById("categoryProducts");
  var newRow, newCell, newText;

  // Iterating through the products and creating rows
  for (let i = 0; i < products.length; i++) {
    // creates a table row
    document.createElement("tr");

    // Iterating over array
    products[i].categories.forEach(function (element) {
      if (element === category && products[i].discontinued === false) {
        newRow = tbodyRef.insertRow();
        newRow.className = "tbl-row";

        // Insert a cell at the end of the row
        newCell = newRow.insertCell();
        // Append a text node to the cell
        newText = document.createTextNode(products[i].title);
        newCell.appendChild(newText);

        // Insert a cell at the end of the row
        newCell = newRow.insertCell();
        newCell.id = i;
        // Append a text node to the cell
        newText = document.createTextNode(products[i].description);
        newCell.appendChild(newText);

        // Insert a cell at the end of the row
        newCell = newRow.insertCell();
        // Append a text node to the cell
        newText = document.createTextNode(
          (products[i].price / 100).toLocaleString("en-CA", { currency: "CAD", style: "currency" })
        ); // Converting to Canadian Currency
        newCell.appendChild(newText);
      }
    });
  }
}

// Display milk chocolate by default
document.getElementById("categoryProducts").innerHTML = "";
document.getElementById("selected-category").textContent = "Milk Chocolate";
createCells("ch1");

// Function that shows a product list based on category and update the heading
function showProductList(category) {
  // Clearing all the elements so that they don't stay
  document.getElementById("categoryProducts").innerHTML = "";

  // Changing the human readable names to IDs
  for (let k = 0; k < categories.length; k++) {
    if (categories[k].name === category) {
      category = categories[k].id;
    }
  }

  // Creating cells for categories
  createCells(category);
  descriptionPrinter(category);
}

// Change the heading and show product list
let menuArr = document.querySelector("#menu").querySelectorAll("button");
for (let i = 0; i < menuArr.length; i++) {
  menuArr[i].addEventListener("click", function () {
    document.getElementById("selected-category").innerHTML = menuArr[i].textContent;
    showProductList(menuArr[i].textContent);
  });
}

// As the default category is Milk chocolate, we call the function by passing 'ch1' as the category
descriptionPrinter("ch1");

// For debugging, display all of our data in the console
console.log({ products, categories }, "Store Data");
