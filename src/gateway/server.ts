import { ApolloGateway } from "@apollo/gateway"
import { ApolloServer } from "apollo-server"
import { ApolloServerPluginInlineTrace } from "apollo-server-core"
import dotenv from "dotenv"

const name = "Gateway"
const port = 3000
const introspection = true
const plugins = [ApolloServerPluginInlineTrace()]

dotenv.config({ path: ".env.local" })

const gateway = new ApolloGateway()
const server = new ApolloServer({ gateway, introspection, plugins })

server.listen(port, () => {
  console.log(`${name} subgraph listening at http://localhost:${port}`)
})
