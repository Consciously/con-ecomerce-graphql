exports.Category = {
	products: ({ id: categoryId }, { filter }, { products, reviews }) => {
		const categoryProducts = products.filter(
			product => product.categoryId === categoryId
		);
		let filteredCategoryProducts = categoryProducts;

		if (filter) {
			const { onSale, avgRating } = filter;
			if (onSale) {
				filteredCategoryProducts = filteredCategoryProducts.filter(product => {
					return product.onSale;
				});
			}

			if ([1, 2, 3, 4, 5].includes(avgRating)) {
				filteredCategoryProducts = filteredCategoryProducts.filter(product => {
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

		return filteredCategoryProducts;
	}
};
