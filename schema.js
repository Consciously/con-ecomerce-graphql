const { gql } = require('apollo-server');

const typeDefs = gql`
	type Query {
		hello: String
		products(filter: ProductsFilterInput): [Product!]!
		product(id: ID!): Product
		categories: [Category!]!
		category(id: ID!): Category
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
`;

module.exports = typeDefs;
