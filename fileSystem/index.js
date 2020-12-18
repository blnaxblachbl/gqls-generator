const fs = require('fs')
const path = require('path')
const { parser } = require('../parser')

function printToFile(schemaObj, saveType) {
    const { queries, mutations } = schemaObj
    const dist = "index.js"
    
    if (saveType == 0) {
        const schema = 'import { gql } from "@apollo/client"\n\n' + queries + '\n' + mutations

        try {
            const dir = path.resolve(process.cwd(), "gqls")
            const output = path.resolve(process.cwd(), "gqls", dist)

            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir)
                fs.writeFileSync(output, schema)
            } else {
                fs.rmdirSync(dir, { recursive: true })
                fs.mkdirSync(dir)
                fs.writeFileSync(output, schema)
            }

            console.log({ status: 'ok, schema created' })
        } catch (err) {
            console.log({ status: 'err', message: err.message })
        }
    }

    if (saveType == 2) {
        const dir = path.resolve(process.cwd(), "gqls")
        const queriesSchema = 'import { gql } from "@apollo/client"\n\n' + queries
        const mutationsSchema = 'import { gql } from "@apollo/client"\n\n' + mutations

        const queriesDir = path.resolve(process.cwd(), "gqls/queries")
        const mutationsDir = path.resolve(process.cwd(), "gqls/mutations")

        const queriesOutput = path.resolve(process.cwd(), "gqls/queries", dist)
        const mutationsOutput = path.resolve(process.cwd(), "gqls/mutations", dist)

        try {
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir)
                fs.mkdirSync(queriesDir)
                fs.mkdirSync(mutationsDir)
                fs.writeFileSync(queriesOutput, queriesSchema)
                fs.writeFileSync(mutationsOutput, mutationsSchema)
            } else {
                fs.rmdirSync(dir, { recursive: true })

                fs.mkdirSync(dir)
                fs.mkdirSync(queriesDir)
                fs.mkdirSync(mutationsDir)
                fs.writeFileSync(queriesOutput, queriesSchema)
                fs.writeFileSync(mutationsOutput, mutationsSchema)
            }

            console.log({ status: 'ok, schema created' })
        } catch (err) {
            console.log({ status: 'err', message: err.message })
        }
    }
}

function readFile(filePame) {
    const dir = path.resolve(process.cwd(), filePame)
    const schema = fs.readFileSync(dir, 'utf8')
    const res = parser(schema)
    return res
}

module.exports = {
    printToFile,
    readFile
} 