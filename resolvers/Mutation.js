const { v4: uuidV4 } = require('uuid');

exports.Mutation = {
	addCategory: (parent, { input }, { db }) => {
		const { name } = input;

		const newCategory = {
			id: uuidV4(),
			name
		};

		db.categories.push(newCategory);

		return newCategory;
	},
	addProduct: (parent, { input }, { db }) => {
		const { name, description, image, quantity, price, onSale, categoryId } =
			input;

		const newProduct = {
			id: uuidV4(),
			name,
			description,
			image,
			quantity,
			price,
			onSale,
			categoryId
		};

		db.products.push(newProduct);

		return newProduct;
	},
	addReview: (parent, { input }, { db }) => {
		const { title, comment, rating, date, productId } = input;

		const newReview = {
			id: uuidV4(),
			title,
			comment,
			rating,
			date,
			productId
		};

		db.reviews.push(newReview);

		return newReview;
	},
	deleteCategory: (parent, { id }, { db }) => {
		db.categories = db.categories.filter(category => category.id !== id);
		db.products = db.products.map(product => {
			if (product.categoryId === id) {
				return {
					...product,
					categoryId: null
				};
			} else return product;
		});
		return true;
	},
	deleteProduct: (parent, { id }, { db }) => {
		db.products = db.products.filter(product => product.id !== id);
		db.reviews = db.reviews.filter(review => review.productId !== id);

		return true;
	},
	deleteReview: (parent, { id }, { db }) => {
		db.reviews = db.reviews.filter(review => review.id !== id);

		return true;
	}
};
