const { Client } = require('pg')
const client = new Client()
client.connect()
var app = new Vue ({
    el: '#app',
    data: {
        title: "Hello World!",
        name: "Viktor",
        surname: "Shal"
    }


});



