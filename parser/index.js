const { parse } = require("graphql");

const { camelToDelimiter, setTabs } = require("./utils");

const parser = (schema) => {
  const document = parse(schema);
  let queriesArray = [];
  let mutationsArray = [];

  if (document && document.definitions && document.definitions.length > 0) {
    const { definitions } = document;

    const queries = definitions.find((item) => item.name.value === "Query");
    const mutations = definitions.find(
      (item) => item.name.value === "Mutation"
    );
    if (queries) {
      queriesArray = queries.fields.map((item) => {
        let q = queryParser(definitions, item, "query");
        return q;
      });
    }
    if (mutations) {
      mutationsArray = mutations.fields.map((item) => {
        let q = queryParser(definitions, item, "mutation");
        return q;
      });
    }
  } else {
    console.log("error document");
  }

  return {
    queries: queriesArray,
    mutations: mutationsArray,
  };
};

const queryParser = (definitions, current = null, title = "query") => {
  let query = {};

  if (current) {
    const queryName = current.name.value;
    const arguments = argumentsParser(queryName, current.arguments, title);
    const curetnTypeName = getBodyTypeName(current.type);
    const body = budyParser(definitions, current.type, [curetnTypeName]);

    query["returnTypeName"] = curetnTypeName;
    query["queryString"] =
      "export const " +
      camelToDelimiter(queryName) +
      " = gql`\n\t" +
      arguments[0] +
      "{\n\t\t" +
      queryName +
      arguments[1] +
      body +
      "\n\t}\n" +
      "`";
  }
  return query;
};

const argumentsParser = (queryName = "", arguments = [], title) => {
  let res1 = "";
  let res2 = "";
  let argRes = "";
  if (arguments.length > 0) {
    for (let arg of arguments) {
      const { name, type } = arg;
      argRes =
        argRes + `\n\t\t$${name.value}` + ": " + argumentTypeParser(type);
      res1 = `${title}(${argRes}\n\t)`;
      res2 = res2 + ("\n\t\t\t" + name.value + ": $" + name.value);
    }
  }

  if (res2) {
    res2 = "(" + res2 + "\n\t\t)";
  }

  return [res1, res2];
};

const argumentTypeParser = (data) => {
  let res = "";

  if (data) {
    const { kind, type, name } = data;
    if (kind === "NamedType") {
      res = name.value;
    }
    if (kind === "ListType") {
      res = `[${argumentTypeParser(type)}]`;
    }
    if (kind === "NonNullType") {
      res = argumentTypeParser(type) + `!`;
    }
  }

  return res;
};

const budyParser = (definitions, data, prevTypeName = []) => {
  let res = "";
  let returnTypeName = getBodyTypeName(data);
  let returnType = definitions.find(
    (item) => item.name.value === returnTypeName
  );
  const level = prevTypeName.length;

  if (returnType) {
    const { fields } = returnType;
    if (fields) {
      for (let f of fields) {
        let name = "";

        const fieldTypeName = getBodyTypeName(f.type);
        const prevFieldTypeName = prevTypeName[level - 2];
        const nextType = definitions.find(
          (item) => item.name.value === fieldTypeName
        );

        if (level < 4 && prevFieldTypeName !== fieldTypeName) {
          if (nextType) {
            const nextBody = budyParser(definitions, f.type, [
              ...prevTypeName,
              fieldTypeName,
            ]);
            if (nextBody) {
              name = f.name.value + nextBody;
            } else if (nextType.kind !== "ObjectTypeDefinition") {
              name = f.name.value;
            }
          } else {
            name = f.name.value;
          }
        }
        if (name) {
          res = res + `\n${setTabs(2, level)}${name}`;
        }
      }
    }
  }

  return res ? `{${res}\n${setTabs(1, level)}}` : "";
};

const getBodyTypeName = (data) => {
  let typeName = "";

  if (data) {
    const { kind, type } = data;
    if (kind === "NamedType") {
      typeName = data.name.value;
    } else {
      typeName = getBodyTypeName(type);
    }
  }

  return typeName;
};

module.exports = {
  parser,
};
