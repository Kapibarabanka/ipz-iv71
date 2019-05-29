// regex to check login (conatins a....z, _, 0...9) and email (it should look like[a...z, 0...9, _]@[a...z].domain)
var emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
var loginRE = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/

// create Vue app
var app = new Vue({
    // element to mount to
    el: '#app',
    // initial data
    data: {
        newUser: {
            name: '',
            first_name: '',
            second_name: '',
            sex: '',
            date_of_birth: '',
            email: '',
            prof: '',
            science: '',
            login_reg: '',
            password_reg: '',
            password_check: '',
        }
    },

    computed: {
        validation: function () {
            return {
                name: !!this.newUser.name.trim(),
                first_name: !!this.newUser.first_name.trim(),
                second_name: !!this.newUser.name.trim(),
                sex: !!this.newUser.sex.trim(),
                date_of_birth: !!this.newUser.date_of_birth.trim(),
                email: emailRE.test(this.newUser.email),
                prof: !!this.newUser.prof.trim(),
                science: !!this.newUser.science.trim(),
                login_reg: loginRE.test(this.newUser.login_reg),
                password_reg: !!this.newUser.name.trim(),
                // password check validation is not correct yet(
                password_check: this.password_reg == this.password_check
            }
        },
        isValid: function () {
            var validation = this.validation
            return Object.keys(validation).every(function (key) {
                return validation[key]
            })
        }
    },

    methods: {

        // попытка всунуть информацию о логине и пароле в дб (still doznt work)

        addUser: function () {
            if (this.isValid) {

                const pg = require('pg')

                const conString = 'database_link'
                pg.connect(conString, function (err, client, done) {
                    if (err) {
                        return console.error('error fetching client from pool', err)
                    }
                    client.query('SELECT $1::varchar AS my_first_query', ['node hero'], function (err, result) {
                        done()
                        if (err) {
                            return console.error('error happened during query', err)
                        }
                        console.log(result.rows[0])
                        process.exit(0)
                    })
                })
                app.post('/users', function (req, res, next) {
                    const user = req.body
                    pg.connect(conString, function (err, client, done) {
                        if (err) {
                            return next(err)
                        }
                        client.query('INSERT INTO users (name, age) VALUES ($1, $2);', [user.name, user.age], function (err, result) {
                            if (err) {
                                return next(err)
                            }
                            res.send(200)
                        })
                    })
                })
                this.newUser.name = ''
                this.newUser.email = ''
            }
        },
        removeUser: function (user) {
            usersRef.child(user['.key']).remove()
        }
    }

})