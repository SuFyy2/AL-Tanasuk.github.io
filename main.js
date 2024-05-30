const viewMoreButton = document.getElementById('viewMoreButton');
const viewMoreProducts = document.getElementById('viewMoreProducts');

viewMoreButton.addEventListener('click', function() {
    console.log('Button clicked!'); 
    if (viewMoreProducts.style.display === 'none' || viewMoreProducts.style.display === '') {
        viewMoreProducts.style.display = 'grid'; 
        viewMoreButton.textContent = 'View Less'; 
    } else {
        viewMoreProducts.style.display = 'none';
        viewMoreButton.textContent = 'View More';
    }
});



const menuButton = document.getElementById('menuButton');
const menuSlider = document.getElementById('menuSlider');


function toggleMenu() {
    menuSlider.classList.toggle('show');
}

function closeMenu(event) {
    if (!menuSlider.contains(event.target) && !menuButton.contains(event.target)) {
        menuSlider.classList.remove('show');
    }
}

menuButton.addEventListener('click', function(event) {
    event.stopPropagation(); 
    toggleMenu();
});

document.addEventListener('click', closeMenu);


