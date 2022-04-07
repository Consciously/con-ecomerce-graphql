exports.Query = {
	hello: () => {
		return 'World!';
	},
	products: (parent, { filter }, { products, reviews }) => {
		let filteredProducts = products;

		if (filter) {
			const { onSale, avgRating } = filter;
			if (onSale) {
				filteredProducts = filteredProducts.filter(product => {
					return product.onSale;
				});
			}
			if ([1, 2, 3, 4, 5].includes(avgRating)) {
				filteredProducts = filteredProducts.filter(product => {
					let numberOfReviews = 0;
					const sumRating = reviews.reduce((sumRating, review) => {
						if (review.productId === product.id) {
							numberOfReviews++;
							return sumRating + review.rating;
						}
						return sumRating;
					}, 0);
					const avgProductRating = sumRating / numberOfReviews;
					return avgProductRating >= avgRating;
				});
			}
		}

		return filteredProducts;
	},
	product: (parent, { id }, { products }) => {
		return products.find(product => product.id === id);
	},
	categories: (parent, args, { categories }) => {
		return categories;
	},
	category: (parent, { id }, { categories }) => {
		return categories.find(category => category.id === id);
	}
};
