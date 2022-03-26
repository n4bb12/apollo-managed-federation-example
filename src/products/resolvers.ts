import { Resolvers } from "../types.generated"
import { arrayOfLength, fakeProduct } from "../utils"

export const resolvers: Resolvers = {
  Query: {
    topProducts: (parent, args) => {
      return arrayOfLength(args.first) as any[]
    },
  },
  Product: fakeProduct,
}
