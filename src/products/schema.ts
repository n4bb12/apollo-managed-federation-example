import { gql } from "apollo-server"

export const typeDefs = gql`
  type Product @key(fields: "upc") {
    upc: String!
    name: String!
    price: Int
  }

  extend type Query {
    topProducts(first: Int = 5): [Product]
  }
`
