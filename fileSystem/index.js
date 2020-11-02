const fs = require('fs')
const path = require('path')
const { parser } = require('../parser')

function printToFile(dist, schema) {
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