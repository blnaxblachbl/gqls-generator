function parser(schema) {
    const queries = getType(schema, "Query")
    const mutations = getType(schema, "Mutation")
    let result = `import { gql } from "@apollo/client"\n\n`
    if (queries.length > 0) {
        const gqls = queries.reduce((acc, current) => {
            if (current) {
                const gqlQuery = queryParser(schema, current, 0, "", "query")
                return acc ? acc + gqlQuery : gqlQuery
            }
        }, "")
        result = result + gqls
    }
    if (mutations.length > 0) {
        const gqls = mutations.reduce((acc, current) => {
            if (current) {
                const gqlMutation = queryParser(schema, current, 0, "", "mutation")
                return acc ? acc + gqlMutation : gqlMutation
            }
        }, "")
        result = result + gqls
    }
    return result
}

function queryParser(schema, queryString = "", level = 0, previousTypeName = "", title = "query") {
    let query = queryString.match(/\w*(.*\s*\w*)?:/gm)[0]
    const queryName = query.replace(/\(.*\)/gm, "").replace(/:/, "")

    const returnType = queryString.replace(query, "")
    const returnTypeName = returnType.replace(/[\[\]!\s]/gm, "")

    const bodyTypes = getType(schema, returnTypeName)
    const body = bodyTypes.reduce((acc, current) => {
        if (current) {
            const tabs = setTabs(3, level)
            const name = current.replace(/\(.*\)/gm, "").split(":")[0]
            const returnType = current.replace(/\(.*\)/gm, "").split(":")[1]
            const returnTypeName = returnType ? returnType.replace(/[\[\]!\s]*/gm, "") : null
            const nextType = getType(schema, returnTypeName)
            if (current && returnType && nextType.length === 0) {
                if (name) {
                    acc = acc + tabs + name + "\n"
                }
            } else if (nextType.length > 0 && level < 2 && previousTypeName !== returnTypeName) {
                const nextQuery = queryParser(schema, current, level + 1, returnTypeName)
                acc = acc + tabs + nextQuery + "\n"
            }
        }
        return acc
    }, "")

    const queryArguments = query.match(/\(.*\)/gm)
    let arguments = ""
    let bodyArguments = ""
    if (queryArguments && queryArguments.length > 0) {
        const str = `${queryArguments}`
        arguments = str.replace(/[\(\)]/gm, "").split(",").reduce((acc, current) => {
            return acc + `\t\t$${current}\n`
        }, "")
    }
    if (queryArguments && queryArguments.length > 0) {
        const str = `${queryArguments}`
        bodyArguments = str.replace(/[\(\)]/gm, "").split(",").reduce((acc, current) => {
            return acc + `\t\t\t${current.split(":")[0]}: $${current.split(":")[0]}\n`
        }, "")
    }
    if (level > 0) {
        return queryName + (body ? `{\n${body}${setTabs(2, level)}}` : "") + `${setTabs(1, level)}`
    }
    const gqlName = camelToDelimiter(queryName)
    return "export const " + gqlName + " = gql`\n" + `\t${title} ` + (arguments ? `(\n${arguments}\t)` : "") + "{\n\t\t" + `${queryName}${bodyArguments ? "(\n" + bodyArguments + "\t\t)" : ""}` + (body ? `{\n${body}\t\t}\n` : "\n") + "\t}\n`\n"
}

function setTabs(defaultTabs, level) {
    return '\t'.repeat(defaultTabs + level)
}

function getType(schema, typeName, flags = 'gm') {
    const reg1 = new RegExp(`^type(${typeName}|\\s)*{([\\w\\)\\("!:,\\s\\[\\]])*}`, flags)
    const reg2 = new RegExp(`(type|${typeName}|\\s|{|})|`, flags)
    const types = schema.match(reg1)
    if (types && types.length > 0) {
        return types.map(item => item.replace(reg2, ""))[0].split(`""""""`)
    } else {
        return []
    }
}

function camelToDelimiter(name) {
    return name.split("").map(item => item === item.toLowerCase() ? item.toUpperCase() : `_${item.toUpperCase()}`).join("")
}

module.exports = {
    parser
}