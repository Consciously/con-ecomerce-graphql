const { products, categories } = require('./data');

const resolvers = {
	Query: {
		hello: () => {
			return 'World!';
		},
		products: () => {
			return products;
		},
		product: (parent, args, context) => {
			const { id } = args;
			return products.find(product => product.id === id);
		},
		categories: () => {
			return categories;
		},
		category: (parent, args, context) => {
			const { id } = args;
			return categories.find(category => category.id === id);
		}
	},
	Category: {
		products: (parent, args, context) => {
			const categoryId = parent.id;
			return products.filter(product => product.categoryId === categoryId);
		}
	},
	Product: {
		category: (parent, args, context) => {
			const categoryId = parent.categoryId;
			return categories.find(category => category.id === categoryId);
		}
	}
};

module.exports = resolvers;
