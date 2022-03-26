import faker from "@faker-js/faker"
import { Product, ProductResolvers, User, UserResolvers } from "./types.generated"

export function arrayOfLength(length: number) {
  return Array.from(Array(length).keys())
}

export function arrayOfRandomLength() {
  const length = faker.datatype.number({ min: 1, max: 3 })
  return arrayOfLength(length)
}

export const fakeProduct: ProductResolvers<any, Product> = {
  upc: () => faker.datatype.number({ min: 100000000000, max: 999999999999 }).toString(),
  name: () => faker.commerce.productName(),
  price: () => +faker.commerce.price(),
}

export const fakeUser: UserResolvers<any, User> = {
  id: () => faker.datatype.uuid(),
  username: () => faker.internet.userName(),
}
