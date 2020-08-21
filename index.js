require("dotenv").config()
const server = require("./server")

const Port = process.env.Port

server.listen(Port, () => {
    console.log(`\n Listening on Port ${Port} ....\n`)
})