import { objectType, intArg } from "nexus";

const postQueries = objectType({
  name: "Query",
  definition(t) {
    t.nullable.field("postById", {
      type: "Post",
      args: {
        id: intArg(),
      },
      resolve: (_parent, args, context) => {
        return context.prisma.post.findUnique({
          where: { id: args.id || undefined },
        });
      },
    });
  },
});

export default postQueries;
