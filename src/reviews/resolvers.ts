import faker from "@faker-js/faker"
import { Product, Resolvers, User } from "../types.generated"
import { arrayOfRandomLength, fakeProduct, fakeUser } from "../utils"

export const resolvers: Resolvers = {
  User: {
    reviews: (author: User) => {
      return arrayOfRandomLength().map(() => ({
        product: fakeProduct,
        author,
      })) as any[]
    },
  },
  Product: {
    reviews: (product: Product) => {
      return arrayOfRandomLength().map(() => ({
        product,
        author: fakeUser,
      })) as any[]
    },
  },
  Review: {
    body: () => faker.lorem.paragraph(1),
  },
}
