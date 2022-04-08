const { gql } = require('apollo-server');

const typeDefs = gql`
	type Query {
		hello: String
		products(filter: ProductsFilterInput): [Product!]!
		product(id: ID!): Product
		categories: [Category!]!
		category(id: ID!): Category
	}

	type Mutation {
		addCategory(input: AddCategoryInput!): Category!
		addProduct(input: AddProductInput!): Product!
		addReview(input: AddReviewInput!): Review!
	}

	type Product {
		id: ID!
		name: String!
		description: String!
		image: String!
		quantity: Int!
		price: Float!
		onSale: Boolean!
		category: Category
		reviews: [Review!]!
	}

	type Category {
		id: ID!
		name: String!
		products(filter: ProductsFilterInput): [Product!]!
	}

	type Review {
		id: ID!
		title: String!
		comment: String!
		rating: Int!
		date: String!
	}

	input ProductsFilterInput {
		onSale: Boolean
		avgRating: Int
	}

	input AddCategoryInput {
		name: String!
	}

	input AddProductInput {
		name: String!
		description: String!
		image: String!
		quantity: Int!
		price: Float!
		onSale: Boolean!
		categoryId: ID!
	}

	input AddReviewInput {
		title: String!
		comment: String!
		rating: Int!
		date: String!
		productId: ID!
	}
`;

module.exports = typeDefs;
