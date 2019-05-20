const path = require('path')
module.exports = function(app, express) {
    app.set('views', path.join(__dirname, '../views'))
        .use(express.static(path.join(__dirname, '../public')))
    app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'html');
}
