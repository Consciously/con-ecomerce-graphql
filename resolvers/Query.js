exports.Query = {
	hello: () => {
		return 'World!';
	},
	products: (parent, { filter }, { db }) => {
		let filteredProducts = db.products;

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
					const sumRating = db.reviews.reduce((sumRating, review) => {
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
	product: (parent, { id }, { db }) => {
		return db.products.find(product => product.id === id);
	},
	categories: (parent, args, { db }) => {
		return db.categories;
	},
	category: (parent, { id }, { db }) => {
		return db.categories.find(category => category.id === id);
	}
};
