import { getSchemaTypes } from "./helpers/getSchemaTypes.js";
const { makeSchema, asNexusMethod } = require("nexus");
const { DateTimeResolver } = require("graphql-scalars");
const DateTime = asNexusMethod(DateTimeResolver, "date");

const schema = makeSchema({
  types: [...getSchemaTypes(), DateTime],
  outputs: {
    schema: __dirname + "/../schema.graphql",
    typegen: __dirname + "/generated/nexus.ts",
  },
  sourceTypes: {
    modules: [
      {
        module: "@prisma/client",
        alias: "prisma",
      },
    ],
  },
});

module.exports = {
  schema: schema,
};
