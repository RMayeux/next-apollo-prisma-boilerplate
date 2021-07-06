import glob from "glob";
import path from "path";
import { merge } from "lodash";

export const getSchemaTypes = () => {
  console.log(
    getSchemaTypesProps("queries"),
    getSchemaTypesProps("mutations"),
    getSchemaTypesProps("inputs"),
    getSchemaTypesProps("entity")
  );
  return [
    getSchemaTypesProps("queries"),
    getSchemaTypesProps("mutations"),
    getSchemaTypesProps("inputs"),
    getSchemaTypesProps("entity"),
  ];
};

const getSchemaTypesProps = (type) => {
  let props;

  glob.sync(path.resolve(`src/api/**/${type}.js`)).forEach((module) => {
    const modulePath = module.slice(module.indexOf("api"));
    const { default: prop } = require(`../../${modulePath}`);
    if (prop.name === "Query" || prop.name === "Mutation") {
      prop && (props = merge(props, prop));
    } else {
      if (!props) props = [];
      prop && (props = [...props, prop]);
    }
  });

  return merge(props);
};
