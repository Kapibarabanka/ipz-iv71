const {Client} = require('pg')
const client = new Client({
    user: "postgres",
    password: "Pinokio33",
    host: "localhost",
    port: 5432,
    database: "ipz1"
})

client.connect()
.then(() => console.log("fuck yeah"))
    .then()
.catch(e => console.log)
.finally(() => client.end())