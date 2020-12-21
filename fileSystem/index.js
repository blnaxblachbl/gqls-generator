const fs = require('fs')
const path = require('path')
const { parser } = require('../parser')

function printToFile(schemaObj, saveType) {
    const { queries, mutations } = schemaObj
    const dist = "index.js"

    if (saveType == 0) {
        const schema = 'import { gql } from "@apollo/client"\n\n' + queries.map(item => item.queryString).join('\n') + '\n' + mutations.map(item => item.queryString).join('\n')

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

    if (saveType === 1) {
        const dir = path.resolve(process.cwd(), "gqls")

        const data = [...queries, ...mutations]
        const returnTypes = []
        let indexSchema = ''

        for (let current of data) {
            const exist = returnTypes.find(item => item.type === current.returnTypeName)

            if (exist) {
                exist.queries = exist.queries + '\n' + current.queryString
            } else {
                returnTypes.push({
                    type: current.returnTypeName,
                    queries: current.queryString
                })
            }
        }
        try {
            if (fs.existsSync(dir)) {
                fs.rmdirSync(dir, { recursive: true })
            }
            fs.mkdirSync(dir)

            for (let current of returnTypes) {
                const newDir = path.resolve(process.cwd(), `gqls/${current.type.toLowerCase()}`)
                const output = path.resolve(process.cwd(), `gqls/${current.type.toLowerCase()}`, dist)
                const schema = 'import { gql } from "@apollo/client"\n\n' + current.queries

                indexSchema = indexSchema + `export * from './${current.type.toLowerCase()}'\n`

                fs.mkdirSync(newDir)
                fs.writeFileSync(output, schema)
            }

            const indexOutput = path.resolve(process.cwd(), `gqls`, dist)

            fs.writeFileSync(indexOutput, indexSchema)

            console.log({ status: 'ok, schema created' })
        } catch (err) {
            console.log({ status: 'err', message: err.message })
        }
    }

    if (saveType == 2) {
        const dir = path.resolve(process.cwd(), "gqls")
        const indexSchema = `export * from './queries'\nexport * from './mutations'`
        const queriesSchema = 'import { gql } from "@apollo/client"\n\n' + queries.map(item => item.queryString).join('\n')
        const mutationsSchema = 'import { gql } from "@apollo/client"\n\n' + mutations.map(item => item.queryString).join('\n')

        const queriesDir = path.resolve(process.cwd(), "gqls/queries")
        const mutationsDir = path.resolve(process.cwd(), "gqls/mutations")

        const indexOutput = path.resolve(process.cwd(), "gqls", dist)

        const queriesOutput = path.resolve(process.cwd(), "gqls/queries", dist)
        const mutationsOutput = path.resolve(process.cwd(), "gqls/mutations", dist)


        try {
            if (fs.existsSync(dir)) {
                fs.rmdirSync(dir, { recursive: true })
            }

            fs.mkdirSync(dir)
            fs.mkdirSync(queriesDir)
            fs.mkdirSync(mutationsDir)
            fs.writeFileSync(queriesOutput, queriesSchema)
            fs.writeFileSync(mutationsOutput, mutationsSchema)

            fs.writeFileSync(indexOutput, indexSchema)

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