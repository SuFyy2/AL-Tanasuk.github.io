// Get references to the button and additional products container
const viewMoreButton = document.getElementById('viewMoreButton');
const viewMoreProducts = document.getElementById('viewMoreProducts');

// Add click event listener to the button
viewMoreButton.addEventListener('click', function() {
    console.log('Button clicked!'); // Add this line for logging
    // Toggle the visibility of the additional products
    if (viewMoreProducts.style.display === 'none' || viewMoreProducts.style.display === '') {
        viewMoreProducts.style.display = 'grid'; // or 'block' based on your styling
        viewMoreButton.textContent = 'View Less'; // Change button text
    } else {
        viewMoreProducts.style.display = 'none';
        viewMoreButton.textContent = 'View More';
    }
});

// main.js

// Get references to the menu button and the menu slider
const menuButton = document.getElementById('menuButton');
const menuSlider = document.getElementById('menuSlider');

// Function to toggle the menu slider
function toggleMenu() {
    menuSlider.classList.toggle('show');
}

// Function to close the menu slider
function closeMenu(event) {
    // Check if the click happened outside the menu slider and the menu button
    if (!menuSlider.contains(event.target) && !menuButton.contains(event.target)) {
        menuSlider.classList.remove('show');
    }
}

// Add click event listener to the menu button to open/close the menu
menuButton.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent the click from being detected by the document click event
    toggleMenu();
});

// Add click event listener to the document to close the menu when clicking outside
document.addEventListener('click', closeMenu);


