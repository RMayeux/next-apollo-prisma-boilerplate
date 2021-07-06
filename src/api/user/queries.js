import { objectType } from "nexus";

const userQueries = objectType({
  name: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("user", {
      type: "User",
      resolve: (_parent, _args, context) => {
        return context.prisma.user.findMany();
      },
    });
  },
});

export default userQueries;
