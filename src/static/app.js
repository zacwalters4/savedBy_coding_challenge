// check if document is already loaded, if it is already loaded, we don't need to listen for the event
if (document.readyState !== "loading") {
    setup()
} else {
    document.addEventListener("DOMContentLoaded", setup)
}

// --------------- QUERY SELECTORS ---------------
const productsContainer = document.querySelector(".products-container")
const searchBox = document.querySelector('input[name="search"]')


// --------------- EVENT LISTENERS ---------------


// --------------- DATA MODEL ---------------

let products

// --------------- UTILITY FUNCTIONS ---------------

async function setup() {
	// Fetch the products data on page load
	fetch('/products')
	.then((response => response.json()))
	.then((data) => {
		// Sort the products by price from low to high
		data.sort((a, b) => a.price - b.price)

		products = data

		// Populate the products container with the newly fetched products
		// products.forEach(product => createProductTile(product))
		populateProducts()

		searchBox.addEventListener('keyup', populateProducts)
	})
}

const formatPrice = (price) => {
	// Format price to dollars with cents shown
	return (price / 100).toFixed(2)
}

const filterProducts = () => {
	// Grab search box value
	const filter = searchBox.value

	// Return the filtered array, use toLowerCase to make the search function case insensitive
	return(products.filter((product) => product.title.toLowerCase().includes(filter.toLowerCase())))	
}

// --------------- DOM UPDATING FUNCTIONS ---------------

const populateProducts = () => {
	productsContainer.innerHTML = ''
	filterProducts().forEach(product => createProductTile(product))
}

const createProductTile = (product) => {
	productsContainer.innerHTML += 
		`
        <div class="product-tile" key="${product.id}">
          <img class="product-image" src="${product.images[0].src}" alt="${product.title} image"/>
          <h3>${product.title}</h3>
          <p>$${formatPrice(product.price)}</p>
        </div>
		`
}
