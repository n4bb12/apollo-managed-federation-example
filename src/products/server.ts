import { buildSubgraphSchema } from "@apollo/subgraph"
import { ApolloServer, gql } from "apollo-server"
import { ApolloServerPluginInlineTrace } from "apollo-server-core"
import { readFileSync } from "fs"
import { resolvers } from "./resolvers"

const name = "Products"
const port = 3002
const introspection = true
const plugins = [ApolloServerPluginInlineTrace()]

const typeDefs = gql(readFileSync(__dirname + "/schema.gql", "utf8"))
const schema = buildSubgraphSchema({ typeDefs, resolvers })
const server = new ApolloServer({ schema, introspection, plugins })

server.listen(port, () => {
  console.log(`${name} subgraph listening at http://localhost:${port}`)
})
