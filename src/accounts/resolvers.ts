import faker from "@faker-js/faker"
import { Resolvers } from "../types.generated"

export const resolvers: Resolvers = {
  Query: {
    me: () => ({
      id: faker.datatype.uuid(),
      username: faker.internet.userName(),
    }),
  },
}
