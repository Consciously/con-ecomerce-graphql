exports.Review = {
	products: ({ id: productId }, args, { products }) => {
		console.log(productId);

		return products.filter(product => product.productId === productId);
	}
};
