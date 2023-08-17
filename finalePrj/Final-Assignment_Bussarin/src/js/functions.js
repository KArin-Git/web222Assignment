// Navigation Click Functionality
const sections = ["Home", "About Me", "Info", "Skills", "Contacts"];
const li = document.querySelectorAll("li");

li.forEach((item) => {
    item.addEventListener("click", function () {
        movePage(item.textContent);
    });
});

// Mobile Navigation Dropdown
const mobile = document.getElementById("mobile_nav");
const dropdown = document.getElementById("dropdown");
let dropdownVisible = false;

mobile.addEventListener("click", function () {
    dropdown.style.display = dropdownVisible ? "none" : "flex";
    dropdownVisible = !dropdownVisible;
});

// Move to Page Function
function movePage(targetSection) {
    const index = sections.indexOf(targetSection);
    if (index !== -1) {
        window.scrollTo({
            top: window.innerHeight * index,
            behavior: "smooth",
        });
    }
}


