import { gql } from "apollo-server"

export const typeDefs = gql`
  type User @key(fields: "id") {
    id: ID!
    username: String!
  }

  extend type Query {
    me: User
  }
`
