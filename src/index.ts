import nodeFetch, { Headers } from "node-fetch";
import { getIntrospectionQuery, buildClientSchema, printSchema } from "graphql";
import { printToFile, readFile } from "./fileSystem";
import { parser } from "./parser";

async function getRemoteSchema(
  endpoint: string,
  method: string,
  headers: Headers,
  saveType: number
) {
  if (!endpoint) {
    console.log({
      status: "err",
      message: "Endpoint can't be an empty string",
    });
    return;
  }
  const { data, errors } = await nodeFetch(endpoint, {
    method: method ? method : "POST",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify({ query: getIntrospectionQuery() }),
  }).then((res) => res.json());

  if (errors) {
    console.error({
      status: "err",
      message: JSON.stringify(errors, null, 2),
    });
  } else {
    const schema = buildClientSchema(data);
    const res = parser(printSchema(schema));
    printToFile(res, saveType);
  }
}

async function readFromFile(path: string, saveType: number) {
  const res = readFile(path);
  printToFile(res, saveType);
}

module.exports = {
  getRemoteSchema,
  readFromFile,
};
