const { v4: uuidV4 } = require('uuid');

exports.Mutation = {
	addCategory: (parent, { input }, { categories }) => {
		const { name } = input;

		const newCategory = {
			id: uuidV4(),
			name
		};

		categories.push(newCategory);

		return newCategory;
	},
	addProduct: (parent, { input }, { products }) => {
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

		products.push(newProduct);

		return newProduct;
	},
	addReview: (parent, { input }, { reviews }) => {
		const { title, comment, rating, date, productId } = input;

		const newReview = {
			id: uuidV4(),
			title,
			comment,
			rating,
			date,
			productId
		};

		reviews.push(newReview);

		return newReview;
	}
};
