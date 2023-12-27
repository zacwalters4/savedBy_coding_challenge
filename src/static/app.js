// check if document is already loaded, if it is already loaded, we don't need to listen for the event
if (document.readyState !== "loading") {
    setup()
} else {
    document.addEventListener("DOMContentLoaded", setup)
}

// QUERY SELECTORS 
const productsContainer = document.querySelector(".products-container")

// DATA MODEL

let products

// UTILITY FUNCTIONS

async function setup() {
	// Fetch the products data on page load
	fetch('/products')
	.then((response => response.json()))
	.then((data) => {
		products = data
		products.forEach(product => createProductTile(product))
	})

}

const formatPrice = (price) => {
	return price / 100
}

// DOM UPDATING FUNCTIONS

const createProductTile = (product) => {
	productsContainer.innerHTML += 
		`
        <div className="product-tile" key="${product.id}">
          <img class="product-image" src="${product.images[0].src}" alt="${product.title} image"/>
          <h3>${product.title}</h3>
          <p>$${formatPrice(product.price)}</p>
        </div>
		`
}
