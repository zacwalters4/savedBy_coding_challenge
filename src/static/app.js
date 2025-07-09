window.addEventListener("DOMContentLoaded", setup);

async function setup() {
	// START HERE
	// PRODUCTS CAN BE FETCHED USING: GET /products
	// TODO: Sort the products by price "asc" using the provided `messyFunction()` function.
	// TODO: Render the sorted products to the page.
}

/**
 * Sorts the products by price either in ascending or descending order.
 *
 * Your task is to refactor and improve this function:
 * - Make it clean, modern, and readable.
 * - Allow sorting in **either ascending** or **descending** order based on a parameter.
 * - Ensure the output remains the same.
 *
 * Requirements:
 * - Refactor the code to use modern JavaScript syntax and best practices.
 * - Rename variables and functions to be more descriptive.
 * - Fill in the missing parts of the JSDoc comments.
 *
 * Feel free to leave comments explaining your thought process.
 *
 * @param {}
 * @param {}
 * @returns {}
 */
function messyFunction(data1, data2) {
	let t = [];
	for (let i = 0; i < data1.length; i++) {
		t.push(data1[i]);
	}
	for (let i = 0; i < t.length; i++) {
		for (let j = i + 1; j < t.length; j++) {
			if ((data2 === "asc" && t[i].price > t[j].price) || (data2 === "desc" && t[i].price < t[j].price)) {
				let tmp = t[i];
				t[i] = t[j];
				t[j] = tmp;
			}
		}
	}
	return t;
}
