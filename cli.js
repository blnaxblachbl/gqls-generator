#!/usr/bin/env node

const { getRemoteSchema, readFromFile } = require("./index")
const inquirer = require('inquirer')

const options = [{
    type: 'list',
    name: 'type',
    message: 'Please choose how to save your data',
    choices: ['In one file', 'Split by return types', 'Split by queries and mutations types'],
    default: 'In one index.js file',

}]

const init = async () => {
    let [, , ...args] = process.argv
    const [endpint] = args

    if (endpint) {
        let saveType = 0
        const answer = await inquirer.prompt(options)

        switch (answer.type) {
            case "Split by return types": {
                saveType = 1
                break
            }
            case "Split by queries and mutations types": {
                saveType = 2
                break
            }
            default:
                break
        }

        if (endpint.match(/^(http|https)/gm)) {
            const method = args.join(" ").match(/-m (POST|GET|DELETE|PUT)/gm)
            const headers = args.join(" ").replace(method, "").match(/-h ( *.+=.+)+/gm)
            let headersToSend = {}
            let methodToSend = "POST"
            if (headers) {
                const headersArray = headers[0].replace(/-h /gm, "").split(" ")
                headersArray.map(item => {
                    if (item) {
                        headersToSend[item.split("=")[0]] = item.split("=")[1]
                    }
                })
            }
            if (method) {
                methodToSend = method[0].replace(/-m /gm, "")
            }
            getRemoteSchema(endpint, methodToSend, headers, saveType)
        } else {
            readFromFile(endpint, saveType)
        }
    } else {
        console.error("Endter your endpoint")
    }
}

init()
