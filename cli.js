#!/usr/bin/env node

const { getRemoteSchema, readFromFile } = require("./index")

let [, , ...args] = process.argv
const [endpint] = args

console.log(endpint)

if (endpint) {
    if (endpint.match(/^(http|https)/gm)) {
        console.log("endpint", endpint)
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
            console.log("headers", headersToSend)
        }
        if (method) {
            methodToSend = method[0].replace(/-m /gm, "")
            console.log("method", methodToSend)
        }
        getRemoteSchema(endpint, methodToSend, headers)
    } else {
        readFromFile(endpint)
    }
} else {
    console.error("Endter your endpoint")
}
