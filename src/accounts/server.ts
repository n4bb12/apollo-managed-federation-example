import { buildSubgraphSchema } from "@apollo/subgraph"
import { ApolloServer } from "apollo-server"
import { ApolloServerPluginInlineTrace } from "apollo-server-core"
import { resolvers } from "./resolvers"
import { typeDefs } from "./schema"

const name = "Accounts"
const port = 3001
const introspection = true
const plugins = [ApolloServerPluginInlineTrace()]

const schema = buildSubgraphSchema({ typeDefs, resolvers })
const server = new ApolloServer({ schema, introspection, plugins })

server.listen(port, () => {
  console.log(`${name} subgraph listening at http://localhost:${port}`)
})
