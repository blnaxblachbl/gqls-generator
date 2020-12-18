const fetch = require('node-fetch')
const { getIntrospectionQuery, buildClientSchema, printSchema } = require('graphql')
const { printToFile, readFile } = require('./fileSystem')
const { parser } = require('./parser')


async function getRemoteSchema(endpoint, method, headers, saveType) {
    if (!endpoint) {
        console.log({ status: "err", message: "Endpoint can't be an empty string" })
        return
    }
    try {
        const { data, errors } = await fetch(endpoint, {
            method: method ? method : "POST",
            headers: {
                'Content-Type': 'application/json',
                ...headers
            },
            body: JSON.stringify({ query: getIntrospectionQuery() }),
        }).then(res => res.json())

        if (errors) {
            console.error({ status: 'err', message: JSON.stringify(errors, null, 2) })
        }
        const schema = buildClientSchema(data)
        const res = parser(printSchema(schema))
        printToFile(res, saveType)
    } catch (err) {
        console.error({ status: 'err', message: err.message })
    }
}

async function readFromFile(path, saveType) {
    const res = readFile(path)
    printToFile(res, saveType)
}

module.exports = {
    getRemoteSchema,
    readFromFile
}