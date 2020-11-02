const fetch = require('node-fetch')
const { getIntrospectionQuery, buildClientSchema, printSchema } = require('graphql')
const { printToFile, readFile } = require('./fileSystem')
const { parser } = require('./parser')
const { fstat } = require('fs')


async function getRemoteSchema(endpoint, method, headers) {
    if (!endpoint) {
        console.log({ status: "err", message: "endpoint can't be an empty string" })
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
            // return { status: 'err', message: JSON.stringify(errors, null, 2) }
        }
        const schema = buildClientSchema(data)
        const res = parser(printSchema(schema))
    } catch (err) {
        console.error({ status: 'err', message: err.message })
        // return { status: 'err', message: err.message }
    }
}

async function readFromFile(path) {
    readFile(path)
}

// readFromFile("schema.graphql")

// getRemoteSchema()

module.exports = {
    getRemoteSchema,
    readFromFile
}